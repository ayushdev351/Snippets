import {useState, useEffect} from "react"

const Restaurant = () => {

    const [resData, setResData] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.642996778080303&lng=77.37636666744947&restaurantId=183389&submitAction=ENTER");
        const json = await data.json();
        console.log(json);
    }

    return(
        <div>
            <h1>Hello</h1>
            <h2>Hii</h2>
            <h2>Byy</h2>
            <h2>Hiii again</h2>
        </div>
    )
}

export default Restaurant;