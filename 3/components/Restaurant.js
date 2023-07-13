import {useState, useEffect} from "react"
import { useParams } from "react-router-dom";

import { RES_INFO_API } from "../utils/constants";
import Shimmer from "./Shimmer";

const Restaurant = () => {

    const [resData, setResData] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {
        const data = await fetch(RES_INFO_API + id);
        const json = await data.json();
        setResData(json)
        console.log(json)
    }

    if(resData === null) return <Shimmer/>

    const {name, avgRating, totalRatingsString} = resData?.data.cards[0]?.card.card.info;
    const {itemCards} = resData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    
    return(
        <div>
            <h1>{name}</h1>
            <h3>{avgRating}</h3>
            <p>{totalRatingsString}</p>
            {
                itemCards.map((itemCard) => <h4>{itemCard?.card?.info?.name}</h4>)
            }
        </div>
    )
}

export default Restaurant;