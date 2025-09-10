import BacteriaCard from "./BacteriaCard";

const BacteriaList = ({ 
  bacteria, 
  searchTerm, 
  setSearchTerm, 
  filterType, 
  setFilterType, 
  filterShape, 
  setFilterShape 
}) => {
  return (
    <div>
      {/* Search and Filter Controls */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Search & Filter</h5>
              
              {/* Search Input */}
              <div className="mb-3">
                <label htmlFor="searchInput" className="form-label">
                  Search Bacteria
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="searchInput"
                  placeholder="Search by name, description, or habitat..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Filter Controls */}
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="typeFilter" className="form-label">
                    Filter by Type
                  </label>
                  <select
                    className="form-select"
                    id="typeFilter"
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                  >
                    <option value="all">All Types</option>
                    <option value="Gram-positive">Gram-positive</option>
                    <option value="Gram-negative">Gram-negative</option>
                  </select>
                </div>
                
                <div className="col-md-6 mb-3">
                  <label htmlFor="shapeFilter" className="form-label">
                    Filter by Shape
                  </label>
                  <select
                    className="form-select"
                    id="shapeFilter"
                    value={filterShape}
                    onChange={(e) => setFilterShape(e.target.value)}
                  >
                    <option value="all">All Shapes</option>
                    <option value="Rod">Rod</option>
                    <option value="Cocci">Cocci</option>
                  </select>
                </div>
              </div>

              {/* Results Count */}
              <div className="text-muted">
                Showing {bacteria.length} bacteria
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bacteria Grid */}
      <div className="row">
        {bacteria.length > 0 ? (
          bacteria.map((bacterium) => (
            <BacteriaCard key={bacterium.id} bacterium={bacterium} />
          ))
        ) : (
          <div className="col-12">
            <div className="text-center py-5">
              <h4 className="text-muted">No bacteria found</h4>
              <p className="text-muted">
                Try adjusting your search term or filters
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BacteriaList;