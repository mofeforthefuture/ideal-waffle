import React from 'react'
import { AiOutlineHome,AiOutlineLogout } from "react-icons/ai";
import {useDispatch} from 'react-redux'
import { logout} from '../reducers/user.reducer'

import './index.css'
import { isLoading } from './Loader';

function Sidebar() {

  const dispatch = useDispatch()

    return (
            <div className='sidebar'>
            <div className='sidebar__header'>
                <p className="sidebar__header__title">Sweet Dreams</p>
            </div>
              <div className='sidebar__item' onClick={() => isLoading(true)}>
                <p className='sidebar__item__text'>Dashboard </p>
                <AiOutlineHome color={'#fff'} className='sidebar__item__icon' />
              </div>
                
            <button className='sidebar__button'  onClick={() => {dispatch(logout())}}>
                <p className='sidebar__item__text'>Logout</p>
                 <AiOutlineLogout color={'#fff'} />
                 </button>


        </div>
    )
}

export default Sidebar
