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
        <Link to="/">Home</Link>
        <Link to="/character-list">Characters</Link>
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
