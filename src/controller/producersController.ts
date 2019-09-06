import express from "express";
import {ProducerService} from "./../services/producersServices";
export class ProducerController{
    public async getAllProducer(req:express.Request, res:express.Response){
        let result = await ProducerService.getAllProducer(req,res);
        res.json(result);
    }

    public async getProducerById(req:express.Request, res:express.Response){
        let result = await ProducerService.getProducerById(req,res);
        res.json(result);
    }

    public async updateProducerById(req:express.Request, res:express.Response){
        let result = await ProducerService.updateProducerById(req,res);
        res.json(result);
    }

    public async createProducer(req:express.Request, res:express.Response){
        let result = await ProducerService.createProducer(req,res);
        res.json(result);
    }
}