import { LOGO_URL } from "../utils/constants";

const Header = () => {
    return(
        <div className="header">
            <img className="logo" src={LOGO_URL} alt="logo"/>
            <ul className="nav-items">
                <li className="nav-item">Home</li>
                <li className="nav-item">Cart</li>
                <li className="nav-item">Help</li>
                <li className="nav-item">Offers</li>
            </ul>
        </div>
    )
}

export default Header;