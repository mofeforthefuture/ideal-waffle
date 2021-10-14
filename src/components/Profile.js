import React from 'react'
import {useSelector} from 'react-redux'
function Profile() {
   const user = useSelector(state => state.user.value)
    return (
        <div>
            <h1>Profile page</h1>
            <p>Name:{user.name}: </p>
            <p>Age:{user.age}</p>
            <p>Email:{user.email}</p>
            {/* <button onClick={() => {dispatch(login({name:'Kolawole Ojo',age:22,email:'kojo@atbtechsoft.com'}))}}>Login</button> */}
        </div>
    )
}

export default Profile
   