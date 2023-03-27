import React from "react";
import Box from "@mui/material/Box";
import CssBaseLine from "@mui/material/CssBaseline"
import header from "./components/Header";
import './App.css'


function App() {
  return (
    <React.Fragment>
      <CssBaseLine/>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
        }}>
        <Box>
          <header/>
          
        </Box>
        </Box>
    </React.Fragment>
  );
}

export default App;
