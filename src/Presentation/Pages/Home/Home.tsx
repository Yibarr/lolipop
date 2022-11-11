import { Fragment } from "react"
import {
  Paper,
  Typography,
  LinearProgress
} from "@mui/material";
import {
  Search,
  CancelOutlined,
  ErrorOutline
} from "@mui/icons-material";
import Navbar from "../../Components/Navbar/Navbar";
import { SearchBar } from "../../Components/SearchBar/SearchBar"
import HomeViewModel from "./HomeViewModel"
import "./Home.css";

function Home() {

  const {
    getSummoner,
    summoner,
    error,
    loading
  } = HomeViewModel();

  const searchUserQuery = (query: string) => {
    if(!loading) {
        getSummoner(query);
    } 
  };

  const loader = () => {
    if(loading) {
      return <LinearProgress style={{ width: 243 }}/>
    } 
 }
  const searchOutput = () => {
      if(error) {
          return <Paper className="paper-search-width">
              <Typography>
                Hubo un error al buscar el pokémon
              </Typography>
              <ErrorOutline/>
          </Paper>
      } else if (summoner !== undefined) {
          if (summoner.sprite !== null) {
              return <Paper className="paper-search-width">
                  <Typography>
                  {summoner.id} {summoner.summonername}
                  </Typography>
                  <img src={summoner.sprite} alt="Pokemon sprite"></img>
              </Paper>
          } else {
              return <Paper className="paper-search-width">
                  <Typography>
                  {summoner.id} {summoner.summonername}
                  </Typography>
                  <CancelOutlined style={{ fontSize: 96 }}/>
              </Paper>
          }
      }
  };

  return(
    <Fragment>
      <Navbar/>
      <div className="search-bar-container">
          <SearchBar Icon={Search} onSearch={searchUserQuery} disabled={loading}/>
      </div>
      <div className="element-cards-container">
        {loader()}
        {searchOutput() }
      </div>
    </Fragment>
  );
  
}

export default Home;
