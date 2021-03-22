const loggedIn = require('../middlewares/auth.middleware');
const auth = require('../controllers/auth.controller');
const photos = require('../controllers/photos.controller');


module.exports = function (app) {

  /**
   * Auth
   */
  app.post('/login', auth.login);


  /**
   * Photos
   */
  app.get('/photos', loggedIn, photos.get);
}

