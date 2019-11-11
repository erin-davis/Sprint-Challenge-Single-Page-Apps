import React, { useEffect, useState } from "react";
import axios from 'axios';
import {BrowserRouter as Router} from "react-router-dom";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([

  ]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then((response)=>{
      console.log(response);
    })
    .catch((err)=>{
      console.log(err);
    });

  }, []);

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>

    </section>
  );
}
