import { useState } from "react";
import BacteriaCard from "../Components/BacteriaCard";
import BacteriaData from "../Helper/Bacterium";
import NavBar from "../Components/NavBar";
import { IoFilterOutline } from "react-icons/io5";


const Home = () => {
  const [search, setSearch] = useState("");

  const filtered = BacteriaData.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.group.toLowerCase().includes(search.toLowerCase())
  );



  return (
    <div className="app">
      <div className="container-fluid">
        <div className="row justify-container-center">
          <NavBar />
          <div className="col-12 col-lg-10 col-xl-8">
            <div className="d-flex justify-content-center mb-4">
              <input
                type="text"
                className="search"
                placeholder="Search.."
                onChange={(e) => {
                  e.preventDefault();
                  setSearch(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className="group d-flex justify-content-between mx-4">
  <div className="dropdown">
  <button
    className="btn dropdown-toggle border-4"
    type="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
   
  >
    GROUPS
  </button>
  <ul className="dropdown-menu">
    <li>
      <a 
        className="dropdown-item" 
        href="#"
        
      >
        All
      </a>
    </li>
    <li>
      <a 
        className="dropdown-item" 
        href="#"
        
      >
        Gram Positive
      </a>
    </li>
    <li>
      <a 
        className="dropdown-item" 
        href="#"
       
      >
        Gram Negative
      </a>
    </li>
    
  </ul>
</div>
<div className="icon">
  <button className="iconFilters d-flex justify-content-center align-content-center p-2 border-1">
  <h5 className="me-2">Filters</h5>
<IoFilterOutline size={28}
/>
</button>
</div>
</div>

        <BacteriaCard BacteriaData={filtered} />
      </div>
    </div>
  );
};

export default Home;