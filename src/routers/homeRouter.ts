import * as express from "Express";

import { BaseRouter } from "infrastructure";
import { TestDataService } from "data";

export class HomeRouter extends BaseRouter {
    private _dataService = new TestDataService();

    public constructor() {
        super();

        this._router.get("/", this.index.bind(this));
    }

    public index(req: express.Request, res: express.Response) {
        res.render("home/index", {
            message: this._dataService.getData()
        });
    }
}