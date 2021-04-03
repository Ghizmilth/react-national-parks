import React, { useState } from 'react';
import './App.css';
// import { parksList } from './api';
import { Searchbar, Parks } from './components';


function App() {
  return (
    <div>
        <Searchbar />
    
        <Parks />
    
    </div>
    
  );
}

export default App;
