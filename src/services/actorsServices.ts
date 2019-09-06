import express from "express";
import {actorModel} from "./../models/actorModel";
export class ActorService{
    public static async getAllActor(req: express.Request, res: express.Response){
        try{
            let allActor = await actorModel.find().exec();
            return allActor;
        }
        catch(err){
            console.log(err);
            return err;
        }
    }

    public static async getActorById(req: express.Request, res: express.Response){
        try{
            let getActor = await actorModel.findById(req.params.id).exec();
            return getActor;
        }
        catch(err){
            console.log(err);
            return err;
        }
    }

    public static async updateActorById(req:express.Request, res:express.Response){
        try {
            let updateActorById:any = await actorModel.findById(req.params.id).exec();
            updateActorById.name = req.body.name;
            updateActorById.sex = req.body.sex;
            updateActorById.dob = req.body.dob;
            updateActorById.myMovie = req.body.myMovie;
            await updateActorById.save();
            return updateActorById;
        } catch (err) {
            console.log(err);
            return err;            
        }
    }
    
    public static async createActor(req:express.Request, res:express.Response){
        try{
            let createActor = new actorModel(req.body);
            await createActor.save();
            return createActor;
        }catch(err){
            console.log(err);
            return err;
        }
    }
}