import { useEffect, useState } from "react";
import BacteriaCard from "../Components/BacteriaCard";
import BacteriaData from "../Helper/Bacterium";
import NavBar from "../Components/NavBar";


const Home = () => {
const [users, setUsers] = useState([]); // mock data
const [search, setSearch] = useState("");// search input
const [filter, setFilter] = useState('all'); // Gram negative gram positive  or all
const [filteredUsers, setFilteredUsers] = useState([]) // to able to categorize the filtered search
const [loading, setLoading] = useState(true);


//! fetch the data 

useEffect(() => {
  try {
    setUsers(BacteriaData)
    setFilteredUsers(BacteriaData)
  } catch (error) {
    console.log(error)
  }finally {
    setLoading(false)
  }
}, []) // runs once on mount

//! Filter and Search users

useEffect(() => {
  let result = users; // I already loaded my mock data into the users above
  if(search !== ""){
    result = result.filter(u=>
    u.name.toLowerCase().includes(search.trim().toLowerCase())
  )}
  if(filter !== 'all') {
    result = result.filter(u=>
      u.group === filter
    )
  }
  setFilteredUsers(result)
}, [search, filter, users])

  const setFilterTo = (f) => setFilter(f);
  
  return (
    <div className="app">
      <div className="container-fluid">
        <div className="row justify-container-center align-items-center">
          <NavBar/>
          <div className="col-12 col-lg-10 col-xl-8">
            <div className="d-flex justify-content-center align-items-center mb-4">
              <input
                type="text"
                className="search"
                placeholder="Search.."
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
              />
            </div>
            <div className="group d-flex justify-content-center align-items-center">
              <button className={`btn me-2 ${filter === "all" ? "btn-info" : "btn-outline-info"}`}
              onClick={()=>setFilterTo("all")}>
                All
              </button> 
              <button className={`btn me-2 ${filter === "Gram-positive" ? "btn-primary" : "btn-outline-primary"}`}
              onClick={()=>setFilterTo("Gram-positive")}>
                Gram Positive
              </button> 
              <button className={`btn me-2 ${filter === "Gram-negative" ? "btn-danger" : "btn-outline-danger"}`}
              onClick={()=>setFilterTo("Gram-negative")}>
                Gram Negative
              </button>
            </div>
          </div>
        </div>
        <BacteriaCard filteredUsers={filteredUsers} loading={loading} />
      </div>
    </div>
  );
};

export default Home;