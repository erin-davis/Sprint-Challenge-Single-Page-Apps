import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";
import SearchForm from "./SearchForm";

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [chara, setChara] = useState([]);
  const [filteredNames, setFilteredNames] = useState([]);

  const search = charaArr =>{
    setFilteredNames(charaArr)
  }

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then(res =>{
    //  console.log("full data", res.data);
      setChara(res.data.results);
      setFilteredNames(res.data.results);
    })
    .catch(err =>{
      console.log("this is where the error is coming from :",err);
    })
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  //console.log("just chara", chara);


  return (
    <div className="tba">
      {chara.map(item =>{
        return(<CharacterCard
        key={item}
        name={item.name}
        species={item.species}
        status={item.status}
        origin={item.origin.name}
        img={item.image}
        chara={chara}
        />
      )
      })}
      <SearchForm search={search} chara={chara}/>
      {filteredNames.map(chara =>{
        return <CharacterCard key={chara.id} character={chara.id}/>;
      })}
    </div>
  );
}
