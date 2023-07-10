import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body";
import Search from "./components/Search";

import "./styles.css";

const AppLayout = () => {
    return (
        <div>   
            <Header/>
            <Search/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);