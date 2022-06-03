import React from 'react';
import './navbar.css';
const Navbar = () => {
  return (
    <>
      <div className='homenavbar'>
        <div className='home-headname'>LAUNDRY</div>
        <div className='homenav-wrapper'>
          <div className='career'>Pricing</div>
          <div className='pricing'>Career</div>
          <div className='username'>
            <img src='images/profile.png' alt='profile' />
            {sessionStorage.getItem('name')}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
