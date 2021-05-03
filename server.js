const express = require("express");
const path = require("path");
const sequelize = require("./config/connection");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log("Now listening on PORT " + PORT);
  });
});
