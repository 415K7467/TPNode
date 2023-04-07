import {Annonce} from '../models/annonce/annonce';
import {AnnonceHelper} from '../models/annonce/helpers';

export namespace UserService {
    export const getAllUser = () => {
        return AnnonceHelper.getAllAnnonce();
    }

    export const createUser = (title: string): void => {
        AnnonceHelper.createAnnonce(title);
    }
}