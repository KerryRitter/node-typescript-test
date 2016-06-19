import {createConnection, CreateConnectionOptions, Connection} from "../../node_modules/typeorm/typeorm";
import {Configuration} from "../infrastructure/configurationManager";
import {User} from "./entities/user";

export class DataContext {
    private static options: CreateConnectionOptions = {
        driver: "mysql",
        connection: {
            host: Configuration.appSettings.database.host,
            port: 3306,
            username: Configuration.appSettings.database.username,
            password: Configuration.appSettings.database.password,
            database: Configuration.appSettings.database.databaseName,
            autoSchemaCreate: true
        },
        entities: [User]
    };

    public static createConnection(): Promise<Connection> {
        return createConnection(this.options);
    };
}