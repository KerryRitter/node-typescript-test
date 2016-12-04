import { Controller, Get, TYPE } from "inversify-express-utils";
import { injectable, inject } from "inversify";
import { UsersService } from "../data/services";
import { AuthService } from "../infrastructure/auth";
import { provideFluent } from "../infrastructure/container";

@provideFluent(TYPE.Controller).whenTargetNamed("UsersController").done()
@Controller("/api/users/")
export class UsersController {
    public constructor(
        private _usersService: UsersService
    ) {
    }

    @Get("/")
    public get(): any[] {
        return this._usersService.getAll();
    }
}