import {User} from './user';
import {database} from "../../config/database";

export namespace UserHelper {
    export const getAllUser = () => {
        return database.prepare('SELECT * FROM user').all();
    }

    export const createUser = (identifier: string): void => {
        database.prepare('INSERT INTO user (identifier) VALUES (?)').run(identifier);
    }

}