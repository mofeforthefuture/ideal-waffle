import React from 'react'
import { Input } from '../../components'
import './index.css'

function Login() {
    return (
        <div className='body' >
            <div className='image__background'>

            </div>
            <div className='page__background'>
                <div className='form__container'>
                    <Input placeholder={'firstname'} />
                </div>

            </div>
            
        </div>
    )
}

export default Login
