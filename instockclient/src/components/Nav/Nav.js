import React from 'react'
import './Nav.scss'
import logo from '../../Assets/Logo/InStock-Logo_1x.png'

function Nav() {
  return (
    <section className='nav'>
        <div className='nav__image'>
            <img className='nav__logo' src={logo} alt='InStock Logo'/>
        </div>
        <ul className='nav__list'>
            <li className='nav__item nav__item--active'>Warehouses</li>
            <li className='nav__item'>Inventory</li>
        </ul>
    </section>
  )
}

export default Nav