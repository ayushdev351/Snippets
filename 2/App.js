import React from "react";
import ReactDOM from "react-dom/client";

import FunctionalComp from "./FunctionalComp"
import ClassComp from "./ClassComp";

const element = (
    <div>
        {/* <FunctionalComp/> */}
        <ClassComp/>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(element)