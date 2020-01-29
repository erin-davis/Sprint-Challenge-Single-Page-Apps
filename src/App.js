import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
import SearchForm from "./components/SearchForm";
import CharacterCard from "./components/CharacterCard";
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

export default function App(props) {
  return (
    <main>
      <Header />
      <div className="nav-links">
        <Link className="links" to="/">Home </Link>
        <Link className="links" to="/character-list">Characters </Link>
      </div>
      <SearchForm />
      <Switch>
        <Route path={`/character-list/:${props.id}`}>
          <CharacterCard id={props.id}/>
        </Route>
        <Route path="/character-list">
          <CharacterList />
        </Route>
        <Route path="/">
          <WelcomePage />
        </Route>
      </Switch>
    </main>
  );
}
