// src/App.js
import React from "react";
import PlayersList from "./components/PlayersList";
import './App.css'

function App() {
  return (
    <div className="App" style={{backgroundImage: 'backg' }}>
      <div className="tit">
      <h1>FIFA Player Cards</h1>
      </div>
      <PlayersList />
    </div>
  );
}

export default App;
