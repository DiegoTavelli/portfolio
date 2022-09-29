import React from 'react';
import './navbar.scss'
import { Link, NavLink } from 'react-router-dom';
// import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faHomeLg, faUserCircle } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
  return (
    <div className='nav-bar' >
      <Link className='logo' to='/'>
        <img className='sub-logo' src={LogoSubtitle} alt='logo-sub' />
      </Link>
      <nav>
        <NavLink
          to='/'
          exact='true'
          activeclassname='active'
        >
          <FontAwesomeIcon
            icon={faHomeLg}
            color='#4d4d4e'
            className='home-link'
          />
        </NavLink>
        <NavLink
          to='/about'
          exact='true'
          activeclassname='active'
        >
          <FontAwesomeIcon
            icon={faUserCircle}
            color='#4d4d4e'
            className='about-link'
          />
        </NavLink>
        <NavLink
          to='/contact'
          exact='true'
          activeclassname='active'
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            color='#4d4d4e'
            className='contact-link'
          />
        </NavLink>
      </nav>
    </div>
  )
}

export default NavBar;
