import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png' ;
import { NavbarMenu } from './navdata';

const Navbar = () => {
  return (
    <nav className='nav'>

      <div className="navbar-container" >

        {/*logo section*/}

        <div>
          <img src={logo} alt="logo" class="w-[125px] h-[100px]" />
        </div>

        <div className="navbar-secondsection">
          <ul className='list'>

            {NavbarMenu.map((item) => {
              return(
                <li key={item.id}>
                  <a href={item.link} >{item.title}</a>
                </li>
              );
            })}

          </ul>

          <button>ORDER NOW</button>

        </div>

        {/*Mobile hamburger menu section*/}
      </div>

      {/*mobile sidebar section*/}

    </nav>
  )
}

export default Navbar;
