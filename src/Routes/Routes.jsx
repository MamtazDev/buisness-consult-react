import { createBrowserRouter } from "react-router-dom";
// import Home from "../pages/home/Home";
// import NotFound from "../pages/404/NotFound";
import Layout from "../Layout/Layout";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        // errorElement: <NotFound />,
        // children: [
        //     {
        //         path: '/',
        //         element: <Home />
        //     },
        // ]
    }
])