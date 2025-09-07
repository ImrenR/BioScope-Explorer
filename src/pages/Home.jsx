import BacteriaList from "../components/BacteriaList";
import LinkList from "../components/LinkList";
import NavBar from "../components/NavBar";
import Search from "../components/Search";

const Home = () => {
  return (
    <>
      <NavBar />
      <Search/>
      <LinkList />
      <BacteriaList />
    </>
  );
};

export default Home;
