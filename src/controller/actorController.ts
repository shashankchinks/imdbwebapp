import express from "express";
import {BankService} from "./../services/bankService";
export class BankController{
    public async getAllBank(req:express.Request, res:express.Response){
        let result = await BankService.getAllBank(req,res);
        res.json(result);
    }

    public async getBankById(req:express.Request, res:express.Response){
        let result = await BankService.getBankById(req,res);
        res.json(result);
    }

    public async updateBankById(req:express.Request, res:express.Response){
        let result = await BankService.updateBankById(req,res);
        res.json(result);
    }

    public async createBank(req:express.Request, res:express.Response){
        let result = await BankService.createBank(req,res);
        res.json(result);
    }
}