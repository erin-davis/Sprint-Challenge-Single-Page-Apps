import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [chara, setChara] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then(res =>{
      console.log(res.data.results);
      setChara(res.data.results);
    })
    .catch(err =>{
      console.log("this is where the error is coming from :",err);
    })
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      {chara.map(item =>{
        return <CharacterCard
        key={item.id}
        name={item.name}
        species={item.species}
        status={item.status}
        origin={item.origin.name}
        />
      })}
    </section>
  );
}
