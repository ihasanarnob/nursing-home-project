import React from 'react';
import { Carousel } from 'react-bootstrap';
import slide1 from '../../../images/slide1.jpg'
import slide2 from '../../../images/slide2.jpg'
import slide3 from '../../../images/slide3.jpg'

const Banner = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={slide1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>Welcome to Pills & Cure</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={slide2}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Nursing And Family Care</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={slide3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Personal Home Care</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;