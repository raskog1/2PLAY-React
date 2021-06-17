import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

// Components
import Landing from "./pages/Landing";
import RedirectPage from "./pages/RedirectPage";
import Rooms from "./pages/Rooms";
import Login from "./pages/Login";

// New connection to the graphQL server using Apollo
const client = new ApolloClient({
  uri: "/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/redirect" component={RedirectPage} />
          <Route path="/rooms" component={Rooms} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </ApolloProvider>
  );

  // }
}

export default App;
