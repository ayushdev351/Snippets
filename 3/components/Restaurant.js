import { useParams } from "react-router-dom";
import { useState } from "react";

import Shimmer from "./Shimmer";
import RestaurantPageHead from "./RestaurantPageHead";
import DishListAccordian from "./DishListAccordian";
import useDishData from "../customHooks/useDishData";

const Restaurant = () => {
    const {id} = useParams();
    const dishData = useDishData(id);
    const [showIndex, setShowIndex] = useState(0)

    if(dishData === null) return <Shimmer/>

    const {name, avgRating, totalRatingsString, locality, cuisines, areaName} = dishData?.data?.cards[0]?.card?.card?.info;
    const catCards = dishData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((cards) => cards?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    console.log(catCards)
    return(
        <div> 
            <RestaurantPageHead name = {name} rating = {avgRating} ratingCount = {totalRatingsString} area = {locality + ", " + areaName} cuisines = {cuisines.join(", ")}/>
            
            <div>
            {
                catCards?.map((catCards, index) => {
                    return(
                        // setShowIndex is kind of acting like a CLOSURE function
                        <DishListAccordian key = {catCards?.card?.card?.title} setShowIndex = {() => {index === showIndex ? setShowIndex(null) : setShowIndex(index)}} open = {index === showIndex ? true : false} title = {catCards?.card?.card?.title} itemCards = {catCards?.card?.card?.itemCards}/>
                    )
                })
            } 
            </div>
        </div>
    )
}

export default Restaurant;