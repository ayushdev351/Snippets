const RestaurantPageHead = ({name, rating, ratingCount, area, cuisines}) => {
    return(
        <div className="res-page-head">
            <div>
                <h3 className="res-page-name">{name}</h3>
                <p className="res-page-cuisines">{cuisines}</p>
                <p className="res-page-area">{area}</p>
            </div>
            <div className="res-page-ratings">
                <h2 className="res-page-stars">{rating}</h2>
                <p className="res-page-rating-count">{ratingCount}</p>
            </div>
        </div>
    )
}

export default RestaurantPageHead;