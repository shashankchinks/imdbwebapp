import { Router } from "express";
import { actorController } from "./../controller/actorController";

let actorControllerObj = new actorController();

export const ActorRoutes: Router = Router();
ActorRoutes.get('/',actorControllerObj.getAllActor);
ActorRoutes.get('/getActorById/:id',actorControllerObj.getActorById);
ActorRoutes.put('/updateActorById/:id',actorControllerObj.updateActorById);
ActorRoutes.post('/createActor',actorControllerObj.createActor);