import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

// Components
import Landing from "./pages/Landing";
import RedirectPage from "./pages/RedirectPage";
import Rooms from "./pages/Rooms";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/redirect" component={RedirectPage} />
        <Route path="/rooms" component={Rooms} />
      </Switch>
    </Router>
  );

  // }
}

export default App;
