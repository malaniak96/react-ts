import React, {FC, useEffect, useState} from 'react';
import {carService} from "../../services/CarService";
import {Car} from "./Car";
import {ICar} from "../../interfaces/CarInterface";
import {ISetState} from "../../types/ISetStateType";



interface IProps {
    flag: boolean
    setCarForUpdate: ISetState<ICar>
}



const Cars:FC<IProps> = ({flag, setCarForUpdate}) => {

    const [cars, setCars] = useState<ICar[]>([]);

    useEffect(()=>{
        carService.getAll().then(({data}) => setCars(data));
    },[flag])

    return (
        <div style={{width:'50%'}}>
            {cars.map(car=> <Car key={car.id} car={car} setCarForUpdate={setCarForUpdate}/>)}
        </div>
    );
};

export {Cars};