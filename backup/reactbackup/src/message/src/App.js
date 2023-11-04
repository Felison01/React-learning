import React from 'react'

import Message from "./Message/message"

class App extends React.Component{

    render(){
        return <div>
            <h1>App Component</h1>
            <hr />
            <Message/>
              <hr />
              <Message/>
        </div>
    }
}

export default App