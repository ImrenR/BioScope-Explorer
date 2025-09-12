import { useState } from "react";
import BacteriaCard from "../Components/BacteriaCard";
import BacteriaData from "../Helper/Bacterium";
import NavBar from "../Components/NavBar";


const Home = () => {
  const [search, setSearch] = useState("");


  const filtered = BacteriaData.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.group.toLowerCase().includes(search.toLowerCase())
  );

const resetAll = (e)=> {
  e.preventDefault()
  setSearch("");
}

  return (
    <div className="app">
      <div className="container-fluid">
        <div className="row justify-container-center">
          <NavBar resetAll={resetAll}/>
          <div className="col-12 col-lg-10 col-xl-8">
            <div className="d-flex justify-content-center mb-4">
              <input
                type="text"
                className="search"
                placeholder="Search.."
                value={search}
                onChange={(e) => {
                  e.preventDefault();
                  setSearch(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
  

        <BacteriaCard BacteriaData={filtered} />
      </div>
    </div>
  );
};

export default Home;