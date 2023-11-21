import React, { Component } from 'react'
import Product from './Product/Product'
import { Provider } from 'react-redux'
import {store} from "./redux/store"
export class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
         <h3>app componnent</h3>
         <hr/>
         <Product/>
         </Provider>
      </div>
    )
  }
}

export default App
