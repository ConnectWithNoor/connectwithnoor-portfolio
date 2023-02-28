import { NavList } from '@/app/{utils}/constants';
import Image from 'next/image';

import './navbar.scss';
import NavbarResponsive from './navbarResponsive';

function Navbar() {
  return (
    <nav className='app__navbar'>
      {/* logo */}
      <div className='app__navbar-logo'>
        <div className='app__navbar-logo-container'>
          <Image src='/logo.png' alt='logo' fill />
        </div>
      </div>
      {/* nav */}
      <ul className='app__navbar-links'>
        {NavList.map((item, index) => (
          <li key={item + index} className='app__flex p-text'>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <NavbarResponsive />
    </nav>
  );
}

export default Navbar;
