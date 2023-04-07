import {Annonce} from './annonce';
import {database} from "../../config/database";

export namespace AnnonceHelper {
    export const getAllAnnonce = () => {
        return database.prepare('SELECT * FROM annonce').all();
    }

    export const createAnnonce = (title: string): void => {
        database.prepare('INSERT INTO Annonce (titre, description, prix,id_user) VALUES (?)').run(title);
    }

}