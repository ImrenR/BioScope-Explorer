import BacteriaList from "../components/BacteriaList";
import { useEffect, useState } from "react";

// Sample bacteria data for demonstration
const sampleBacteria = [
  {
    id: 1,
    name: "Escherichia coli",
    type: "Gram-negative",
    shape: "Rod",
    habitat: "Intestine",
    description: "Common gut bacterium, some strains are pathogenic"
  },
  {
    id: 2,
    name: "Staphylococcus aureus",
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
  },
  {
    id: 5,
    name: "Streptococcus pneumoniae",
    type: "Gram-positive",
    shape: "Cocci",
    habitat: "Respiratory tract",
    description: "Common cause of pneumonia and meningitis"
  },
  {
    id: 6,
    name: "Lactobacillus acidophilus",
    type: "Gram-positive",
    shape: "Rod",
    habitat: "Intestine",
    description: "Probiotic bacterium beneficial for gut health"
  },
  {
    id: 7,
    name: "Salmonella enterica",
    type: "Gram-negative",
    shape: "Rod",
    habitat: "Intestine",
    description: "Causes food poisoning and typhoid fever"
  },
  {
    id: 8,
    name: "Clostridium botulinum",
    type: "Gram-positive",
    shape: "Rod",
    habitat: "Soil",
    description: "Produces botulinum toxin, causes botulism"
  }
];

const Home = () => {
  // State for all bacteria data
  const [bacteria, setBacteria] = useState([]);
  
  // State for search functionality
  const [searchTerm, setSearchTerm] = useState("");
  
  // State for filter functionality
  const [filterType, setFilterType] = useState("all");
  const [filterShape, setFilterShape] = useState("all");
  
  // State for filtered and searched results
  const [filteredBacteria, setFilteredBacteria] = useState([]);

  // Load sample data on component mount
  useEffect(() => {
    setBacteria(sampleBacteria);
  }, []);

  // Filter and search bacteria whenever search term, filter type, or bacteria data changes
  useEffect(() => {
    let filtered = bacteria;

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(bacterium =>
        bacterium.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        bacterium.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        bacterium.habitat.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply type filter
    if (filterType !== "all") {
      filtered = filtered.filter(bacterium => bacterium.type === filterType);
    }

    // Apply shape filter
    if (filterShape !== "all") {
      filtered = filtered.filter(bacterium => bacterium.shape === filterShape);
    }

    setFilteredBacteria(filtered);
  }, [bacteria, searchTerm, filterType, filterShape]);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">BioScope Explorer</h1>
      <BacteriaList 
        bacteria={filteredBacteria}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filterType={filterType}
        setFilterType={setFilterType}
        filterShape={filterShape}
        setFilterShape={setFilterShape}
      />
    </div>
  );
};

export default Home;