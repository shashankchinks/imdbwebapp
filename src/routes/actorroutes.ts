import { Router } from "express";
import { BankController } from "./../controllers/bankController";

let bankControllerObj = new BankController();

export const bankRoutes: Router = Router();
bankRoutes.get('/',bankControllerObj.getAllBank);
bankRoutes.get('/getBankById/:id',bankControllerObj.getBankById);
bankRoutes.put('/updateBankById/:id',bankControllerObj.updateBankById);
bankRoutes.post('/createBank',bankControllerObj.createBank);