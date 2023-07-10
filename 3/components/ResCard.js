import { Cloudinary_URL } from "../utils/constants";

const ResCard = ({resData}) => {

    const {cloudinaryImageId, name, cuisines, avgRating, deliveryTime, costForTwo} = resData?.data;
    
    return(
        <div className="res-card">
            <div className="res-img-container">
            <img className="res-img" src = {Cloudinary_URL + cloudinaryImageId} alt="Haldiram"/>
            </div>
            <p className="res-name">{name}</p>
            <p className="res-cuisines">{cuisines.join(", ")}</p>
            <div className="res-info">
                <p className="res-rating">{avgRating} star</p>
                <h5 className="res-delivery-time">{deliveryTime} mins</h5>
                <p className="res-price">Rs {costForTwo / 100}</p>
            </div>
        </div>
    )
}

export default ResCard;