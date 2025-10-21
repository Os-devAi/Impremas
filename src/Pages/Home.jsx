import React, { useRef } from 'react';
import ImpremasHero from '../Components/ImpremasHero';
import ServicesSection from '../Components/ServicesSection';

const Home = () => {
    const servicesRef = useRef(null);

    const scrollToServices = () => {
        servicesRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    return (
        <>
            <ImpremasHero onViewServices={scrollToServices} />
            <div ref={servicesRef}>
                <ServicesSection />
            </div>
        </>
    );
};

export default Home;