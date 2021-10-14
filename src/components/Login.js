import React from 'react'
import {useDispatch} from 'react-redux'
import {login, logout} from '../reducers/user.reducer'
import './index.css'

function Login() {
    const dispatch = useDispatch()
    return (
        <div style={{ backgroundColor:'#000'}} >
<h1>dispatch</h1>
            <button onClick={() => {dispatch(login({name:'Kolawole Ojo',age:22,email:'kojo@atbtechsoft.com'}))}}>Login</button>
            <button onClick={() => {dispatch(logout())}}>logout</button>
        </div>
    )
}

export default Login
