import React from "react"
import Header from './components/header'
import Footer from "./components/footer"
import Landing from "./components/landing"
import Services  from "./components/service"
const App=()=>{
  return<>
          <h1>
            App component
          </h1>
          <Header/>
          <Footer/>
          <Landing/>
          <Services/>
        </>
}
export default App