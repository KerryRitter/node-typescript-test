import * as express from "express";
import { Controller, Get, TYPE } from "inversify-express-utils";
import { injectable, inject } from "inversify";
import { provideFluent } from "../infrastructure/container";

@provideFluent(TYPE.Controller).whenTargetNamed("HomeController").done()
@Controller("/")
export class HomeController {
    public constructor(
    ) {
    }

    @Get("/")
    public index(req: express.Request, res: express.Response)   {
        res.render("home/index");
    }
}