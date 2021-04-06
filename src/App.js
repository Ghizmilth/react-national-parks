import React, { useState } from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import { Searchbar, Parks } from './components';


function App() {
  return (
    <div>
      <Container>
          <Searchbar />
          <Parks />
      </Container>
    
    </div>
    
  );
}

export default App;
