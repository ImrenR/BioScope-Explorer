import Table from "./Table"
import Users from "../helper/user"
import { useState } from "react"

const Home = () => {
  const [search, setSearch] = useState("")

const filteredUsers = Users.filter((item => 
  item.first_name.toLowerCase().includes(search.toLowerCase()) ||
  item.last_name.toLowerCase().includes(search.toLowerCase()) ||
  item.email.toLowerCase().includes(search.toLowerCase())
))
  
  return (
    <div className="app">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8">
            <div className="mb-4">
              <input 
                type="text" 
                className="form-control form-control-lg" 
                placeholder="Search..." 
                onChange={(e)=>setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
        <Table Users={filteredUsers}/>
    </div>
  )
}

export default Home