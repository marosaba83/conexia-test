const jwt = require('jsonwebtoken');
const config = require('../config/config');

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    jwt.verify(token, config.jwt.secret, (err, user) => {

      console.log(`token`, token);
      console.log(`config.jwt.token`, config.jwt.secret);
      console.log(`err`, err);
      console.log(`user`, user);

      if (err) {
        return res.sendStatus(403);
      }

      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};
