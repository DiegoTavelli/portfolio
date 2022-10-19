import React from 'react';
import './navbar.scss'
import LogoSubtitle from '../../assets/images/logo_sub2.png'



const refreshPage = () => {
  window.location.reload();
}

const NavBar = () => {
  return (
    <div className='navBar' >
      <div onClick={() => refreshPage()} className='navBarButton'>
        <img className='subLogo' src={LogoSubtitle} alt='logo-sub' />
      </div>
    </div>
  )
}

export default NavBar;
