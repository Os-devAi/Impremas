import React, { useState, useEffect } from 'react';
import './ImpremasHero.css';

const ImpremasHero = ({ onViewServices }) => {
    const [currentService, setCurrentService] = useState(0);

    const services = [
        "Proformas y Recibos",
        "Afiches y Folletos",
        "Tarjetas de Presentación",
        "Sellos Personalizados",
        "Títulos y Diplomas",
        "Impresiones Full Color"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentService((prev) => (prev + 1) % services.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [services.length]);

    const handleContactClick = () => {
        // Aquí puedes agregar lógica para abrir un formulario de contacto
        // o redirigir a una página de contacto
        console.log("Abrir formulario de contacto");
        alert("Próximamente: Formulario de contacto");
    };

    // Función para abrir WhatsApp
    const openWhatsApp = (serviceType = 'general') => {
        const phoneNumber = "50258734648"; // Reemplaza con tu número de WhatsApp
        let message = "¡Hola! Me interesa conocer más sobre sus servicios de impresión.";

        // Mensajes personalizados según el tipo de servicio

        message = `¡Hola! Me interesa obtener información sobre algunos productos. ¿Podrían ayudarme con una cotización?`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');
    };

    return (
        <section className="hero">
            <div className="hero-overlay"></div>

            <div className="hero-content">
                <div className="logo-container">
                    <img className='imagenLogo' src="https://ik.imagekit.io/nhu6ngxhk/NexusBusiness/impremas_logo.jpg?updatedAt=1761078512803" alt="logo impremas" />
                    {/* <h1 className="logo">IMPR<span className="logo-accent">EMAS</span></h1> */}
                    <p className="tagline">Soluciones Gráficas Integrales</p>
                </div>

                <div className="main-content">
                    <div className="text-content">
                        <h2 className="hero-title">
                            Impresión de <span className="highlight">calidad</span> para tu negocio
                        </h2>
                        <p className="hero-description">
                            En Impremas transformamos tus ideas en materiales impresos de alta calidad.
                            Desde documentos simples hasta proyectos gráficos complejos, tenemos la solución perfecta para ti.
                        </p>

                        <div className="rotating-services">
                            <span className="service-label">Especialistas en:</span>
                            <span className="service-text">{services[currentService]}</span>
                        </div>

                        <div className="cta-buttons">
                            <button
                                className="btn btn-primary"
                                onClick={openWhatsApp}
                            >
                                Solicitar Cotización
                            </button>
                            <button
                                className="btn btn-secondary"
                                onClick={onViewServices}
                            >
                                Ver Servicios
                            </button>
                        </div>
                    </div>

                    <div className="visual-content">
                        <div className="service-grid">
                            <div className="service-category">
                                <h3>Documentos</h3>
                                <ul>
                                    <li>Proformas</li>
                                    <li>Recibos</li>
                                    <li>Tickets</li>
                                    <li>Cupones</li>
                                </ul>
                            </div>

                            <div className="service-category">
                                <h3>Publicidad</h3>
                                <ul>
                                    <li>Afiches</li>
                                    <li>Bifoliares</li>
                                    <li>Trifoliares</li>
                                    <li>Folletos</li>
                                </ul>
                            </div>

                            <div className="service-category">
                                <h3>Especializados</h3>
                                <ul>
                                    <li>Sellos</li>
                                    <li>Títulos MINEDUC</li>
                                    <li>Tarjetas Sociales</li>
                                    <li>Empastados</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="scroll-indicator">
                <span>Desliza para descubrir más</span>
                <div className="arrow"></div>
            </div>
        </section>
    );
};

export default ImpremasHero;