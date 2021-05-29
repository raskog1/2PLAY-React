const jwt = require("jsonwebtoken");

const expiration = "2h";

module.exports = {
  signToken: function ({ username, id }) {
    const payload = { username, id };
    return jwt.sign({ data: payload }, process.env.JWT_SECRET, {
      expiresIn: expiration,
    });
  },
  authMiddleware: function ({ req }) {
    // Allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // Separate "Bearer" from "<tokenvalue>"
    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }

    // If no token, return request object as is
    if (!token) {
      return req;
    }

    try {
      // Decode and attach user data to request object
      const { data } = jwt.verify(token, process.env.JWT_SECRET, {
        maxAge: expiration,
      });
      req.user = data;
    } catch {
      console.log("Invalid token middleware");
    }

    // Return updated request object
    return req;
  },
};
