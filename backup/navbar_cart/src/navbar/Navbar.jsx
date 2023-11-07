import React from "react";
class Navbar extends React.Component{
  state={
    product_Name:'Lenovo ThinkPad',
    price:27000,
    qty:1,
    image:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQa40DLq0Lbn9G-qYePo4QUc7GxM4lp1KMm3M3ncsVARPd7UxE3w6crrW9TMsqeSd7Wxvc7ESQPpgP6udaS4WvtKw3Yu1IR7YvYhY6p_xWQU-a1th-bSnUBy1FKJCoC_AUxp4XmbYOdbg&usqp=CAc'
   }
   decrHandler=()=>{
    this.setState({qty:this.state.qty-1})
   }
   incrHandler=()=>{
    this.setState({qty:this.state.qty+1})
   }


   render(){
    return <div className="contaner">
        <pre>{JSON.stringify(this.state)}</pre>
        <div className="row">
          <div className="col-8">
            <div className="table">
              <thead>
                <th>product name</th>
                <th>image</th>
                <th>price</th>
                <th>Qty</th>
                <th>total price</th>
              </thead>
              <tbody>
                <tr>
                  <td>{this.state.product_Name}</td>
                  <td><img width="100px" src={this.state.image} alt="" /></td>
                  <td>{this.state.price}</td>
                  <td> <i onClick={this.decrHandler} className='fa fa-minus-circle'></i> {this.state.qty} <i onClick={this.incrHandler} className='fa fa-plus-circle'></i></td>
                  <td>{this.state.price*this.state.qty}</td>
                </tr>
              </tbody>
            </div>
          </div>
        </div>
    </div>
   }
}
export default Navbar