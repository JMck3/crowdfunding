import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import HomePage from "./Pages/HomePage";
import ProjectPage from "./Pages/ProjectPage";
import LoginPage from "./Pages/LoginPage";
import CreateProjectPage from "./Pages/CreateProjectPage";

function App() {
  return (
    <Router>
      <div>
        <Nav />

        <Switch>
          <Route path="/project/:id">
            <ProjectPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/createproject">
            <CreateProjectPage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
