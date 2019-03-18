const express = require("express");
const bodyParser = require('body-parser');

class AppController {
  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(bodyParser.urlencoded({ extended: true }));
  }

  routes() {
    this.express.use(require("../app/routes/routes"));
  }
}

module.exports = new AppController().express;