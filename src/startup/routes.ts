import express from "express";
import {userRoutes} from "./../routes/userRoutes";
import {cardRoutes} from "./../routes/cardRoutes";
import {bankRoutes} from "./../routes/bankRoutes";
import {UserController} from "./../controllers/userController";
import {AuthenticateService} from './../middleware/authenticate'
import {AuthorizeService} from "./../middleware/authorize";
let userControllerObj = new UserController();
export class Routes{
    constructor(){

    }

    public static configRoutes(app:express.Application):void{
        app.get('/',(req: express.Request,res: express.Response)=>{
            res.status(200).json({"success":"Server is running"});
        });

        app.post('/register', userControllerObj.createUser);
        app.post('/login',userControllerObj.login);

        app.use(AuthenticateService.authenticate); //all thosa url which we want to authenticate it will come below of line or vice-versa
        
        app.use('/user',userRoutes);
        app.use('/card',cardRoutes,AuthorizeService.authorize);
        app.use('/bank',bankRoutes,AuthorizeService.authorize);
        
    }
}