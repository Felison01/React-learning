import React from "react";
class Employee extends React.Component{
  employee = [
    {eid:101,ename:"Rahul",esal:45000},
    {eid:102,ename:"Priyaka",esal:55000},
    {eid:103,ename:"Sonia",esal:65000}
  ]


  render(){
    return(
      <>
      <table className="table bg-dark text-white">
        <thead>
          <tr>
          <th>Employee Id</th>
          <th>Name</th>
          <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {
            this.employee.map(function(emp,index){
              return <tr key={index}>
              <td>{emp.eid}</td>
              <td>{emp.ename}</td>
              <td>{emp.esal}</td>
             </tr>
            })
          }
        </tbody>
      </table>
      </>
    )
  }
}
export default Employee