import {Kwizs} from './kwizs';
import {database} from "../../config/database";

export namespace KwizHelper {
    export const getAllKwizs = () => {
        return database.prepare('SELECT * FROM kwizs').all();
    }

    export const createKwiz = (title: string): void => {
        database.prepare('INSERT INTO kwizs (title) VALUES (?)').run(title);
    }

}