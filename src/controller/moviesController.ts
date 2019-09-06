import express from "express";
import {MovieService} from "./../services/moviesServices";
export class MovieController{
    public async getAllMovie(req:express.Request, res:express.Response){
        let result = await MovieService.getAllMovie(req,res);
        res.json(result);
    }

    public async getMovieById(req:express.Request, res:express.Response){
        let result = await MovieService.getMovieById(req,res);
        res.json(result);
    }

    public async updateMovieById(req:express.Request, res:express.Response){
        let result = await MovieService.updateMovieById(req,res);
        res.json(result);
    }

    public async createMovie(req:express.Request, res:express.Response){
        let result = await MovieService.createMovie(req,res);
        res.json(result);
    }
}