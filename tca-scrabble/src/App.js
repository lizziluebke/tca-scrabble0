import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'; 
import React from 'react'; 



const Home = () => <h2>Home</h2>; 
const SetupGame = () => <h2>Setup</h2>; 
const PlayGame = () => <h2>PlayGame</h2>; 


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="play" element={<PlayGame />} />
        <Route path="setup" element={<SetupGame />} />
        <Route path="/" element={<Home />} />
      </Routes>
        
  

  



    </div>
  );
}

export default App;
