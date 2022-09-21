import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <h1>Welcome to React Website!!</h1>
            <nav className='menu'>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Blog</a>
            </nav>
        </div>
    );
};

export default Header;