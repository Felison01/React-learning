import React from "react";
import Employee from "./employee";
class User extends React.Component{
  user = {
    ename:"Rahul",
    esal:45000,
    email:"Rahul@gmail.com",
    loc:['wayanad','bangalore']
  }
  render(){
    return<>
    <h1>hello</h1>
    <Employee user={this.user} happy={102} eid={101}/>
    </>
  }
}
export default User