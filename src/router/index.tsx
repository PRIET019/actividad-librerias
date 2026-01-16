import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home"
import Registro from "../pages/Registro"



export const router = createBrowserRouter([
    
    {path: "/", element: <Registro/>},
    {path: "/home", element: <Home/>}
    
]);