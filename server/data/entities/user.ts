import {Table} from "../../../node_modules/typeorm/decorator/tables";
import {PrimaryColumn, Column} from "../../../node_modules/typeorm/decorator/columns";

@Table("user")
export class User {
    @PrimaryColumn("int", { generated: true })
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    salt: boolean;
}