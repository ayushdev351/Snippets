import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Link, Outlet} from "react-router-dom";

import FunctionalComp from "./FunctionalComp"
import ClassComp from "./ClassComp";

const Header = () => {
    return(
        <div>
            <Link to = "/">Main</Link>
            <br>
            </br>
            <Link to = "/route">Other</Link>
        </div>
    )
}

const App = () => {
    return(
        <div>
            <Header/>
            <Outlet/>
        </div>
    )
}

const MainComponent = () => {
    return(
        <div>
            <FunctionalComp/>
            {/* <ClassComp propsData = "props data"/> */}
        </div>
    )
}

const OtherComponent = () => {
    return <h1>Other Component</h1>
}


const router = createBrowserRouter([
    {
        path:"/",
        element : <App/>,
        children : [
            {
                path : "/",
                element : <MainComponent/>
            },
            {
                path : "/route",
                element : <OtherComponent/>
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}/>)