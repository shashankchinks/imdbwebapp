"use strict";
// import * as express from "express";
// import { userModel } from "./../models/bankModel";
// export class AuthorizeService{
//     public static async authorize(req:any, res:express.Response,next:any){       
//         try {
//             let user:any = await userModel.findOne({'_id':req.user.userId}).exec();
//             console.log('authorize');
//             console.log(user);
//             if(user.role == 'admin'){
//                 return next();
//             }else{
//                 var err = new Error('You are not authorized to perform this operation!');
//                 return next(err);
//             }
//         } catch (err) {
//             console.log(err);
//             return res.json(err);
//         }
//     }
// }
