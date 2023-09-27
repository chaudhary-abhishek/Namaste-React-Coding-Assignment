import React from "react";
import ReactDOM from "react-dom/client";

const HeaderComponent = ()=>(
    <div style={{display:"flex",justifyContent:"space-evenly"}}> 
    <p>Logo</p>
    <input type="text" placeholder="search"/>
    <p>use-icon</p>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(HeaderComponent())
