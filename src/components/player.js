// src/Player.js
import React from "react";
import './player.css'

const Player = ({ name, team, nationality, jerseyNumber, age, imageURL }) => {
  return (
    <>
    <div class='div'>
    <div class="card" style={{width: "18rem"}}>
    {imageURL}
    <div class="card-body" style={{color: 'gray'}}>
      <h5 class="card-title" style={{color: 'blue'}}>{name}</h5>
      <div class="card-text" >
      Team: {team}
          <br />
          Nationality: {nationality}
          <br />
          Jersey Number: {jerseyNumber}
          <br />
          Age: {age}
      </div>
    </div>
  </div>
  <br/>
  </div>
  </>
  );
};

export default Player;
