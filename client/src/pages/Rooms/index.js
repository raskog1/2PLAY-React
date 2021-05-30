import React from "react";
import "./style.css";

// Components
import { Link } from "react-router-dom";
import { Container, Image, Navbar, Row } from "react-bootstrap";

function Rooms() {
  return (
    <>
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

      <Container className="vertical-center">
        <Row>
          <div className="col-xs-12 col-md-6 text-center">
            <Link to="/signup">
              <h1>CREATE A ROOM</h1>
            </Link>
          </div>
          <div className="col-xs-12 col-md-6 text-center">
            <Link to="/roomLogin">
              <h1>ENTER A ROOM</h1>
            </Link>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default Rooms;
