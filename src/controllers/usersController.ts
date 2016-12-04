import { Controller, Get, TYPE } from "inversify-express-utils";
import { UsersService } from "../data/services";
import { User } from "../data/models";
import { AuthService } from "../infrastructure/auth";
import { provideController } from "../infrastructure/ioc";

@provideController(UsersController)
@Controller("/api/users/")
export class UsersController {
    public constructor(
        private _usersService: UsersService
    ) {
    }

    @Get("/")
    public async get(): Promise<User[]> {
        return await this._usersService.getAll();
    }
}