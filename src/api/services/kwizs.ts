import {Kwizs} from '../models/kwizs/kwizs';
import {KwizHelper} from '../models/kwizs/helpers';

export namespace KwizService {
    export const getAllKwizs = () => {
        return KwizHelper.getAllKwizs();
    }

    export const createKwiz = (title: string): void => {
        KwizHelper.createKwiz(title);
    }
}