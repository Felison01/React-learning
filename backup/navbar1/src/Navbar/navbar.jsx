import React from "react";
class Navbar extends React.Component{
  employee = [
    {eid:101,ename:"Rahul",esal:45000},
    {eid:102,ename:"Priyaka",esal:55000},
    {eid:103,ename:"Sonia",esal:65000}
  ]
   



  render(){

    return(
      <>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <table className="table bg-secondary text-white">
              <thead>
                <tr>
                <th>employee Id</th>
                <th>Name</th>
                <th>Salary</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.employee.map((value,index)=>{
                    return <tr key ={index} >
                      <td>{value.eid}</td>
                      <td>{value.ename}</td>
                      <td>{value.esal}</td>
                    </tr>
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>

      </>
    )
  }
}
export default Navbar