import {User} from "../entities";
import mysql = require("mysql");


export class UserRepository {
    public getUsers(): Promise<User[]>  {
        const promise: Promise<User[]> = new Promise ((resolve: (str: User[]) => void, reject: (str: User[]) => void) => {
            mysql.createPool(null).query("", (err: mysql.IError, results: User[]) => {
                resolve(results);
            });
        });

        return promise;
    }
}