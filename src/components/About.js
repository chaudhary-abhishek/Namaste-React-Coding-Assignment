import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";
import React from "react";

class About extends React.Component{
    constructor(){
        super();
        //console.log("Parent constructor");
    }
     
    componentDidMount(){
        //console.log("Parent component did mount");
    }
    render(){
        //console.log("Parent render");
        return(
            <div>
                <h1>This is a About Page</h1>
                <h2>I am learning react from Namaste react web series</h2>
                <UserContext.Consumer>
                 {({loggedInUser})=><h2 className="font-bold">{loggedInUser}</h2>}
                </UserContext.Consumer>
                <UserClass name={"First"} location={"universe"}/>
            </div>
        )
    }
}


export default About;