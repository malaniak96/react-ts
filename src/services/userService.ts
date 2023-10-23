import {IUser} from "../interfaces/UserInterface";
import {axiosService, IRes} from "./axiosService";
import {urls} from "../constants/urls";

const userService = {
    getAll: (): IRes<IUser[]> => axiosService.get(urls.users.base),
    getById: (id:number): IRes<IUser> => axiosService.get(urls.users.byId(id))
}
//IUser[] is type T

export {
    userService
}


// const asd = async ():Promise<void> => {}
// function that only returns promise and nothing else
//

// userService.getAll().then(value => value.data[0])
// data=IUser
// [0]=array
// AxiosResponse= (value=> value)


///CRTL + ALT + O видалить імпорти які не використовуються