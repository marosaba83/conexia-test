const express = require('express');
const { json, urlencoded } = require('body-parser');
const methodOverride = require('method-override');
const cors = require("cors");
const error = require('./middlewares/error.middleware');

const app = express();
const port = 5000;


app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(methodOverride());

require('./routes/routes')(app);

app.use(error.logger);
app.use(error.handler);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
})
