import { useState, useEffect } from "react";
import { RES_API_URL } from "../utils/constants";

const useResData = () => {

    const [resList, setResList] = useState("")
    const [filterList, setFilterList] = useState("")

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async() => {
        const data = await fetch(RES_API_URL);
        const jsonData = await data.json();
        setResList(jsonData.data.cards[2].data.data.cards);
        setFilterList(jsonData.data.cards[2].data.data.cards);
    }

    return {resList, filterList};
}

export default useResData