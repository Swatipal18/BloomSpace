import React, { useState } from 'react'
import {
    createHashRouter,
    RouterProvider,
    Navigate
} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import AppLayout from '../Layout/AppLayout';
import HomePage from '../pages/Home/HomePage';
import About from '../pages/About/About';
import Work from '../pages/Work/Work';
import DetailsWork from '../pages/DetailsWork/DetailsWork';
import PageNotFound from '../PageNotFound/PageNotFound';

function Navbar() {
    const router = createHashRouter([
        {
            path: "/",
            element: <AppLayout />,
            children: [
                {
                    path: "/",
                    element: <HomePage />
                },
                {
                    path: "/About",
                    element: <About />
                },
                {
                    path: "/Work",
                    element: <Work />
                },
                {
                    path: "/Work/:id",
                    element: <DetailsWork />
                },
                {
                    path: "/Service",
                    element: <DetailsWork />
                }

            ]
        }, {
            path: "*",
            element: <PageNotFound />
        }
    ])
    return <RouterProvider router={router} />
}

export default Navbar;