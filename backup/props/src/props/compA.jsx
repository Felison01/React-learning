import React from "react";
import CompB from "./compB";
class CompA extends React.Component{
  render(){
    let ename = "rahul"

    return <div>
      <h1>Component A</h1>
      <pre>{ename}</pre>
      <hr />
      <CompB name={ename} id={101} msg={"good morning"}/>


    </div>
  }

}
export default CompA