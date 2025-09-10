import React, { useState, useEffect } from 'react'

const SearchFilter = ({ data }) => {
  // State for search term
  const [searchTerm, setSearchTerm] = useState('')
  
  // State for category filter
  const [selectedCategory, setSelectedCategory] = useState('all')
  
  // State for stock filter
  const [showInStockOnly, setShowInStockOnly] = useState(false)
  
  // State for price range
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10 })
  
  // State for filtered results
  const [filteredData, setFilteredData] = useState(data)
  
  // State for sorting
  const [sortBy, setSortBy] = useState('name')
  const [sortOrder, setSortOrder] = useState('asc')

  // Get unique categories for filter dropdown
  const categories = ['all', ...new Set(data.map(item => item.category))]

  // Filter and search function
  const applyFilters = () => {
    let filtered = [...data]

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory)
    }

    // Stock filter
    if (showInStockOnly) {
      filtered = filtered.filter(item => item.inStock)
    }

    // Price range filter
    filtered = filtered.filter(item => 
      item.price >= priceRange.min && item.price <= priceRange.max
    )

    // Sorting
    filtered.sort((a, b) => {
      let aValue = a[sortBy]
      let bValue = b[sortBy]
      
      if (typeof aValue === 'string') {
        aValue = aValue.toLowerCase()
        bValue = bValue.toLowerCase()
      }
      
      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1
      } else {
        return aValue < bValue ? 1 : -1
      }
    })

    setFilteredData(filtered)
  }

  // useEffect to apply filters whenever any filter state changes
  useEffect(() => {
    applyFilters()
  }, [searchTerm, selectedCategory, showInStockOnly, priceRange, sortBy, sortOrder])

  // Reset all filters
  const resetFilters = () => {
    setSearchTerm('')
    setSelectedCategory('all')
    setShowInStockOnly(false)
    setPriceRange({ min: 0, max: 10 })
    setSortBy('name')
    setSortOrder('asc')
  }

  return (
    <div className="search-filter-container">
      {/* Search and Filter Controls */}
      <div className="controls">
        <div className="control-group">
          <label htmlFor="search">Search by name:</label>
          <input
            id="search"
            type="text"
            placeholder="Search items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="control-group">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="select-input"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category === 'all' ? 'All Categories' : category}
              </option>
            ))}
          </select>
        </div>

        <div className="control-group">
          <label>
            <input
              type="checkbox"
              checked={showInStockOnly}
              onChange={(e) => setShowInStockOnly(e.target.checked)}
            />
            In stock only
          </label>
        </div>

        <div className="control-group">
          <label>Price range: ${priceRange.min} - ${priceRange.max}</label>
          <div className="price-range">
            <input
              type="range"
              min="0"
              max="5"
              step="0.1"
              value={priceRange.min}
              onChange={(e) => setPriceRange(prev => ({ ...prev, min: parseFloat(e.target.value) }))}
            />
            <input
              type="range"
              min="0"
              max="5"
              step="0.1"
              value={priceRange.max}
              onChange={(e) => setPriceRange(prev => ({ ...prev, max: parseFloat(e.target.value) }))}
            />
          </div>
        </div>

        <div className="control-group">
          <label htmlFor="sortBy">Sort by:</label>
          <select
            id="sortBy"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="select-input"
          >
            <option value="name">Name</option>
            <option value="price">Price</option>
            <option value="category">Category</option>
          </select>
          <button
            onClick={() => setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')}
            className="sort-button"
          >
            {sortOrder === 'asc' ? '↑' : '↓'}
          </button>
        </div>

        <button onClick={resetFilters} className="reset-button">
          Reset Filters
        </button>
      </div>

      {/* Results Summary */}
      <div className="results-summary">
        <p>Showing {filteredData.length} of {data.length} items</p>
      </div>

      {/* Results Grid */}
      <div className="results-grid">
        {filteredData.length > 0 ? (
          filteredData.map(item => (
            <div key={item.id} className={`item-card ${!item.inStock ? 'out-of-stock' : ''}`}>
              <h3>{item.name}</h3>
              <p className="category">{item.category}</p>
              <p className="price">${item.price.toFixed(2)}</p>
              <p className={`stock ${item.inStock ? 'in-stock' : 'out-of-stock'}`}>
                {item.inStock ? 'In Stock' : 'Out of Stock'}
              </p>
            </div>
          ))
        ) : (
          <div className="no-results">
            <p>No items found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchFilter

