import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Shimmer from "./Shimmer";
import ResCard from "./ResCard";
import { RES_API_URL } from "../utils/constants";

const Body = () => {

    //Restraunt List
    const [resList, setResList] = useState([]);
    const [filterList, setFilterList] = useState([]);

    //Filters
    const [ratingFilterActive, setRatingFilterActive] = useState(0);
    const [costFilterActive, setCostFilterActive] = useState(0);
    const [deliveryTimeFilterActive, setDeliveryTimeFilterActive] = useState(0);

    //SearchFilter
    const [searchText, setSearchText] = useState("");

    // Not working good when user deletes the text
    const searchInputHandler = (e) => {
        setSearchText(e.target.value);
        ClearFilter();
        const newResList = resList.filter((resData) => resData.data.name.toUpperCase().includes(searchText.toUpperCase()));
        setFilterList(newResList);
    }

    const RatingFilter = () => {
        if(!ratingFilterActive)
        {
            const newResList = filterList.filter((resData) => resData.data.avgRating > 4);
            setFilterList(newResList);
            setRatingFilterActive(1);
        }
    }

    const CostFilter = () => {
        if(!costFilterActive)
        {
            const newResList = filterList.filter((resData) => resData.data.costForTwo < 20000);
            setFilterList(newResList);
            setCostFilterActive(1);
        }
    }

    const DeliveryTimeFilter = () => {
        if(!deliveryTimeFilterActive)
        {
            const newResList = filterList.filter((resData) => resData.data.deliveryTime < 20);
            setFilterList(newResList);
            setDeliveryTimeFilterActive(1);
        }
    }

    const ClearFilter = () => {
        setFilterList(resList);
        setRatingFilterActive(0);
        setCostFilterActive(0);
        setDeliveryTimeFilterActive(0);
    }

    // fetching data

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async() => {
        const data = await fetch(RES_API_URL);
        const jsonData = await data.json();
        setResList(jsonData.data.cards[2].data.data.cards);
        setFilterList(jsonData.data.cards[2].data.data.cards);
    }

    return(
        <div className="body">
            <div className="filters">
                <input className="search-filter" placeholder="Search for Restraunts near you" onChange={searchInputHandler} value={searchText}/>
                <div className="filter-btns">
                    <button className="clear-filter" onClick={ClearFilter}>Clear Filters</button>
                    <button className={ratingFilterActive ? "filter-active" : ""} onClick={RatingFilter}>Rating &gt; 4</button>
                    <button className={costFilterActive ? "filter-active" : ""} onClick={CostFilter}>Cost &lt; Rs 200</button>
                    <button className={deliveryTimeFilterActive ? "filter-active" : ""} onClick={DeliveryTimeFilter}>Delivery Time &lt; 20 Mins</button>
                </div>
            </div>
            {
                resList.length ? 
                (
                    <div className="resCards">
                        {
                            filterList.map((resData) => {
                                return(
                                    <Link style={{"text-decoration" : "none", "color" : "black"}} key={resData.data.id} to = {"restaurant/" + resData.data.id} >
                                        <ResCard resData = {resData}/>
                                    </Link>
                                )
                            })
                        }
                    </div>
                )
                :
                (
                    <Shimmer/>
                )
            }
        </div>
    )
}

export default Body;