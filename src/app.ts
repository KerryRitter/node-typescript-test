import "reflect-metadata";
import { InversifyExpressServer } from "inversify-express-utils";
import { kernel } from "./infrastructure/ioc";
import * as bodyParser from "body-parser";
import * as path from "path";
import * as AuthServices from "./infrastructure/auth";

import "./data/services";
import "./infrastructure/auth";
import "./infrastructure/dataAccess";
import "./controllers";

const server = new InversifyExpressServer(kernel);

server.setConfig((app) => {
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(bodyParser.json());

    app.set("view engine", "ejs");
    app.set("views", path.join(__dirname, "/../dist/views"));

    AuthServices.AuthService.configure();
});

server.build().listen(3000);

console.log("Server started on port 3000 :)");