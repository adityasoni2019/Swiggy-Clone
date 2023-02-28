import React from "react";
// Note, how we're using React.component 
// we don't need to import react everywhere in our file. Just do it when it's needed

import UserContext from "../utils/UserContext";

class ProfileClass extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      // this would be called first
      userInfo: {
        name: "Dummy name",
        location: "dummy location",
      }
    };

    console.log("Child  - constructor called" + this.props.name);
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/adityasoni2019");
    const json = await data.json();
    // console.log(json);
    this.setState({
      userInfo: json
    });
    console.log("Child - component did mount" + this.props.name);
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.count !== prevState.count){
      // code
      // this is how to maintain useEffect with dependencies in class based components.
    }
    if(this.state.count2 !== prevState.count2){
      // code
    }
    console.log("component did update")
  }


  componentWillUnmount() {
    console.log("component will unmount");
  }

  render() {
    console.log("Child - render" + this.props.name);
    return (
      <div className="border border-red-900">
        <h1>Hey this is the class based profile component.</h1>

        <UserContext.Consumer>
          {/* .consumer is basically to use the useContext in class bsed components. */}
          {({user}) =><h1 className="font-bold p-3">This is from the context -{">"} {user.name} - {user.email}</h1>}

        </UserContext.Consumer>
        
        <h1>Name: This is from the API (and the image as well) -{">"}  {this.state.userInfo.name}</h1>
        {/* <h1>Location: {this.props.userInfo.location}</h1> */}
        <img src={this.state.userInfo.avatar_url} />
      </div>
    )
  }
}

export default ProfileClass;