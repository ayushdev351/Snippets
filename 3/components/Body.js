import { useState, useEffect } from "react";

import ResCard from "./ResCard";
import { resListData } from "../utils/data";
import { RES_API_URL } from "../utils/constants";

const Body = () => {

    //Restraunt List
    const [resList, setResList] = useState(resListData);

    //Filters
    const [ratingFilterActive, setRatingFilterActive] = useState(0);
    const [costFilterActive, setCostFilterActive] = useState(0);
    const [deliveryTimeFilterActive, setDeliveryTimeFilterActive] = useState(0);

    const RatingFilter = () => {
        if(!ratingFilterActive)
        {
            const newResList = resList.filter((resData) => resData.data.avgRating > 4);
            setResList(newResList);
            setRatingFilterActive(1);
        }
    }

    const CostFilter = () => {
        if(!costFilterActive)
        {
            const newResList = resList.filter((resData) => resData.data.costForTwo < 20000);
            setResList(newResList);
            setCostFilterActive(1);
        }
    }

    const DeliveryTimeFilter = () => {
        if(!deliveryTimeFilterActive)
        {
            const newResList = resList.filter((resData) => resData.data.deliveryTime < 20);
            setResList(newResList);
            setDeliveryTimeFilterActive(1);
        }
    }

    const ClearFilter = () => {
        setResList(resListData);
        setRatingFilterActive(0);
        setCostFilterActive(0);
        setDeliveryTimeFilterActive(0);
    }

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async() => {
        const data = await fetch(RES_API_URL);
        const jsonData = await data.json();
        setResList(jsonData.data.cards[2].data.data.cards);
    }

    return(
        <div className="body">
            <div className="filters">
                <button className="clear-filter" onClick={ClearFilter}>Clear Filters</button>
                <button className={ratingFilterActive ? "filter-active" : ""} onClick={RatingFilter}>Rating &gt; 4</button>
                <button className={costFilterActive ? "filter-active" : ""} onClick={CostFilter}>Cost &lt; Rs 200</button>
                <button className={deliveryTimeFilterActive ? "filter-active" : ""} onClick={DeliveryTimeFilter}>Delivery Time &lt; 20 Mins</button>
            </div>
            <div className="resCards">
                {
                    resList.map((resData) => <ResCard key={resData.data.id} resData = {resData}/>)
                }
            </div>
        </div>
    )
}

export default Body;