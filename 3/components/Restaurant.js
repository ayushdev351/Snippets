import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantPageHead from "./RestaurantPageHead";
import DishListAccordian from "./DishListAccordian";

import useDishData from "../customHooks/useDishData";

const Restaurant = () => {
    const {id} = useParams();
    const dishData = useDishData(id);

    if(dishData === null) return <Shimmer/>

    const {name, avgRating, totalRatingsString, locality, cuisines, areaName} = dishData?.data?.cards[0]?.card?.card?.info;
    const catCards = dishData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((cards) => cards?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    console.log(catCards)
    return(
        <div> 
            <RestaurantPageHead name = {name} rating = {avgRating} ratingCount = {totalRatingsString} area = {locality + ", " + areaName} cuisines = {cuisines.join(", ")}/>
            
            <div>
            {
                catCards?.map((catCards) => {
                    console.log(catCards.card.card.title)
                    console.log(catCards?.card?.card?.itemCards)
                    return(
                        <DishListAccordian key = {catCards?.card?.card?.title} title = {catCards?.card?.card?.title} itemCards = {catCards?.card?.card?.itemCards}/>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Restaurant;