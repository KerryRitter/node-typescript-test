import { Controller, Get, TYPE } from "inversify-express-utils";
import { UsersService } from "../data/services";
import { AuthService } from "../infrastructure/auth";
import { provideNamed } from "../infrastructure/ioc";

@provideNamed(TYPE.Controller, "UsersController")
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