import express from "express";
import {ActorService} from "./../services/actorsServices";
export class actorController{
    public async getAllActor(req:express.Request, res:express.Response){
        let result = await ActorService.getAllActor(req,res);
        res.json(result);
    }

    public async getActorById(req:express.Request, res:express.Response){
        let result = await ActorService.getActorById(req,res);
        res.json(result);
    }

    public async updateActorById(req:express.Request, res:express.Response){
        let result = await ActorService.updateActorById(req,res);
        res.json(result);
    }

    public async createActor(req:express.Request, res:express.Response){
        let result = await ActorService.createActor(req,res);
        res.json(result);
    }
}