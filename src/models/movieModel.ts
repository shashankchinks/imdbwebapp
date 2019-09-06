import mongoose from "mongoose";
const movieSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    yearOfRelease: String,
    plot: String,
    poster: String,
    createdDate: {type: Date, default:Date.now},
    completed: {type:Boolean, default:false}
});

export const movieModel = mongoose.model('movie',movieSchema); 