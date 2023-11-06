import React, {FC} from 'react';
import {ICar} from "../../interfaces/CarInterface";
import {ISetState} from "../../types/ISetStateType";
import {useNavigate} from "react-router-dom";

interface IProps {
   car: ICar
    setCarForUpdate: ISetState<ICar>
}

const Car: FC<IProps> = ({car, setCarForUpdate}) => {
    const {id, brand, price, year} = car;

   const navigate = useNavigate();
    return (
        <div style={{border:'1px solid black', margin: '5px 0'}}>
            <div> id: {id}</div>
            <div> brand: {brand}</div>
            <div> price: {price}</div>
            <div> year: {year}</div>
            <button onClick={()=> setCarForUpdate(car)}>update</button>
            <button>delete</button>
            <button onClick={()=>navigate('select', {state: {car}})}>select</button>
        </div>
    );
};

export {Car};