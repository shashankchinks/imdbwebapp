"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var db_1 = require("./startup/db");
var routes_1 = require("./startup/routes");
var ImdbApp = /** @class */ (function () {
    function ImdbApp() {
        this.app = express_1.default();
        this.app.listen(4000, 'localhost', function () {
            console.log("Server has started on port 4000");
        });
        this.configBodyParser();
        routes_1.Routes.configRoutes(this.app);
        db_1.Db.connectMongoDb();
    }
    ImdbApp.prototype.configBodyParser = function () {
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
    };
    return ImdbApp;
}());
exports.imdbApp = new ImdbApp();
