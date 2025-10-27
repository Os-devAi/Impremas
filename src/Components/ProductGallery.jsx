import React, { useState } from 'react';
import './ProductGallery.css';

const ProductGallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openWhatsApp = (serviceType = 'general') => {
        const phoneNumber = "50258734648"; // Reemplaza con tu número de WhatsApp
        let message = "¡Hola! Me interesa conocer más sobre sus servicios de impresión.";

        // Mensajes personalizados según el tipo de servicio

        message = `¡Hola! Me interesa obtener información sobre algunos productos. ¿Podrían ayudarme con una cotización?`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');
    };

    const galleryImages = [
        {
            id: 1,
            src: "https://ik.imagekit.io/nhu6ngxhk/ImagenesImpremas/renocimientos%20en%20madera.png?updatedAt=1761584255851",
            title: "Reconocimientos en Madera",
            category: "Trofeos",
            description: "Elegantes placas y reconocimientos grabados en madera de alta calidad para eventos y logros"
        },
        {
            id: 5,
            src: "https://ik.imagekit.io/nhu6ngxhk/ImagenesImpremas/sellos.png",
            title: "Sellos Automáticos",
            category: "Oficina",
            description: "Sellos profesionales automáticos con tinta incorporada para uso eficiente"
        },
        {
            id: 2,
            src: "https://ik.imagekit.io/nhu6ngxhk/ImagenesImpremas/tarjeta%20de%20invitacion.png?updatedAt=1761584068035",
            title: "Tarjetas de Invitación",
            category: "Social",
            description: "Diseños exclusivos para bodas, XV años, graduaciones y eventos especiales"
        },
        {
            id: 3,
            src: "https://ik.imagekit.io/nhu6ngxhk/ImagenesImpremas/rollup.png",
            title: "RollUp Publicitarios",
            category: "Publicidad",
            description: "Exhibidores portátiles profesionales para ferias, eventos y puntos de venta"
        },
        {
            id: 4,
            src: "https://ik.imagekit.io/nhu6ngxhk/ImagenesImpremas/empastados.png",
            title: "Empastados Profesionales",
            category: "Documentos",
            description: "Encuadernación en pasta dura para tesis, informes y documentos importantes"
        },
        {
            id: 6,
            src: "https://ik.imagekit.io/nhu6ngxhk/ImagenesImpremas/playeras.png",
            title: "Playeras",
            category: "Merchandising",
            description: "Playeras de alta calidad con estampados personalizados para tu empresa o evento"
        },
        {
            id: 7,
            src: "https://ik.imagekit.io/nhu6ngxhk/ImagenesImpremas/Tarjetas%20de%20Presentacion.png?updatedAt=1761583873207",
            title: "Tarjetas de Presentación",
            category: "Oficina",
            description: "Tarjetas profesionales de presentación para tu imagen corporativa"
        }
        ,
        {
            id: 8,
            src: "https://ik.imagekit.io/nhu6ngxhk/ImagenesImpremas/portacubiertos.png",
            title: "Porta Cubiertos",
            category: "Restaurante",
            description: "Porta cubiertos con diseños elegantes"
        },
        {
            id: 9,
            src: "https://ik.imagekit.io/nhu6ngxhk/ImagenesImpremas/brazaletes.png",
            title: "Brazaletes",
            category: "Seguridad Eventos",
            description: "Brazaletes que te garantizan seguridad, control e identidad, perfectos para controlar entradas a cualquier evento"
        }
    ];

    const openModal = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <section id="galeria-productos" className="product-gallery">
            <div className="container">
                <div className="gallery-header">
                    <h2 className="section-title">Productos Destacados</h2>
                    <p className="section-subtitle">
                        Descubre nuestra variedad de productos de impresión y personalización de alta calidad
                    </p>
                </div>

                <div className="uniform-grid">
                    {galleryImages.map((image) => (
                        <div
                            key={image.id}
                            className="grid-item"
                            onClick={() => openModal(image)}
                        >
                            <img src={image.src} alt={image.title} />
                            <div className="grid-overlay">
                                <span className="grid-category">{image.category}</span>
                                <h3>{image.title}</h3>
                                <p>{image.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="gallery-cta">
                    <p>¿Interesado en alguno de nuestros productos?</p>
                    <a href="#contacto" className="cta-button" onClick={openWhatsApp}>
                        Solicitar Cotización Personalizada
                    </a>
                </div>
            </div>

            {/* Modal Mejorado */}
            {selectedImage && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-modal" onClick={closeModal}>
                            ✕
                        </button>
                        <div className="modal-image-container">
                            <img src={selectedImage.src} alt={selectedImage.title} />
                        </div>
                        <div className="modal-info">
                            <span className="modal-category">{selectedImage.category}</span>
                            <h3>{selectedImage.title}</h3>
                            <p>{selectedImage.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ProductGallery;