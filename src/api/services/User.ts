import {User} from '../models/user/user';
import {UserHelper} from '../models/user/helpers';

export namespace UserService {
    export const getAllUser = () => {
        return UserHelper.getAllUser();
    }

    export const createUser = (title: string): void => {
        UserHelper.createUser(title);
    }
}