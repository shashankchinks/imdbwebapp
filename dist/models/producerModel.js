"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var producerSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true, unique: true },
    sex: String,
    dob: String,
    bio: String,
    createdDate: { type: Date, default: Date.now },
    completed: { type: Boolean, default: false }
});
exports.producerModel = mongoose_1.default.model('producer', producerSchema);
