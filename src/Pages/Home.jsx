import { useState } from "react"
import BacteriaCard from "../Components/BacteriaCard"
import BacteriaData from "../Helper/Bacterium"
import NavBar from "../Components/NavBar"



const Home = () => {

  const [search, setSearch] = useState("")

const filtered = BacteriaData.filter(item=>
  item.name.toLowerCase().includes(search.toLowerCase()) ||
  item.group.toLowerCase().includes(search.toLowerCase())
)
  return (
  <div className="app">
    <NavBar/>
   <div className="container-fuild">
    <div className="row justify-container-center">
      <div className="col-12 col-lg-10 col-xl-8">
            <div className="mb-4">
      <input 
      type="text" 
      className="Search" 
      placeholder="Search.."
      onChange={(e)=>setSearch(e.target.value)}/>
     
       </div>
 </div>
 </div>
<BacteriaCard BacteriaData={filtered}/>
</div>
 </div>
)
}

export default Home