import React, { useRef } from 'react';
import ImpremasHero from '../Components/ImpremasHero';
import ServicesSection from '../Components/ServicesSection';
import ProductGallery from '../Components/ProductGallery';
import ContactInfo from '../Components/ContactInfo';

const Home = () => {
    const servicesRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToServices = () => {
        servicesRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    const scrollToContact = () => {
        contactRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    return (
        <>
            <ImpremasHero 
                onViewServices={scrollToServices}
                onViewContact={scrollToContact}
            />
            <div ref={servicesRef}>
                <ServicesSection />
                <ProductGallery />
            </div>
            <div ref={contactRef}>
                <ContactInfo />
            </div>
            <br />
            <div className='footer'>
                Impremas 2025 by <a
                    href="https://os-portfolio-plum.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Nexus.Dev
                </a>
            </div>
            <br />
        </>
    );
};

export default Home;