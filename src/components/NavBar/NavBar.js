import React from 'react';
import './navbar.scss'
import LogoSubtitle from '../../assets/images/logo_sub2.png'



const NavBar = () => {
  return (
    <div className='navBar' >
      <div className='navBarButton'>
        <img className='subLogo' src={LogoSubtitle} alt='logo-sub' />
      </div>
    </div>
  )
}

export default NavBar;
