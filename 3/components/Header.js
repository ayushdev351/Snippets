import { NavLink } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
    return(
        <div className="header">
            <img className="logo" src={LOGO_URL} alt="logo"/>
            <ul className="nav-items">
                <li className="nav-item"><NavLink to="/">Home</NavLink></li>
                <li className="nav-item"><NavLink to="/cart">Cart</NavLink></li>
                <li className="nav-item"><NavLink to="/help">Help</NavLink></li>
                <li className="nav-item"><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </div>
    )
}

export default Header;