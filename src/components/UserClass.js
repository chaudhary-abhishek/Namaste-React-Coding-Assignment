import React from "react";

class UserClass extends React.Component{
    constructor(props){
        
        super(props);
        console.log(this.props.name +" child constructor");
     this.state = {
        name : "dummy name",
        location : "dummy location",
     }
    }

    async componentDidMount(){
        console.log(this.props.name+" Child component did mount");
        const data = await fetch("https://api.github.com/users/chaudhary-abhishek");
        const json = await data.json();
        console.log(json);
        this.setState(json);
    }

    componentDidUpdate(){
        console.log("component did update");
    }

    componentWillUnmount(){
        console.log("component will unmount");
    }
    render(){
        console.log(this.props.name+" Child render");
        // const {name, location} = this.props;
        const {name, location, avatar_url} = this.state;
        return(
            <div className="user-card">
            <img src={avatar_url} />    
            <h3>Name : {name}</h3>
            <h3>Location : {location}</h3>
        </div>
        )
    }
}

export default UserClass;