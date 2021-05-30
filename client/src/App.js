import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

// Components
import Landing from "./pages/Landing";

const hash = window.location.hash
  .substring(1)
  .split("&")
  .reduce(function (initial, item) {
    if (item) {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});

window.location.hash = "";

function App() {
  // componentDidMount() {
  //   // Set token
  //   let _token = hash.access_token;
  //   if (_token) {
  //     this.setState({
  //       token: _token,
  //     });
  //   }
  // }

  // render() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src="./logo512.png" className="App-logo" alt="logo" />
  //       {!this.state.token && (
  //         <a
  //           className="btn btn--loginApp-link"
  //           href={`${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  //             "%20"
  //           )}&response_type=token&show_dialog=true`}
  //         >
  //           Login to Spotify
  //         </a>
  //       )}
  //     </header>
  //   </div>
  // );
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>
    </Router>
  );

  // }
}

export default App;
