import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

export default function App() {
  return (
    <main>
      <Header />
      <div className="nav-links">
        <Link className="links" to="/">Home </Link>
        <Link className="links" to="/character-list">Characters </Link>
      </div>
      <Switch>
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
