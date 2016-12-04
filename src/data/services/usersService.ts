import { injectable, inject } from "inversify";
import { ConnectionFactory } from "../../infrastructure/dataAccess";
import { User } from "../models";
import { provide } from "../../infrastructure/ioc";
import "reflect-metadata";

@provide(UsersService)
export class UsersService {
    public constructor(
        private _connectionFactory: ConnectionFactory
    ) {
    }

    public getAll(): any {
        let users: User[];

        this._connectionFactory.connect((err, connection) => {
            connection.query("", (error, rows, fields) => {
                users = rows;
            });
        });

        return users;
    }
}