const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  jwt: {
    secret: process.env.JWT_SECRET
  },
  api: {
    key: '263eb55c-87f2-4f86-a37c-c6db5943258a'
  }
}