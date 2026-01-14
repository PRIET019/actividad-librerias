import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home"
import PageNotFound from "../pages/PageNotFound"
import Registro from "../pages/Registro"



export const router = createBrowserRouter([
    {path: "*", element: <PageNotFound/>},
    {path: "/", element: <Registro/>},
    {path: "/home", element: <Home/>}
    
]);