import mongoose from "mongoose";
const producerSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    sex: String,
    dob: String,
    bio: String,
    movieProduced : [{type:mongoose.SchemaTypes.ObjectId, ref:"movie"}],
    createdDate: {type: Date, default:Date.now},
    completed: {type:Boolean, default:false}
});

export const producerModel = mongoose.model('producer',producerSchema); 
