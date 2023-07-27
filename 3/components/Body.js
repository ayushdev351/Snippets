import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Shimmer from "./Shimmer";
import ResCard, {ResCardTop} from "./ResCard";
import { RES_API_URL } from "../utils/constants";

const Body = () => {

    //Restraunt List
    const [resList, setResList] = useState([]);
    const [filterList, setFilterList] = useState([]);

    //Filters
    const [ratingFilterActive, setRatingFilterActive] = useState(0);
    const [costFilterActive, setCostFilterActive] = useState(0)

    //SearchFilter
    const [searchText, setSearchText] = useState("");

    // Not working good when user deletes the text
    const searchInputHandler = (e) => {
        setSearchText(e.target.value);
        ClearFilter();
        const newResList = resList.filter((resData) => resData.info.name.toUpperCase().includes(searchText.toUpperCase()));
        setFilterList(newResList);
    }

    const RatingFilter = () => {
        if(!ratingFilterActive)
        {
            const newResList = filterList.filter((resData) => resData.info.avgRating > 4);
            setFilterList(newResList);
            setRatingFilterActive(1);
        }
    }

    const CostFilter = () => {
        if(!costFilterActive)
        {
            const newResList = filterList.filter((resData) => parseInt(resData.info.costForTwo.substr(1, 3)) < 400);
            setFilterList(newResList);
            setCostFilterActive(1);
        }
    }

    const ClearFilter = () => {
        setFilterList(resList);
        setRatingFilterActive(0);
        setCostFilterActive(0);
    }

    // fetching data

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async() => {
        const data = await fetch(RES_API_URL);
        const jsonData = await data.json();
        console.log(jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setResList(jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterList(jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const TopResCard = ResCardTop(ResCard);

    return(
        <div className="body">
            <div className="filters">
                <input className="search-filter" placeholder="Search for Restraunts near you" onChange={searchInputHandler} value={searchText}/>
                <div className="filter-btns">
                    <button className="clear-filter" onClick={ClearFilter}>Clear Filters</button>
                    <button className={ratingFilterActive ? "filter-active" : ""} onClick={RatingFilter}>Rating &gt; 4</button>
                    <button className={costFilterActive ? "filter-active" : ""} onClick={CostFilter}>Cost &lt; Rs 400</button>
                </div>
            </div>
            {
                resList?.length ? 
                (
                    <div className="resCards">
                        {
                            filterList.map((resData) => {
                                return(
                                    <Link style={{"textDecoration" : "none", "color" : "black"}} key={resData.info.id} to = {"restaurant/" + resData.info.id} >
                                        { resData.info.avgRating < 4.3 ?
                                            <ResCard resData = {resData}/> :
                                            <TopResCard resData = {resData}/>
                                        }
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