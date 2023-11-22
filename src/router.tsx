import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import React from "react";
import {CarPage} from "./pages/CarPage";
import {RegisterPage} from "./pages/RegisterPage";
import {LoginPage} from "./pages/LoginPage";
import {RequiredAuth} from "./hoc/RequiredAuth";

const router = createBrowserRouter([
    {path: '', element:<MainLayout/>, children:[
            {index:true, element: <Navigate to={'cars'}/>},
            {path: 'cars', element: <RequiredAuth><CarPage/></RequiredAuth>},
            {path: 'login', element: <LoginPage/>},
            {path:'register', element: <RegisterPage/>}
        ]}
])

export {
    router
}