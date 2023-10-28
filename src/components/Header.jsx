import React from 'react';
// logo
import Logo from '../Assets/logo.png';

const Header = () => {
  return (
   <header className='py-7'>
        <div className='container'>
        {/* Logo */}
            <img className='max-w-[30px]' src={Logo} alt="Logo" />
        </div>
   </header>
  )
}

export default Header;
