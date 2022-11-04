import React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import './App.css';

const paperStyle = {
  p: '2px 4px',
  display: 'flex',
  alignItems: 'center',
  width: 300,
  heigth: 300,
  justifyContent: 'center',
  
};

function App() {
  return (
    <div className='pond'>
      <div className='froggy-1'>
        <Paper
          component='form'
          sx={paperStyle}
        >         
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder='Summoner'
            inputProps={{ 'aria-label': 'search google maps' }}
          />
          <IconButton type='button' sx={{ p: '10px' }} aria-label='search'>
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>
    </div>
  );
}

export default App;
