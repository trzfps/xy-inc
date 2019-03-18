const routes = require('express').Router();
const Destination = require('../controllers/DestinationPointsController');
routes.post('/destinationPoint', Destination.addPoints);
module.exports = routes;