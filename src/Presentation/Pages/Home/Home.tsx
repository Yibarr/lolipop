import Navbar from "../../Components/Navbar/Navbar";
import SearchBar from "../../Components/SearchBar/SearchBar"
import "./Home.css";

function Home() {
  return(
    <div >
      <Navbar/>
      <div className="home_container">
          <SearchBar/>
      </div>
    </div>
  );
  
}

export default Home;
