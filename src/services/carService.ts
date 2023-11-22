import {IPagination} from "../interfaces/paginationInterface";
import {ICar} from "../interfaces/carInterface";
import {IRes} from "../types/resType";
import {apiService} from "./apiService";
import {urls} from "../constants/urls";


const carService = {
    getAll: (): IRes<IPagination<ICar>> => apiService.get(urls.cars.base),
    create: (data: ICar): IRes<ICar> => apiService.post(urls.cars.base, data),
    addPhoto:(id:number, photo:FormData):IRes<ICar> => apiService.put(urls.cars.photoById(id), photo)
}

export {
    carService
}