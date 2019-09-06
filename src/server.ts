import express from "express";
import bodyParser from "body-parser";
import {Db} from "./startup/db";
import {Routes} from "./startup/routes";
class ImdbApp{
    app:express.Application;
    constructor(){
        this.app = express();
        this.app.listen(4000,'localhost',()=>{
            console.log("Server has started on port 4000");
        });
        this.configBodyParser();
        Routes.configRoutes(this.app);
        Db.connectMongoDb();
    }

    private configBodyParser(){
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended:false}));
    }
}

export const imdbApp = new ImdbApp();
