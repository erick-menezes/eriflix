import React from 'react';
import { Link, useLocation } from 'react-router-dom'; 

import { BsPlusCircle } from 'react-icons/bs';

import Logo from '../../assets/img/logo.png';

import './menu.scss';

function Menu() {
    const location = useLocation();

    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="EriFlix logo" />
            </Link>

            {
                location.pathname === '/' 
                ?  <Link to="/cadastro/FormOptions">
                    <BsPlusCircle size="2.3rem" className="add-icon" />
                   </Link>
                : null
            }
           
        </nav>
    );
}

export default Menu;