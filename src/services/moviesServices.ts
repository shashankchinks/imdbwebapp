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
            //    let data = await createProducer.save(function(err:any,producerDetail:any){
            //         if(err){
            //             return console.error(err);
            //         }else{                        
            //             producerId = producerDetail._id;
            //         }
            //     });
                data = await createProducer.save();
            }else{
                producerId = producerExist._id;
            }

            let actorCount = req.body.ActorList.length;
            for(let i = 0; i < actorCount; i++){
                let actorExist = await producerModel.findOne({'name':req.body.ActorList[i]}).exec();
                if(actorExist == null){
                    let createActor:any = new actorModel();
                    createActor.name = req.body.ActorList[i];
                    await createActor.save();
                }else{

                } 
            }

            let updateMovieById:any = await movieModel.findById(req.params.id).exec();
            updateMovieById.name = req.body.name;
            updateMovieById.yearOfRelease = req.body.yearOfRelease;
            updateMovieById.ActorList = req.body.ActorList;
            updateMovieById.producedBy = data._id;
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
            let producerExist:any = await producerModel.findOne({'name':req.body.producedBy}).exec();
            if(producerExist == null){
                let createProducer:any = new producerModel();
                createProducer.name = req.body.producedBy;
                await createProducer.save();
            }else{

            }
            //let createMovie = new movieModel(req.body);
            let actorCount = req.body.ActorList.length;
            for(let i = 0; i < actorCount; i++){
                let actorExist = await producerModel.findOne({'name':req.body.ActorList[i]}).exec();
                if(actorExist == null){
                    let createActor:any = new actorModel();
                    createActor.name = req.body.ActorList[i];
                    await createActor.save();
                }else{
                    
                } 
            }
            
            
            //await createMovie.save();
            //return createMovie;
        }catch(err){

            console.log(err);
            return err;
        }
    }
}