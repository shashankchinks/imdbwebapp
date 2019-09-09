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
            let data = null;
            let producerId = null;
            let producerExist:any = await producerModel.findOne({'name':req.body.producedBy}).exec();
            if(producerExist == null){
                let createProducer:any = new producerModel();
                createProducer.name = req.body.producedBy;
                data = await createProducer.save();
                producerId = data._id;
            }else{
                producerId = producerExist._id;
            }
            let actorIdList = Array();
            let actorCount = req.body.ActorList.length;
            for(let i = 0; i < actorCount; i++){
                let actorExist = await actorModel.findOne({'name':req.body.ActorList[i]}).exec();
                if(actorExist == null){
                    let createActor:any = new actorModel();
                    createActor.name = req.body.ActorList[i];
                    data = await createActor.save();
                    actorIdList.push(data._id);
                }else{
                    actorIdList.push(actorExist._id);
                } 
            }

            let updateMovieById:any = await movieModel.findById(req.params.id).exec();
            updateMovieById.name = req.body.name;
            updateMovieById.yearOfRelease = req.body.yearOfRelease;
            updateMovieById.producedBy = producerId;
            updateMovieById.ActorList = actorIdList;
            console.log(updateMovieById);
            await updateMovieById.save();
            return updateMovieById;
        } catch (err) {
            console.log(err);
            return err;            
        }
    }
    
    public static async createMovie(req:express.Request, res:express.Response){
        try{
            let data = null;
            let producerId = null;
            let producerExist:any = await producerModel.findOne({'name':req.body.producedBy}).exec();
            if(producerExist == null){
                let createProducer:any = new producerModel();
                createProducer.name = req.body.producedBy;
                data = await createProducer.save();
                producerId = data._id;
            }else{
                producerId = producerExist._id;
            }
            let actorIdList = Array();
            let actorCount = req.body.ActorList.length;
            for(let i = 0; i < actorCount; i++){
                let actorExist = await actorModel.findOne({'name':req.body.ActorList[i]}).exec();
                if(actorExist == null){
                    let createActor:any = new actorModel();
                    createActor.name = req.body.ActorList[i];
                    data = await createActor.save();
                    actorIdList.push(data._id);
                }else{
                    actorIdList.push(actorExist._id);
                } 
            }
            
            let createMovie:any = new movieModel();
            createMovie.name = req.body.name;
            createMovie.yearOfRelease = req.body.yearOfRelease;
            createMovie.producedBy = producerId;
            createMovie.ActorList = actorIdList;
            await createMovie.save();
            return createMovie;
        }catch(err){
            console.log(err);
            return err;
        }
    }
}