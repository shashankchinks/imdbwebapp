import { Router } from "express";
import { MovieController } from "./../controller/moviesController";

let movieControllerObj = new MovieController();

export const MovieRoutes: Router = Router();
MovieRoutes.get('/',movieControllerObj.getAllMovie);
MovieRoutes.get('/getMovieById/:id',movieControllerObj.getMovieById);
MovieRoutes.put('/updateMovieById/:id',movieControllerObj.updateMovieById);
MovieRoutes.post('/createMovie',movieControllerObj.createMovie);