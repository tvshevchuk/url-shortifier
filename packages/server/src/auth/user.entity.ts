import { Entity, Column, PrimaryColumn, ObjectIdColumn, BaseEntity } from "typeorm";
import * as bcrypt from 'bcryptjs';

@Entity()
export class User extends BaseEntity {
    @ObjectIdColumn()
    _id: string;

    @PrimaryColumn()
    id: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    salt: string;

    async validatePassword(password: string) {
        const hash = await bcrypt.hash(password, this.salt);
        return hash === this.password;
    }
}