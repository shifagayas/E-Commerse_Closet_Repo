import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import LandingPage from '../Pages/LandingPage';
import ProductListPage from '../Pages/ProductListPage'


const router = createBrowserRouter([
    {path:"/", element:<LandingPage/>},
    {path:"/ProductListPage", element:<ProductListPage/>}
]) 
