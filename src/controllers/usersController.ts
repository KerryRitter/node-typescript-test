import { Controller, Get } from "inversify-express-utils";
import { injectable, inject } from "inversify";
import { UsersService } from "../data/services";
import { AuthService } from "../infrastructure/auth";

@injectable()
@Controller("/api/users/", AuthService.authenticate())
export class UsersController {
    public constructor(
        @inject("UsersService") private _usersService: UsersService
    ) {
    }

    @Get("/")
    public get(): any[] {
        return this._usersService.getAll();
    }
}