import "reflect-metadata";
import * as bodyParser from "body-parser";
import * as path from "path";
import * as express from "express";
import * as _ from "lodash";

import { HomeRouter } from "routers";

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/../dist/views"));

var x = new HomeRouter();
app.use(x.routes);

app.listen(3000, () => {
    console.log("Listening on port 3000!");
});