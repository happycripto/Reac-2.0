import React from 'react';
import './contacto.css'

const Contacto = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2>Dirección:</h2>
          <p>Av. Monroe 4539</p>
          <div className="mapa">
          <iframe
          title="Mapa de Google Maps"
          width="600"
          height="450"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.321860641151!2d-58.48308952343177!3d-34.5707216557579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb66153f3d205%3A0x878ceceae06df81c!2sAv.%20Monroe%204539%2C%20C1431%20CABA!5e0!3m2!1ses-419!2sar!4v1683603208622!5m2!1ses-419!2sar">  
         </iframe>
          </div>
        </div>
        <div className="col-md-6">
          <h2>Turnos y Contacto:</h2>
          <div className="redes-sociales">
            <a href="https://www.instagram.com/tu_cuenta_de_instagram/">
              <img  className='logo-redes-sociales' src="instagram-logo.png" alt="Instagram" />
            </a>
            <a href="https://wa.me/549112251574">
              <img  className='logo-redes-sociales' src="whatsapp-logo.png" alt="WhatsApp" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
