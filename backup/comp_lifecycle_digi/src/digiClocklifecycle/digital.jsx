import React, { Component } from 'react'

class Digital extends Component {
  constructor(props){
    super(props)
    this.state={
      ct:new Date().toLocaleTimeString()
    }
  }
  componentDidMount(){
    setInterval(()=>{
      this.setState({
          ct:new Date().toLocaleTimeString()
      })
  },1000)
  }
  render() {
    
    return(
      <div>
        <h1>Digital Clock</h1>
        <h1>{this.state.ct}</h1>
      </div>
    )
  }

}

export default Digital
