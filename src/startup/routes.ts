import express from "express";
import {ActorRoutes} from "./../routes/actorroutes";
import {MovieRoutes} from "./../routes/moviesroutes";
import {ProducerRoutes} from "./../routes/producersroutes";
// import {AuthenticateService} from './../middleware/authenticate'
// import {AuthorizeService} from "./../middleware/authorize";
export class Routes{
    constructor(){

    }

    public static configRoutes(app:express.Application):void{
        app.get('/',(req: express.Request,res: express.Response)=>{
            res.status(200).json({"success":"Server is running"});
        });

        //app.use(AuthenticateService.authenticate); //all thosa url which we want to authenticate it will come below of line or vice-versa
        
        app.use('/actor',ActorRoutes);
        app.use('/movie',MovieRoutes);
        app.use('/producer',ProducerRoutes);
        
    }
}