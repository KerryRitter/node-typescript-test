import * as express from "express";
import { Controller, Get, TYPE } from "inversify-express-utils";
import { provideNamed } from "../infrastructure/ioc";

@provideNamed(TYPE.Controller, "HomeController")
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