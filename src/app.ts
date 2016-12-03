import "reflect-metadata";
import { interfaces, Controller, InversifyExpressServer, TYPE } from "inversify-express-utils";
import { AppKernel } from "./kernel";
import * as bodyParser from "body-parser";
import * as path from "path";

// start the server
const server = new InversifyExpressServer(AppKernel.Kernel);

server.setConfig((app) => {
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(bodyParser.json());
});

const app = server.build();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/../dist/views"));

app.listen(3000);

console.log("Server started on port 3000 :)");