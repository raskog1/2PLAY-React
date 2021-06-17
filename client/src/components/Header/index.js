import "./style.css";

// Components
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

function Header() {
  return (
    <div className="header">
      <header>
        <h1 id="logoText">2PLAY</h1>
        <Link className="navbar-brand" to="/logout">
          <Image
            src="./assets/images/cassette_tape3.png"
            className="navLogo"
            width="130"
            height="90"
            alt="2PlayLogo"
          />
        </Link>
      </header>
    </div>
  );
}

export default Header;
