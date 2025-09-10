import BacteriaList from "../components/BacteriaList";
import { useEffect, useState } from "react";

// Sample bacteria data for demonstration
const sampleBacteria = [
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
    img: "",
    name: "Staphylococcus aureus",
    type: "Gram-positive",
    shape: "Cocci",
    habitat: "Skin",
    description: "Can cause skin infections and food poisoning"
  },
  {
    id: 3,
    img: "",
    name: "Bacillus subtilis",
    type: "Gram-positive",
    shape: "Rod",
    habitat: "Soil",
    description: "Non-pathogenic soil bacterium, used in research"
  },
  {
    id: 4,
    img: "",
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
    img: "",
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
    img: "",
    name: "Clostridium botulinum",
    type: "Gram-positive",
    shape: "Rod",
    habitat: "Soil",
    description: "Produces botulinum toxin, causes botulism"
  }
];

const Home = () => {
  const [bacteria, setBacteria] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // to able to search
  const [filterType, setFilterType] = useState("all"); // for gramnegative and grampositive filtering
  const [filterShape, setFilterShape] = useState("all"); // for the type of the spices
  const [filteredBacteria, setFilteredBacteria] = useState([]); // filtered one - Result


  useEffect(() => {
    setBacteria(sampleBacteria);
  }, []);


  useEffect(() => {
    let filtered = bacteria;
    if (searchTerm) {
      filtered = filtered.filter(bacterium =>
        bacterium.name.toLowerCase().includes(searchTerm.toLowerCase()) 
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