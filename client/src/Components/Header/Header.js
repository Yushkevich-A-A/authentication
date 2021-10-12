import React from 'react';
import './Header.css';

function Header(props) {
    return (
        <div className='header'>
            <h2 className='header-h2'>Neto Social</h2>
            {props.children}
        </div>
    )
}

export default Header;

