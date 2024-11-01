import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";

import Portfolio from "../Pages/Portfolio/Portfolio";
import Services from "../Pages/Services/Services";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
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
           
            {
                path: '/service',
                element: <Services/>
            },
            {
                path: '/service-details',
                element: <ServiceDetails/>
            },
           
        ]
    }
])