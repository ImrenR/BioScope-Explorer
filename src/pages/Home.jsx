import axios from "axios";
import BacteriaList from "../components/BacteriaList";
import { useEffect, useState } from "react";

const Home = () => {
  const [bacteria, setBacteria] = useState([]); // all the data from API
  const [searchTerm, setSearchTerm] = useState(""); // to able to search
  const [filteredBacteria, setFilteredBacteria] = useState([]); // filtered one - Result
  const [loading, setLoading] = useState(true); // loading state
  const [error, setError] = useState(null); // error state

  // Function to fetch data from API
  const fetchBacteria = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Using a mock API that returns bacteria data
      // You can replace this URL with your actual API endpoint
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      
      // Transform the data to match our bacteria structure
      const bacteriaData = response.data.slice(0, 8).map((post, index) => ({
        id: post.id,
        name: post.title.split(' ').slice(0, 2).join(' '), // Use first 2 words as name
        img: "",
        type: index % 2 === 0 ? "Gram-negative" : "Gram-positive",
        shape: index % 3 === 0 ? "Cocci" : "Rod",
        habitat: ["Intestine", "Skin", "Soil", "Water", "Respiratory tract"][index % 5],
        description: post.body.substring(0, 100) + "..."
      }));
      
      setBacteria(bacteriaData);
    } catch (err) {
      setError("Failed to fetch bacteria data. Using sample data instead.");
      console.error("API Error:", err);
      
      // Fallback to sample data if API fails
      const sampleData = [
        {
          id: 1,
          name: "Escherichia coli",
          img: "",
          type: "Gram-negative",
          shape: "Rod",
          habitat: "Intestine",
          description: "Common gut bacterium, some strains are pathogenic"
        },
        {
          id: 2,
          name: "Staphylococcus aureus",
          img: "",
          type: "Gram-positive",
          shape: "Cocci",
          habitat: "Skin",
          description: "Can cause skin infections and food poisoning"
        },
        {
          id: 3,
          name: "Bacillus subtilis",
          type: "Gram-positive",
          shape: "Rod",
          habitat: "Soil",
          description: "Non-pathogenic soil bacterium, used in research"
        },
        {
          id: 4,
          name: "Pseudomonas aeruginosa",
          type: "Gram-negative",
          shape: "Rod",
          habitat: "Water",
          description: "Opportunistic pathogen, resistant to many antibiotics"
        }
      ];
      setBacteria(sampleData);
    } finally {
      setLoading(false);
    }
  };

  // Load data on component mount
  useEffect(() => {
    fetchBacteria();
  }, []);

  // Filter bacteria based on search term
  useEffect(() => {
    let filtered = bacteria;
    
    if (searchTerm) {
      filtered = bacteria.filter(bacterium =>
        bacterium.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        bacterium.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        bacterium.habitat.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredBacteria(filtered);
  }, [bacteria, searchTerm]);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">BioScope Explorer</h1>
      
      {/* Loading State */}
      {loading && (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-2">Loading bacteria data...</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="alert alert-warning" role="alert">
          <strong>Warning:</strong> {error}
        </div>
      )}

      {/* Main Content */}
      {!loading && (
        <>
          <div className="text-center mb-3">
            <button 
              className="btn btn-outline-primary"
              onClick={fetchBacteria}
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Refresh Data'}
            </button>
          </div>
          <BacteriaList 
            filtered={filteredBacteria}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        </>
      )}
    </div>
  );
};

export default Home;