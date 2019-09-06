"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var producersController_1 = require("./../controller/producersController");
var producerControllerObj = new producersController_1.ProducerController();
exports.ProducerRoutes = express_1.Router();
exports.ProducerRoutes.get('/', producerControllerObj.getAllProducer);
exports.ProducerRoutes.get('/getProducerById/:id', producerControllerObj.getProducerById);
exports.ProducerRoutes.put('/updateProducerById/:id', producerControllerObj.updateProducerById);
exports.ProducerRoutes.post('/createProducer', producerControllerObj.createProducer);