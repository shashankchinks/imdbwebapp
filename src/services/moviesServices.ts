import express from "express";
import {movieModel} from "./../models/movieModel";
export class MovieService{
    public static async getAllMovie(req: express.Request, res: express.Response){
        try{
            let allMovie = await movieModel.find().exec();
            return allMovie;
        }
        catch(err){
            console.log(err);
            return err;
        }
    }

    public static async getMovieById(req: express.Request, res: express.Response){
        try{
            let getMovie = await movieModel.findById(req.params.id).exec();
            return getMovie;
        }
        catch(err){
            console.log(err);
            return err;
        }
    }

    public static async updateMovieById(req:express.Request, res:express.Response){
        try {
            let updateMovieById:any = await movieModel.findById(req.params.id).exec();
            updateMovieById.name = req.body.name;
            updateMovieById.type = req.body.type;
            await updateMovieById.save();
            return updateMovieById;
        } catch (err) {
            console.log(err);
            return err;            
        }
    }
    
    public static async createMovie(req:express.Request, res:express.Response){
        try{
            let createMovie = new movieModel(req.body);
            await createMovie.save();
            return createMovie;
        }catch(err){
            console.log(err);
            return err;
        }
    }
}