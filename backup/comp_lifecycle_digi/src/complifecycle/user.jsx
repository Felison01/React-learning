import React from 'react'
import Axios from 'axios'
class User extends React.Component {

  constructor(props){
    super(props)
    this.state={
      users:[]
    }
  }

  componentDidMount(){
    Axios.get('https://jsonplaceholder.typicode.com/users')
    .then((resp)=>{
      this.setState({users:resp.data})
    })
    .catch()
  }



  render(){
    return(
      <div>
      <pre>{JSON.stringify(this.state.users)}</pre>
      {
        this.state.users.length>0? <>
        <table className='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>PHONE</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.users.map((user)=>{
                return <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                  </tr>
                
              })
            }
          </tbody>
        </table>
        </>:<>
        <h3>NO DATA</h3>
        </>
      }


      </div>
    )
  }
}

export default User
