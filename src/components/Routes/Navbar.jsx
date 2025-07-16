import React, { useState } from 'react'
import {
    createHashRouter,
    RouterProvider,
    Navigate
} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import AppLayout from '../Layout/AppLayout';
import HomePage from '../pages/Home/HomePage';
import About from '../pages/About/About.JSX';
import Work from '../pages/Work/Work';

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
                }

            ]
        },
    ])
    return <RouterProvider router={router} />
}

export default Navbar;