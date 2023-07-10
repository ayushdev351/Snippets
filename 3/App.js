import React from "react"
import ReactDOM from "react-dom"

import "./styles.css";

const Header = () => {
    return(
        <div className="header">
            <img className="logo" src="https://icon-library.com/images/order-food-online-icon/order-food-online-icon-5.jpg" alt="logo"/>
            <ul className="nav-items">
                <li className="nav-item">Home</li>
                <li className="nav-item">Cart</li>
                <li className="nav-item">Help</li>
                <li className="nav-item">Offers</li>
            </ul>
        </div>
    )
}

const Search = () => {
    return(
        <div className="search">

        </div>
    )
}

const ResCard = () => {
    return(
        <div className="res-card">
            <div className="res-img-container">
            <img className="res-img" src = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/vwuu4sq8qcpvbdtnetkd" alt="Haldiram"/>
            </div>
            <p className="res-name">The Paratha Hub</p>
            <p className="res-cuisines">North Indian, Punjabi</p>
            <div className="res-info">
                <p className="res-rating">3 star</p>
                <h5 className="res-delivery-time">30 mins</h5>
                <p className="res-price">Rs 400</p>
            </div>

        </div>
    )
}

const Body = () => {
    return(
        <div className="body">
            <ResCard/>
            <ResCard/>
            <ResCard/>
            <ResCard/>
            <ResCard/>
            <ResCard/>
            <ResCard/>
            <ResCard/>
            <ResCard/>
            <ResCard/>
            <ResCard/>
            <ResCard/>
            <ResCard/>
            <ResCard/>
        </div>
    )
}

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

