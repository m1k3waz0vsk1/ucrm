import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/authContext'
import Logo from '../img/logo.png'

export const Navbar = () => {

  const { currentUser, logout } = useContext(AuthContext);
  return (
    <div class="navbar">
      <div className='container'>
        <div className='logo'>
          <h2>IQ Composite LLC</h2>
        </div>
        <div className='links'>
            <Link className='link' to="/clients">
              <h6>КЛІЄНТИ</h6>
            </Link>
            <Link className='link' to="/wh">
              <h6>СКЛАД</h6>
            </Link>
            <Link className='link' to="/factory">
              <h6>ВИРОБНИЦТВО</h6>
            </Link>
            <span>{currentUser?.name}</span>
            {currentUser? <span onClick={logout}>Вийти</span> : <Link className='link' to="/login">Увійти</Link>}
        </div>
      </div>
    </div>
  )
}

export default Navbar