import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import HomePage from "./Pages/HomePage";
import ProjectPage from "./Pages/ProjectPage";

function App() {
  return (
    <Router>
      <div>
        <Nav />

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/project">
            <ProjectPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
