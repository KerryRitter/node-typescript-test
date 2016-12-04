import * as mysql from "mysql";
import { Config } from "../../config";
import { provide } from "../container";
import "reflect-metadata";
console.log(provide);
@provide(ConnectionFactory)
export class ConnectionFactory {
    private _pool =  mysql.createPool(Config.database);

    public connect(callback: (err: mysql.IError, connection: mysql.IConnection) => void) {
        this._pool.getConnection((err, connection) => {
            callback(err, connection);

            connection.release();
        });
    }
}