import React from "react";
class CompB extends React.Component{
  render(){
    return <React.Fragment>
      <pre>{JSON.stringify(this.props)}</pre>
      <h1>Component B</h1>
      <h2>Name:{this.props.ename}</h2>
      <h2>ID:{this.props.id}</h2>
      <h2>Message:{this.props.msg}</h2>
    </React.Fragment>
  }
}
export default CompB