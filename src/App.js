import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Login from "./pages/login/Login";
import Navigation from "./pages/Navigation/Navigation";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" name="login" component={Login} />
          <Navigation />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
 