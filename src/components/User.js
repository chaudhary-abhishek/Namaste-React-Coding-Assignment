import { useState } from "react";

const User = ({name, location})=>{
   const [followers] = useState(0);
   const [followers2] = useState(2);
    return(
        <div className="user-card">
            <h3>Name : {name}</h3>
            <h3>Location : {location}</h3>
            <h4>Followers : {followers}</h4>
            <h4>Followers2 : {followers2}</h4>
        </div>
    )
}

export default User;