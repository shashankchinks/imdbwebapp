import mongoose from "mongoose";

//schema for Todo table/collection
const actorSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    sex: String,
    dob: String,
    bio: String,
    myMovie: [{type:mongoose.SchemaTypes.ObjectId, ref:"movie"}],
    createdDate: {type: Date, default:Date.now},
    completed: {type:Boolean, default:false}
});
//default:Date.now :- dafault value for fields
//name :- Field/column name of table
//{type:String, required:true} :- Type of field

//Register table/collection with database
export const actorModel = mongoose.model('actor',actorSchema); 
//collection name :- 'todo'
//schema of collection :- todoSchema