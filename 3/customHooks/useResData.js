import { useState, useEffect } from "react";
import { RES_INFO_API } from "../utils/constants";

const useResData = (id) => {
    const [resData, setResData]  = useState(null)
    // console.log(11)
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async() => {
        const data = await fetch(RES_INFO_API + id);
        const json = await data.json();

        setResData(json);
    }

    return resData
}

export default useResData;