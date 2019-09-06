import express from "express";
import {producerModel} from "./../models/producerModel";
export class ProducerService{
    public static async getAllProducer(req: express.Request, res: express.Response){
        try{
            let allProducer = await producerModel.find().exec();
            return allProducer;
        }
        catch(err){
            console.log(err);
            return err;
        }
    }

    public static async getProducerById(req: express.Request, res: express.Response){
        try{
            let getProducer = await producerModel.findById(req.params.id).exec();
            return getProducer;
        }
        catch(err){
            console.log(err);
            return err;
        }
    }

    public static async updateProducerById(req:express.Request, res:express.Response){
        try {
            let updateProducerById:any = await producerModel.findById(req.params.id).exec();
            updateProducerById.name = req.body.name;
            updateProducerById.sex = req.body.sex;
            updateProducerById.dob = req.body.dob;
            updateProducerById.bio = req.body.bio;
            updateProducerById.movieProduced = req.body.movieProduced;
            await updateProducerById.save();
            return updateProducerById;
        } catch (err) {
            console.log(err);
            return err;            
        }
    }
    
    public static async createProducer(req:express.Request, res:express.Response){
        try{
            let createProducer = new producerModel(req.body);
            await createProducer.save();
            return createProducer;
        }catch(err){
            console.log(err);
            return err;
        }
    }
}