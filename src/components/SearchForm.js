import React, { useState, useEffect } from "react";
import CharacterList from "./CharacterList";
import axios from "axios";

export default function SearchForm(props) {
  const [filteredChara, setFilteredChara] = useState("");

  const handleChange = e =>{
    setFilteredChara(e.target.value);
    console.log(e.target.value);
  };

  const bigIf = () =>{
    if(props.chara !== undefined){
      const submitHandler = e =>{
        e.preventDefault();
        const filtering = props.chara.filter(c =>{
          return c.name.toLowerCase().indexOf(filteredChara.toLowerCase());
        })
        props.search(filtering);
        console.log("this one is filtering", filtering);
      }
      return submitHandler;
    }
  }

  const submitHandler = e =>{
    e.preventDefault();
    const filtering = props.chara.filter(chara =>{
      return chara.name.toLowerCase().indexOf(filteredChara.toLowerCase());
    });
    props.search(filtering);
    console.log(filtering);
  }

  return (
    <section className="search-form">
    <form onSubmit={props.chara !== undefined ? "submitHandler" + submitHandler : "bigIf"+ bigIf}>
    <label htmlFor="search">Search Characters: </label>
     <input
     id="search"
     name="search"
     type="text"
     value={filteredChara}
     placeholder="Search?!"
     onChange={handleChange}
     />
     </form>

    </section>
  );
}
