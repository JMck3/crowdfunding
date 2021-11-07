import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from "./Pages/HomePage";
import Projects from "./Pages/ProjectPage";
import Login from "./Pages/LoginPage";
import CreateProject from "./Pages/CreateProjectPage";
import ErrorPage from "./Pages/404";
import SignUpPage from "./Pages/SignUpPage";
import PledgePage from "./Pages/PledgePage";

function App() {
  return (
    <Router>
      <div class="bg_image"></div>
      <div>
        <Nav />

        <Switch>
          <Route path="/project/:id">
            <Projects />
          </Route>
          <Route path="/error">
            <ErrorPage />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUpPage />
          </Route>
          <Route path="/createproject">
            <CreateProject />
          </Route>
          <Route path="/pledge">
            <PledgePage />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
