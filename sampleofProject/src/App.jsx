import SearchFilter from './components/SearchFilter'
import './App.css'

function App() {
  // Sample data for demonstration
  const sampleData = [
    { id: 1, name: 'Apple', category: 'Fruit', price: 1.50, inStock: true },
    { id: 2, name: 'Banana', category: 'Fruit', price: 0.80, inStock: true },
    { id: 3, name: 'Carrot', category: 'Vegetable', price: 0.60, inStock: false },
    { id: 4, name: 'Broccoli', category: 'Vegetable', price: 2.00, inStock: true },
    { id: 5, name: 'Orange', category: 'Fruit', price: 1.20, inStock: true },
    { id: 6, name: 'Spinach', category: 'Vegetable', price: 1.80, inStock: false },
    { id: 7, name: 'Grape', category: 'Fruit', price: 3.50, inStock: true },
    { id: 8, name: 'Tomato', category: 'Vegetable', price: 2.20, inStock: true },
    { id: 9, name: 'Strawberry', category: 'Fruit', price: 4.00, inStock: true },
    { id: 10, name: 'Cucumber', category: 'Vegetable', price: 1.10, inStock: false },
    { id: 11, name: 'Mango', category: 'Fruit', price: 2.80, inStock: true },
    { id: 12, name: 'Lettuce', category: 'Vegetable', price: 1.30, inStock: true }
  ]

  return (
    <div className="app">
      <header className="app-header">
        <h1>Search & Filter Demo</h1>
        <p>Understanding React Hooks(useState and useEffect)</p>
      </header>
      <main className="app-main">
        <SearchFilter data={sampleData} />
      </main>
    </div>
  )
}

export default App