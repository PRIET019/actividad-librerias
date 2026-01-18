import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home"
import Registro from "../pages/Registro"
import Estadisticas from "@/pages/Estadisticas";



export const router = createBrowserRouter([
    
    {path: "/", element: <Registro/>},
    {path: "/home", element: <Home/>},
    {path: "/estadisticas", element: <Estadisticas/>}
]);