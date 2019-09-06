import { Router } from "express";
import { ProducerController } from "./../controller/producersController";

let producerControllerObj = new ProducerController();

export const ProducerRoutes: Router = Router();
ProducerRoutes.get('/',producerControllerObj.getAllProducer);
ProducerRoutes.get('/getProducerById/:id',producerControllerObj.getProducerById);
ProducerRoutes.put('/updateProducerById/:id',producerControllerObj.updateProducerById);
ProducerRoutes.post('/createProducer',producerControllerObj.createProducer);