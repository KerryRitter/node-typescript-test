import * as express from "express";
import { Controller, Get } from "inversify-express-utils";
import { injectable, inject } from "inversify";

@injectable()
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