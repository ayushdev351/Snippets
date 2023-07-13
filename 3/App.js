// import React from "react"
import ReactDOM from "react-dom/client"
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom"

import Header from "./components/Header"
import Body from "./components/Body";
import Contact from "./components/Contact";
import Cart from "./components/Cart"
import Help from "./components/Help"

import "./styles.css";

const AppLayout = () => {
    return (
        <div>   
            <Header/>
            <Outlet/>
        </div>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children : [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/help",
                element: <Help/>
            },
            {
                path: "/cart",
                element: <Cart/>
            }
        ]
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router}/>);