import { useState, useEffect } from "react";
import { RES_INFO_API } from "../utils/constants";

const useDishData = (id) => {
    const [resData, setDishData]  = useState(null)
    // console.log(11)
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async() => {
        const data = await fetch(RES_INFO_API + id);
        const json = await data.json();

        console.log(json)
        setDishData(json);
    }

    return resData
}

export default useDishData;