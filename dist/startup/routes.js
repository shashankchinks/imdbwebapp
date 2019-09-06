"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var actorroutes_1 = require("./../routes/actorroutes");
var moviesroutes_1 = require("./../routes/moviesroutes");
var producersroutes_1 = require("./../routes/producersroutes");
// import {AuthenticateService} from './../middleware/authenticate'
// import {AuthorizeService} from "./../middleware/authorize";
var Routes = /** @class */ (function () {
    function Routes() {
    }
    Routes.configRoutes = function (app) {
        app.get('/', function (req, res) {
            res.status(200).json({ "success": "Server is running" });
        });
        //app.use(AuthenticateService.authenticate); //all thosa url which we want to authenticate it will come below of line or vice-versa
        app.use('/actor', actorroutes_1.ActorRoutes);
        app.use('/movie', moviesroutes_1.MovieRoutes);
        app.use('/producer', producersroutes_1.ProducerRoutes);
    };
    return Routes;
}());
exports.Routes = Routes;
