import React from 'react'
import './Header.scss'
import logo from '../../Assets/Logo/InStock-Logo_1x.png'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <section className='header'>
        <div className='header__image'>
            <NavLink to='/'><img className='header__logo' src={logo} alt='InStock Logo'/></NavLink>
        </div>
        <ul className='header__list'>
            <NavLink to='/' exact className='header__link' activeClassName='header__item--selected'><li className='header__item'>Warehouses</li></NavLink>
            <NavLink to='/inventory' className='header__link' activeClassName='header__item--selected'><li className='header__item'>Inventory</li></NavLink>
        </ul>
    </section>
  )
}

export default Header