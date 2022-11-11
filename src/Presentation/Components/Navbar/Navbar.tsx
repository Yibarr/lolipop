import { Fragment } from 'react';
import {
  Home
} from "@mui/icons-material";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';

function Navbar() {
  return (
    <Fragment>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
          backgroundColor: "#110319"
        }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Home/>
          <nav>
            <Link
              variant="button"
              href="#"
              sx={{ my: 1, mx: 1.5, color: "#FFFF" }}
            >
              Builds
            </Link>
            <Link
              variant="button"
              href="#"
              sx={{ my: 1, mx: 1.5, color: "#FFFF" }}
            >
              Invocador
            </Link>
            <Link
              variant="button"
              href="#"
              sx={{ my: 1, mx: 1.5, color: "#FFFF"}}
            >
              Support
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Navbar;