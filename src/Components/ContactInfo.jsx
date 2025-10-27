import React, { useState, useEffect } from 'react';
import './ContactInfo.css';

const ContactInfo = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [nextOpening, setNextOpening] = useState('');

    // Horarios de atención
    const businessHours = {
        weekdays: {
            open: 7.5, // 7:30 AM en decimal
            close: 17, // 5:00 PM en decimal
            days: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes']
        },
        saturday: {
            open: 8,   // 8:00 AM
            close: 12, // 12:00 PM
            days: ['Sábado']
        },
        sunday: {
            open: null, // Cerrado
            close: null,
            days: ['Domingo']
        }
    };

    // Función para verificar si está abierto
    const checkBusinessStatus = () => {
        const now = new Date();
        const currentDay = now.getDay(); // 0: Domingo, 1: Lunes, ..., 6: Sábado
        const currentHour = now.getHours() + (now.getMinutes() / 60);

        let todaySchedule = null;

        // Determinar el horario según el día
        if (currentDay >= 1 && currentDay <= 5) { // Lunes a Viernes
            todaySchedule = businessHours.weekdays;
        } else if (currentDay === 6) { // Sábado
            todaySchedule = businessHours.saturday;
        } else { // Domingo
            todaySchedule = businessHours.sunday;
        }

        // Verificar si está abierto
        if (todaySchedule.open === null) {
            setIsOpen(false);
            calculateNextOpening(currentDay);
            return;
        }

        const isCurrentlyOpen = currentHour >= todaySchedule.open && currentHour < todaySchedule.close;
        setIsOpen(isCurrentlyOpen);

        if (!isCurrentlyOpen) {
            calculateNextOpening(currentDay, currentHour);
        }
    };

    // Función para calcular cuándo abre próximo
    const calculateNextOpening = (currentDay, currentHour = 0) => {
        const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

        let nextDay = currentDay;
        let nextSchedule = null;
        let daysToAdd = 1;

        // Buscar el próximo día de apertura
        while (!nextSchedule || nextSchedule.open === null) {
            nextDay = (currentDay + daysToAdd) % 7;

            if (nextDay >= 1 && nextDay <= 5) {
                nextSchedule = businessHours.weekdays;
            } else if (nextDay === 6) {
                nextSchedule = businessHours.saturday;
            } else {
                nextSchedule = businessHours.sunday;
            }

            daysToAdd++;
        }

        const nextDayName = days[nextDay];
        const openingTime = formatTime(nextSchedule.open);
        setNextOpening(`Abre el ${nextDayName} a las ${openingTime}`);
    };

    // Formatear hora decimal a formato legible
    const formatTime = (decimalTime) => {
        if (decimalTime === null) return 'Cerrado';

        const hours = Math.floor(decimalTime);
        const minutes = Math.round((decimalTime - hours) * 60);
        const period = hours >= 12 ? 'pm' : 'am';
        const displayHours = hours > 12 ? hours - 12 : hours;

        return `${displayHours}:${minutes.toString().padStart(2, '0')}${period}`;
    };

    // Efecto para verificar el estado cada minuto
    useEffect(() => {
        checkBusinessStatus();
        const interval = setInterval(checkBusinessStatus, 60000); // Actualizar cada minuto

        return () => clearInterval(interval);
    }, []);

    // Coordenadas del mapa (reemplaza con las de tu negocio)
    const mapLocation = {
        lat: 15.101671677745616, // Ejemplo: Ciudad de México
        lng: -90.31753462852923,
        address: "10 Avenida, Zona 1 Salamá, Guatemala (esquina opuesta a Salón Club de Leones, 10 Avenida, Ciudad de Guatemala"
    };

    const phoneNumbers = [
        { type: "Principal", number: "+502 5873 4648" },
        { type: "WhatsApp", number: "+502 3973 4804" }
    ];

    const googleMapsSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.6544486101725!2d-90.3175392!3d15.101647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x858a21c38dcdb3e9%3A0x26408fc81357e02a!2simpremas%20Salama!5e1!3m2!1ses-419!2sgt!4v1761589974292!5m2!1ses-419!2sgt" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">`;

    return (
        <section id="contacto" className="contact-info">
            <div className="container">
                <div className="contact-header">
                    <h2 className="section-title">
                        Visítanos en <span className="highlight">Impremas</span>
                    </h2>
                    <p className="section-subtitle">
                        Estamos aquí para atenderte y brindarte el mejor servicio de impresión
                    </p>
                </div>

                <div className="contact-grid">
                    {/* Columna 1: Mapa */}
                    <div className="map-container">
                        <div className="map-wrapper">
                            <iframe
                                src={googleMapsSrc}
                                width="100%"
                                height="100%"
                                style={{ border: 0, borderRadius: '15px' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Ubicación de Impremas"
                            ></iframe>
                        </div>
                        <div className="map-info">
                            <h3>📍 Nuestra Ubicación</h3>
                            <p>{mapLocation.address}</p>
                        </div>
                    </div>

                    {/* Columna 2: Información de Contacto */}
                    <div className="info-container">
                        {/* Estado del negocio */}
                        <div className={`status-card ${isOpen ? 'open' : 'closed'}`}>
                            <div className="status-indicator">
                                <div className={`status-dot ${isOpen ? 'open' : 'closed'}`}></div>
                                <span className="status-text">
                                    {isOpen ? 'Abierto ahora' : 'Cerrado ahora'}
                                </span>
                            </div>
                            {!isOpen && nextOpening && (
                                <p className="next-opening">{nextOpening}</p>
                            )}
                        </div>

                        {/* Horarios */}
                        <div className="hours-card">
                            <h3>🕒 Horarios de Atención</h3>
                            <div className="hours-list">
                                <div className="hour-item">
                                    <span className="days">Lunes a Viernes</span>
                                    <span className="time">
                                        {formatTime(businessHours.weekdays.open)} - {formatTime(businessHours.weekdays.close)}
                                    </span>
                                </div>
                                <div className="hour-item">
                                    <span className="days">Sábado</span>
                                    <span className="time">
                                        {formatTime(businessHours.saturday.open)} - {formatTime(businessHours.saturday.close)}
                                    </span>
                                </div>
                                <div className="hour-item">
                                    <span className="days">Domingo</span>
                                    <span className="time closed">Cerrado</span>
                                </div>
                            </div>
                        </div>

                        {/* Teléfonos */}
                        <div className="phones-card">
                            <h3>📞 Teléfonos de Contacto</h3>
                            <div className="phones-list">
                                {phoneNumbers.map((phone, index) => (
                                    <div key={index} className="phone-item">
                                        <span className="phone-type">{phone.type}:</span>
                                        <a
                                            href={`tel:${phone.number}`}
                                            className="phone-number"
                                        >
                                            {phone.number}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Botones de acción */}
                        <div className="action-buttons">
                            <button
                                className="action-btn primary"
                                onClick={() => window.open(`https://wa.me/${phoneNumbers[1].number.replace(/\s/g, '')}`, '_blank', 'noopener,noreferrer')}
                            >
                                💬 WhatsApp
                            </button>
                            <button
                                className="action-btn secondary"
                                onClick={() => window.open(`https://maps.google.com/?q=${mapLocation.lat},${mapLocation.lng}`, '_blank', 'noopener,noreferrer')}
                            >
                                🗺️ Cómo llegar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactInfo;