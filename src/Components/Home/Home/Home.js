import React from 'react';
import Carousels from '../Carousel/Carousels';
import ClientsList from '../ClientsList/ClientsList';
import ContactUs from '../ContactUs/ContactUs/ContactUs';
import Feedback from '../Feedback/Feedback';
import Header from '../Header/Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header/>
            <ClientsList/>
            <Services/>
            <Carousels/>
            <Feedback/>
            <ContactUs/>
        </div>
    );
};

export default Home;