const jwt = require('jsonwebtoken')
const moment = require('moment');
const config = require('../config/config');

/**
 * GET - /login
 * 
 * Authenticates an user with user and password
 * @param  {string} user        User's username to be authenticated within the system
 * @param  {string} password    User's encrypted password
 * @return {string}             A Bearer Token
 */
exports.login = function (req, res) {

  const { username, password } = req.body;

  if (username && password) {
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
      const token = createJwtToken(user);
      res.status(200).send({ token });
    }

  }

  res.status(201).send('Username or password incorrect.');
};



function createJwtToken(user) {
  const { username, role } = user;

  const payload = {
    sub: { username, role },
    iat: moment().unix(),
    exp: moment().add(14, "days").unix()
  };

  const token = jwt.sign(payload, config.jwt.secret);

  return token;
}

const users = [
  {
    username: 'admin',
    password: 'admin1234',
    role: 'admin'
  }, {
    username: 'user',
    password: 'user1234',
    role: 'user'
  }
];