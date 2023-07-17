// import {useState, useEffect} from "react"
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantPageHead from "./RestaurantPageHead";
import ResPageDish from "./ResPageDish";

import useResData from "../customHooks/useResData";

const Restaurant = () => {
    const {id} = useParams();
    const resData = useResData(id);
    
    if(resData === null) return <Shimmer/>

    const {name, avgRating, totalRatingsString, locality, cuisines, areaName} = resData?.data?.cards[0]?.card?.card?.info;
    const {itemCards} = resData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return(
        
        <div>
            
            <RestaurantPageHead name = {name} rating = {avgRating} ratingCount = {totalRatingsString} area = {locality + ", " + areaName} cuisines = {cuisines.join(", ")}/>
            
            <div className="dish-container">
            {
                itemCards?.map((itemCard) => {
                    return(
                        <ResPageDish 
                        key = {itemCard?.card?.info?.id}
                        name = {itemCard?.card?.info?.name}
                        price = {itemCard?.card?.info?.price}
                        desc = {itemCard?.card?.info?.description}
                        image = {itemCard?.card?.info?.imageId}
                        />
                    )
                })
            }
            <ResPageDish/>
            </div>
        </div>
    )
}

export default Restaurant;