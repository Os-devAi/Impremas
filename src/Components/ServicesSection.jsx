import React, { useState } from 'react';
import './ServicesSection.css';

const ServicesSection = () => {
    const [activeCategory, setActiveCategory] = useState('todos');

    const servicesData = {
        documentos: {
            title: "Documentos Comerciales",
            icon: "📄",
            items: [
                "Proformas personalizadas",
                "Recibos oficiales",
                "Tickets de venta",
                "Cupones promocionales",
                "Esquelas y recordatorios"
            ]
        },
        publicidad: {
            title: "Material Publicitario",
            icon: "📢",
            items: [
                "Afiches de alta calidad",
                "Bifoliares creativos",
                "Trifoliares informativos",
                "Programas de eventos",
                "Folletos promocionales"
            ]
        },
        sellos: {
            title: "Sellos Personalizados",
            icon: "🖋️",
            items: [
                "Sellos de hule tradicionales",
                "Sellos de madera",
                "Sellos metálicos",
                "Sellos automáticos",
                "Sellos de bolsillo",
                "Fechadores profesionales"
            ]
        },
        certificados: {
            title: "Certificados y Más",
            icon: "🏆",
            items: [
                "Títulos académicos",
                "Diplomas MINEDUC",
                "Hojas membretadas",
                "Tarjetas sociales",
                "Empastados pasta dura"
            ]
        },
        tarjetas: {
            title: "Tarjetas y Presentación",
            icon: "💼",
            items: [
                "Tarjetas de presentación",
                "Tarjetas sociales elegantes",
                "Invitaciones especiales",
                "Credenciales corporativas"
            ]
        },
        impresiones: {
            title: "Servicios de Impresión",
            icon: "🎨",
            items: [
                "Impresiones 1 color",
                "Impresiones full color",
                "Impresiones digitales",
                "Gran formato",
                "Materiales especiales"
            ]
        }
    };

    const allServices = Object.values(servicesData).flatMap(category => category.items);

    const filteredServices = activeCategory === 'todos'
        ? allServices
        : servicesData[activeCategory]?.items || [];

    // Función para abrir WhatsApp
    const openWhatsApp = (serviceType = 'general') => {
        const phoneNumber = "50258734648"; // Reemplaza con tu número de WhatsApp
        let message = "¡Hola! Me interesa conocer más sobre sus servicios de impresión.";

        // Mensajes personalizados según el tipo de servicio
        if (serviceType !== 'general') {
            const category = servicesData[activeCategory]?.title || 'servicios';
            message = `¡Hola! Me interesa obtener información sobre ${category}. ¿Podrían ayudarme con una cotización?`;
        }

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');
    };

    // Función para abrir WhatsApp desde un servicio específico
    const openWhatsAppForService = (serviceName) => {
        const phoneNumber = "50258734648"; // Reemplaza con tu número de WhatsApp
        const message = `¡Hola! Estoy interesado/a en el servicio de: ${serviceName}. ¿Podrían proporcionarme más información y cotización?`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');
    };

    return (
        <section id="servicios" className="services-section">
            <div className="services-container">
                {/* Header de la sección */}
                <div className="services-header">
                    <h2 className="services-title">
                        Nuestros <span className="services-highlight">Servicios</span>
                    </h2>
                    <p className="services-subtitle">
                        Ofrecemos soluciones gráficas completas para todas tus necesidades de impresión
                    </p>
                </div>

                {/* Filtros por categoría */}
                <div className="categories-filter">
                    <button
                        className={`filter-btn ${activeCategory === 'todos' ? 'active' : ''}`}
                        onClick={() => setActiveCategory('todos')}
                    >
                        Todos los Servicios
                    </button>
                    {Object.entries(servicesData).map(([key, category]) => (
                        <button
                            key={key}
                            className={`filter-btn ${activeCategory === key ? 'active' : ''}`}
                            onClick={() => setActiveCategory(key)}
                        >
                            <span className="category-icon">{category.icon}</span>
                            {category.title}
                        </button>
                    ))}
                </div>

                {/* Grid de servicios */}
                <div className="services-grid">
                    {activeCategory === 'todos' ? (
                        // Vista de todas las categorías
                        Object.entries(servicesData).map(([key, category]) => (
                            <div key={key} className="service-category-card">
                                <div className="category-header">
                                    <span className="category-icon-large">{category.icon}</span>
                                    <h3 className="category-title">{category.title}</h3>
                                </div>
                                <ul className="service-list">
                                    {category.items.map((service, index) => (
                                        <li
                                            key={index}
                                            className="service-item"
                                            onClick={() => openWhatsAppForService(service)}
                                        >
                                            <span className="service-bullet">•</span>
                                            {service}
                                            <span className="whatsapp-icon" title="Consultar por WhatsApp">
                                                💬
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))
                    ) : (
                        // Vista detallada de una categoría específica
                        <div className="category-detail-view">
                            <div className="category-detail-header">
                                <span className="detail-icon">{servicesData[activeCategory].icon}</span>
                                <h3 className="detail-title">{servicesData[activeCategory].title}</h3>
                            </div>
                            <div className="detail-services-grid">
                                {servicesData[activeCategory].items.map((service, index) => (
                                    <div
                                        key={index}
                                        className="detail-service-card"
                                        onClick={() => openWhatsAppForService(service)}
                                    >
                                        <div className="service-number">{String(index + 1).padStart(2, '0')}</div>
                                        <p className="service-text">{service}</p>
                                        <div className="service-whatsapp">
                                            <span className="whatsapp-badge">Consultar</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Call to Action */}
                <div className="services-cta">
                    <div className="cta-content">
                        <h3 className="cta-title">¿No encuentras lo que buscas?</h3>
                        <p className="cta-description">
                            Contáctanos para cotizaciones personalizadas y soluciones a medida
                        </p>
                        <div className="cta-buttons">
                            {/* <button 
                                className="cta-btn primary" 
                                onClick={() => openWhatsApp('cotizacion')}
                            >
                                📋 Solicitar Cotización
                            </button> */}
                            <button
                                className="cta-btn secondary"
                                onClick={() => openWhatsApp('contacto')}
                            >
                                💬 Contactar por WhatsApp
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;