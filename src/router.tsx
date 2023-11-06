import {createBrowserRouter, Navigate} from "react-router-dom";
import exp from "constants";
import {MainLayout} from "./layouts/MainLayout";
import {HomePage} from "./pages/HomePage";
import {CarsPage} from "./pages/CarsPage";
import {SelectedCarPage} from "./pages/SelectedCarPage";

const router = createBrowserRouter([
    {path:'', element:<MainLayout/>, children:[
            {index: true, element:<Navigate to={'home'}/>},
            {path:'home', element:<HomePage/>},
            {path:'cars', element:<CarsPage/>, children:[
                    {path:'select', element:<SelectedCarPage/>}
                ]},
        ]}
]);

export {
    router
}