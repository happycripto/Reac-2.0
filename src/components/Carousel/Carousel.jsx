import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
return (
    <Carousel fade>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src="../public/carrusel/Banner-Web-Desktop.png"
        alt="First slide"
        />

        <Carousel.Caption>
        <h3>Relajacion , renovacion y rejuvenecimiento en un solo lugar</h3>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src="../public/carrusel/dermopigmentacion.png"
        alt="Second slide"
        />

        <Carousel.Caption>
        <h3>Relajacion , renovacion y rejuvenecimiento en un solo lugar</h3>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src="../public/carrusel/FACIALES.png"
        alt="Third slide"
        />

        <Carousel.Caption>
        <h3>Relajacion , renovacion y rejuvenecimiento en un solo lugar</h3>
        </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
);
}

export default CarouselFadeExample;