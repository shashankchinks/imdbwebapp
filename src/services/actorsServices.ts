import express from "express";
import {bankModel} from "./../models/bankModel";
export class BankService{
    public static async getAllBank(req: express.Request, res: express.Response){
        try{
            let allBank = await bankModel.find().exec();
            return allBank;
        }
        catch(err){
            console.log(err);
            return err;
        }
    }

    public static async getBankById(req: express.Request, res: express.Response){
        try{
            let getBank = await bankModel.findById(req.params.id).exec();
            return getBank;
        }
        catch(err){
            console.log(err);
            return err;
        }
    }

    public static async updateBankById(req:express.Request, res:express.Response){
        try {
            let updateBankById:any = await bankModel.findById(req.params.id).exec();
            updateBankById.name = req.body.name;
            updateBankById.type = req.body.type;
            await updateBankById.save();
            return updateBankById;
        } catch (err) {
            console.log(err);
            return err;            
        }
    }
    
    public static async createBank(req:express.Request, res:express.Response){
        try{
            let createBank = new bankModel(req.body);
            await createBank.save();
            return createBank;
        }catch(err){
            console.log(err);
            return err;
        }
    }
}