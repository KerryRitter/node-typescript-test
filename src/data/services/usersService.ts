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

    public async getAll(): Promise<User[]> {
        return new Promise<User[]>((resolve, reject) => {
            resolve([
                { email: "ritter@kerryritter.com", name: "Kerry Ritter" } as User
            ]);

            // this._connectionFactory.connect((err, connection) => {
            //     connection.query("", (error, rows, fields) => {
            //         if (error) {
            //             reject(error);
            //             return;
            //         }
                    
            //         resolve(rows);
            //     });
            // });
        });
    }
}