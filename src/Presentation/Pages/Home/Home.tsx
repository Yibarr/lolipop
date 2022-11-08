import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Navbar from "../../Components/Navbar/Navbar";
import "./Home.css";

function Home() {
  return (
    <div>
      <Navbar/>
      <div className="home_container">
        <Paper
          component="form"
          sx={{
            p: "4px 4px",
            display: "flex",
            alignItems: "center",
            width: 300,
            heigth: 300,
            justifyContent: "center",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Summoner"
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>
    </div>
  );
}

export default Home;
