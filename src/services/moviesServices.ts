import express from "express";
import {movieModel} from "./../models/movieModel";
import { actorModel } from "./../models/actorModel";
import { producerModel } from "./../models/producerModel";
export class MovieService{
    public static async getAllMovie(req: express.Request, res: express.Response){
        try{
            let allMovie = await movieModel.find().populate('ActorList').populate('producedBy').exec();
            return allMovie;
        }
        catch(err){
            console.log(err);
            return err;
        }
    }

    public static async getMovieById(req: express.Request, res: express.Response){
        try{
            let getMovie = await movieModel.findById(req.params.id).populate('ActorList').populate('producedBy').exec();
            return getMovie;
        }
        catch(err){
            console.log(err);
            return err;
        }
    }

    public static async updateMovieById(req:express.Request, res:express.Response){
        try {
            
            //updateMovieById.producedBy = req.body.producedBy;
            let producerExist = await producerModel.findOne({'name':req.body.producer}).exec();
            if(producerExist == null){
                let createProducer = new producerModel(req.body.producer);
                console.log(createProducer);
                await createProducer.save();
            }
            console.log(producerExist);
            // let updateMovieById:any = await movieModel.findById(req.params.id).exec();
            // updateMovieById.name = req.body.name;
            // updateMovieById.yearOfRelease = req.body.yearOfRelease;
            //updateMovieById.ActorList = req.body.ActorList;
            //await updateMovieById.save();
            // return updateMovieById;
        } catch (err) {
            console.log(err);
            return err;            
        }
    }
    
    public static async createMovie(req:express.Request, res:express.Response){
        try{
            //let createMovie = new movieModel(req.body);
            let countActor = req.body.ActorList.length;
            console.log(countActor);
            for(let i = 0; i < countActor; i++){
                let actorExist = await actorModel.find({'name':req.body.ActorList[i]}).exec();
                console.log(actorExist);
            }
            
            
            //await createMovie.save();
            //return createMovie;
        }catch(err){
            console.log(err);
            return err;
        }
    }
}