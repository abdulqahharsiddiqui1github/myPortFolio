import { createBrowserRouter } from "react-router-dom";
import MainRouter from "./MainRouter";
import Home from "../Pages/Home/Home";
import Skills from "../Pages/Skills/Skills";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainRouter></MainRouter>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/Skills',
                element:<Skills></Skills>
            },
            {
                path: '/projects',
                element: <Home></Home>
            },
            {
                path: '/contacts',
                element: <Home></Home>
            }
        ]
    }
])

export default router;