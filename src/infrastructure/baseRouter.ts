import * as express from "express";

export abstract class BaseRouter {
    protected readonly _router = express.Router();
    
    public get routes() {
        return this._router;
    }
}