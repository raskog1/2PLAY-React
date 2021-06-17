import React from "react";
import "./style.css";

// Components
import { Link } from "react-router-dom";
import { Container, Image, Row } from "react-bootstrap";
import Header from "../../components/Header";

function Rooms() {
  return (
    <>
      <Header />

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
