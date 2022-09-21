import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <h1>This is Header</h1>
            <nav className='menu'>
                <a href="/home">home</a>
                <a href="/about">about</a>
                <a href="/contact">contact</a>
            </nav>
        </div>
    );
};

export default Header;