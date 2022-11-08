import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import "./App.css";

const pages = ["Home", "Items"];

function navbar() {

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null
      );
      const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
        null
      );
      const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
      };
      const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
      };
      const handleCloseNavMenu = () => {
        setAnchorElNav(null);
      };
      const handleCloseUserMenu = () => {
        setAnchorElUser(null);
      };




  return (
    <div className="froggy1">
      <AppBar>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 3,
                display: { xs: "none", md: "flex" },
                fontFamily: "-moz-initial",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "black",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>

            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 13 }} />

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    color: "black",
                    display: "-ms-grid",
                    justifyContent: "flex-end",
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      );
    </div>
  );
}
