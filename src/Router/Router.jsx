import { createBrowserRouter } from "react-router-dom";
import MainRouter from "./MainRouter";
import Home from "../Pages/Home/Home";

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
                path: '/projects',
                element: <Home></Home>
            },
            {
                path: '/skills',
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