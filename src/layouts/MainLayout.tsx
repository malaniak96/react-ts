import React from 'react';
import {Header} from "../components/Header/Header";
import {Cars} from "../components/CarsContainer/Cars";
import {Car} from "../components/CarsContainer/Car";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            </div>
    );
};

export {MainLayout};