import React from "react";
import styled from "styled-components";

const AllCards = styled.div`
  width: 40%;
  border: 2px solid green;
  border-radius: 2px;
  margin: 10px;
  padding: 10px;
`;

export default function CharacterCard(props) {
  return (
    <AllCards className="character-card" key={props.id}>
        <h2>Name: {props.name}</h2>
        <img className="profile-pic" src={`${props.img}`} alt={`${props.name} profile pic`}/>
        <p>Status: {props.status}</p>
        <p>Species: {props.species}</p>
        <p>Origin Planet: {props.origin}</p>
    </AllCards>
  );
}
