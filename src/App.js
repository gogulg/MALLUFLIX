import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Featured from "./components/featured/Featured";

import Home from "./Pages/home/Home";
import Register from "./Pages/register/Register";

export default function App() {
  return (
    <Router>
      <div>
        <Link to="/home"></Link>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Register />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
