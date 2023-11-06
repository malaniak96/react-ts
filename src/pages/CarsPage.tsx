import React, {useState} from 'react';
import {Cars} from "../components/CarsContainer/Cars";
import {CarForm} from "../components/CarsContainer/CarForm";
import {ICar} from "../interfaces/CarInterface";
import {Outlet} from "react-router-dom";

const CarsPage = () => {

    const [flag, setFlag] = useState<boolean>(null);

    const [carForUpdate, setCarForUpdate] = useState<ICar>(null);
    const trigger = ()=>{
        setFlag(prevState => !prevState)
    }
    return (
        <div>
            <CarForm trigger={trigger} carForUpdate={carForUpdate}/>
            <hr/>
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <Cars flag={flag} setCarForUpdate={setCarForUpdate}/>
                <Outlet/>
            </div>

        </div>
    );
};

export {CarsPage};