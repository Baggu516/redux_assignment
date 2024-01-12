import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { nameFunc,emailFunc } from '../redux/actions/userActions.js'
const UserComponent = () => {
    const name=useSelector(state=>state.name)
    const email=useSelector(state=>state.email)
    // const email=useSelector(state=>state.email)
    // console.log(User,"name")
    // let =User
    const dispatch=useDispatch()
  return (
    <div>
        <h1>User Information</h1>
        <label htmlFor="username">Name:</label>
        <input type="text" id="username" name="username"  value={name} onChange={(e)=>dispatch(nameFunc(e.target.value))}/>
        <br/>
        <label htmlFor="email">Email :</label>
        <input type="email" id="email" name="email" value={email} onChange={(e)=>dispatch(emailFunc(e.target.value))}/>
        <br/>
        <p style={{color:"blue"}}>
            Current values in the store
        </p>
        <p>
           <b> Name - </b>{name}
        </p>
        <p>
            <b>Email - </b>{email}
        </p>
       
    </div>
  )
}

export default UserComponent