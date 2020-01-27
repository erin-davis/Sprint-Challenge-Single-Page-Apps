import React from "react";

export default function CharacterCard(props) {
  return (
    <div className="character-card">
      <h2>Name: {props.name}</h2>
      <img className="profile-pic" src={`${props.img}`} alt={`${props.name} profile pic`}/>
      <p>Status: {props.status}</p>
      <p>Species: {props.species}</p>
      <p>Origin Planet: {props.origin}</p>
    </div>
  );
}
