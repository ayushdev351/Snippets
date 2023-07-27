import { Cloudinary_URL } from "../utils/constants";

const ResCard = ({resData}) => {

    const {cloudinaryImageId, name, cuisines, avgRating, totalRatingsString, costForTwo} = resData?.info;
    
    return(
        <div className="res-card">
            <div className="res-img-container">
            <img className="res-img" src = {Cloudinary_URL + cloudinaryImageId} alt="Haldiram"/>
            </div>
            <p className="res-name">{name}</p>
            <p className="res-cuisines">{cuisines.join(", ")}</p>
            <div className="res-info">
                <p className="res-rating">{avgRating} star</p>
                <h5 className="res-delivery-time">{totalRatingsString}</h5>
                <p className="res-price">{costForTwo}</p>
            </div>
        </div>
    )
}

// Higher Order Component

export const ResCardTop = (ResCard) => {
    return(props) => {
        return(
            <div>
                <h5 style = {{
                    "position" : "absolute",
                    "margin" : "-5px -15px",
                    "padding" : "5px",
                    "backgroundColor" : "black",
                    "borderRadius" : "5px",
                    "color" : "white"
                }}>Top Choice</h5>
                <ResCard {...props}/>
            </div>
        )
    }
}

export default ResCard;