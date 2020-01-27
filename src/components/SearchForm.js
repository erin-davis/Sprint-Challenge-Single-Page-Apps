import React, { useState, useEffect } from "react";
import CharacterList from "./CharacterList";
import axios from "axios";

export default function SearchForm(props) {
  const [filteredChara, setFilteredChara] = useState();

  const handleChange = e =>{
    setFilteredChara(e.target.value);
    console.log(e.target.value);
  };

  const submitHandler = e =>{
    e.preventDefault();
    const filtering = props.chara.filter(chara =>{
      return chara.name.toLowerCase().indexOf(filteredChara.toLowerCase()) !== -1;
    });
    props.search(filtering);
    console.log(filtering);
  }

  return (
    <section className="search-form">
    <form onSubmit={submitHandler}>
     <input
     type="text"
     placeholder="Search?!"
     onChange={handleChange}
     />
     </form>
    </section>
  );
}
