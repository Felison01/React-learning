import React,{useState} from 'react'
const Login=()=> {
  let [user,setUser]=useState({email:"",password:""})

  let emailHandler=(event)=>{
    setUser({...user,email:event.target.value})
  }
  let passwordHandler=(event)=>{
    setUser({...user,password:event.target.value})
  }
  let submitHandler=(event)=>{
    event.preventDefault()
    console.log(user)
  }

  return (
    <div>
      <h3>Login component</h3>
      <pre>{JSON.stringify(user)}</pre>
      <hr />
      <form onSubmit={submitHandler}>
        <label>Email</label>
        <input type="email" onChange={emailHandler}/>
        <br />
        <label>Password</label>
        <input type="password" onChange={passwordHandler}/>
        <br />

        <input type="submit" value="Login" />
      </form>
      
    </div>
  )
}

export default Login

