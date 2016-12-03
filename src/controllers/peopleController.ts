import { Controller, Get } from "inversify-express-utils";
import { injectable, inject } from "inversify";
import { PeopleService } from "../data/services";

@injectable()
@Controller("/api/people/")
export class PeopleController {
    public constructor(
        @inject("PeopleService") private _peopleService: PeopleService
    ) {
    }

    @Get("/")
    public get(): any[] {
        return this._peopleService.getAll();
    }
}