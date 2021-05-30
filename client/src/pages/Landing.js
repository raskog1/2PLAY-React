import React from "react";

// Components
import { Image } from "react-bootstrap";

const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientId = process.env.REACT_APP_client_id;
const redirectUri = process.env.REACT_APP_redirect_uri;
const scopes = [
  "user-read-private",
  "user-read-email",
  "playlist-modify-private",
  "playlist-modify-public",
];

// var generateRandomString = function (length) {
//   var text = "";
//   var possible =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

//   for (var i = 0; i < length; i++) {
//     text += possible.charAt(Math.floor(Math.random() * possible.length));
//   }
//   return text;
// };

// var state = generateRandomString(16);

function Landing() {
  return (
    <div className="flex-container wrapper">
      <div className="logo-wrap">
        <Image
          src="./assets/images/logo2.png"
          alt="2PLAY logo"
          className="logo"
        />

        <div className="play">
          <a
            className="video-play-button"
            href={`${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
              "%20"
            )}&response_type=token&show_dialog=true`}
          >
            <span></span>
          </a>
        </div>
      </div>

      <div className="tape">
        <Image
          src="./assets/images/cassette_tape2.gif"
          alt="Cassette tape"
          className="gif"
        />
      </div>
    </div>
  );
}

export default Landing;
