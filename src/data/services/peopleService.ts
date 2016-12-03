import { injectable } from "inversify";
import { Person } from "../models";

@injectable()
export class PeopleService {
    private storage: Person[] = [{
        email: "lorem@ipsum.com",
        name: "Lorem"
    }, {
        email: "doloe@sit.com",
        name: "Dolor"
    }];


    public getAll(): Person[] {
        return this.storage;
    }
}