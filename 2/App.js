import React from "react";
import ReactDOM from "react-dom";

// Header Component

const Header = () => {
    return(
        <React.Fragment>
            <div className="header">
                <Logo/>
                <SearchBar/>
                <UserIcon/>
            </div>
        </React.Fragment>
    )
}

const Logo = () => {
    return(
        <React.Fragment>
            <div className = "logo">

            </div>
        </React.Fragment>
    )
}

const SearchBar = () => {
    return(
        <React.Fragment>
            <input className = "searchBar" placeholder="Search"></input>
        </React.Fragment>
    )
}

const UserIcon = () => {
    return(
        <React.Fragment>
            <div className="userIcon">

            </div>
        </React.Fragment>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

// Here object is converted into actual DOM element
root.render(<Header/>)