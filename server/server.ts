"use strict";

import {registerControllers} from '../node_modules/giuseppe/index';
import {DatabaseConnection} from "./data/databaseConnection";
import express = require('express');

import "./controllers";
import "./apis";

require("es6-shim");
require("reflect-metadata");

let app = express();

app.use(require('body-parser').json());

app.use(registerControllers('/'));

DatabaseConnection.instance.sync().then(() => {
    app.listen(8080, () => {
        console.log('Up and running on port 8080');
    });
});