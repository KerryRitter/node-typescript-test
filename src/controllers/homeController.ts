import * as express from "express";
import { Controller, Get, TYPE } from "inversify-express-utils";
import { provideController } from "../infrastructure/ioc";

@provideController(HomeController)
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