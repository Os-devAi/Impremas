import React, { useRef } from 'react';
import ImpremasHero from '../Components/ImpremasHero';
import ServicesSection from '../Components/ServicesSection';
import ProductGallery from '../Components/ProductGallery';

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
                <ProductGallery />
                <br />
                <div className='footer'>
                    Impremas 2025 by <a
                        href="https://os-portfolio-plum.vercel.app/"
                        target="_blank"
                        rel=""
                    >
                        Nexus.Dev
                    </a>
                </div>
                <br />
            </div>
        </>
    );
};

export default Home;