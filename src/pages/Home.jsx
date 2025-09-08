import axios from "axios";
import BacteriaList from "../components/BacteriaList";
import LinkList from "../components/LinkList";
import NavBar from "../components/NavBar";
import Search from "../components/Search";
import { useEffect, useState } from "react";
const Home = () => {
  const [bacteria, setBacteria] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get(import.meta.env.VITE_APP_URL);
      setBacteria(res.data.pages);
    } catch (error) {
      console.log(error);
    }
  };

useEffect(() => {
   getData();
}, [])


 
  return (
    <>
      <NavBar />
      <Search />
      <LinkList />
      <BacteriaList bacteria={bacteria} getData={getData}/>
    </>
  );
};

export default Home;
