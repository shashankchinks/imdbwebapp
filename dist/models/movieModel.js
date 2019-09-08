"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var movieSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true, unique: true },
    yearOfRelease: String,
    plot: String,
    poster: String,
    producedBy: { type: mongoose_1.default.SchemaTypes.Mixed, ref: "producer" },
    ActorList: [{ type: mongoose_1.default.SchemaTypes.Mixed, ref: "actor" }],
    createdDate: { type: Date, default: Date.now },
    completed: { type: Boolean, default: false }
});
exports.movieModel = mongoose_1.default.model('movie', movieSchema);
