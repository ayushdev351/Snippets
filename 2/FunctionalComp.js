import React from "react";
import { useState, useEffect } from "react";

const FunctionalComp = () => {

    console.log("Component Rendered")

    const [name, setName] = useState("John");
    const [id, setId] = useState("ayushdev351");
    const [input, setInput] = useState("");

    useEffect(() => {
        console.log("Use Effect Called")
        
        const timerId = setInterval(() => {
            console.log("Tick")
        }, 1000)

        return() => {
            console.log("Use Effect Return --> Cleanup Done")
            clearInterval(timerId);
        }
    },[id])

    // [] -> useEffect called only on initial render
    // nothing -> useEffect called on every Render
    // [id] -> useEffect called everytime state of id changes using setId() function

    // const fetchData = async() => {
    //     const data = await fetch("https://api.github.com/users/" + id);
    //     const json = await data.json();
    //     setName(json.name);
    //     console.log("Data Loaded -> " + json.name)
    // }

    const changeHandler = (e) => {
        setInput(e.target.value);
    }

    const clickHandler = () => {
        setId(input);
    }

    return(
        <div>
            <h1>Name : {name}</h1>
            <input onChange={changeHandler} placeholder="Enter github Id"/>
            <button onClick={clickHandler}>Fetch User Name</button>
        </div>
    )
}

export default FunctionalComp;