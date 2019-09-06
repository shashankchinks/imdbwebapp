"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
//schema for Todo table/collection
var actorSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true, unique: true },
    sex: String,
    dob: String,
    bio: String,
    createdDate: { type: Date, default: Date.now },
    completed: { type: Boolean, default: false }
});
//default:Date.now :- dafault value for fields
//name :- Field/column name of table
//{type:String, required:true} :- Type of field
//Register table/collection with database
exports.actorModel = mongoose_1.default.model('actor', actorSchema);
//collection name :- 'todo'
//schema of collection :- todoSchema
