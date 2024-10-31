import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";

import Portfolio from "../Pages/Protfolio/Portfolio";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/portfolio',
                element: <Portfolio/>
            },
        ]
    }
])