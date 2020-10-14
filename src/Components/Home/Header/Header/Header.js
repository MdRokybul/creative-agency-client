import React from 'react';
import Banner from '../Banner/Banner';
import Navbars from '../Navbars/Navbars';
import './Header.css'

const Header = () => {
    return (
        <section className="header-container">
           <Navbars></Navbars>
           <Banner></Banner>
        </section>
    );
};

export default Header;