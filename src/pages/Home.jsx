import React from 'react';
import { Carousel } from 'react-bootstrap';
import illustration from '../../public/Illustration.png';  // Assicurati che il percorso sia corretto
import './Home.css';

const Home = () => {
    return (
        <div className="container-fluid home-container">
            <Carousel id="homeCarousel" className="col-11 mx-auto">
                {/* Primo slide */}
                <Carousel.Item>
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-5 col-lg-5 text-container">
                            <h1><span className='important-text'>Da 25 anni </span>aiutiamo il tuo lavoro</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            <button className="btn btn-primary btn-logo">Scopri di più</button>
                        </div>
                        <div className="col-md-6 col-lg-6 mt-5 illustration-container">
                            <img src={illustration} alt="Illustrazione che mostra una persona con un laptop" className="img-fluid illustration" />
                        </div>
                    </div>
                </Carousel.Item>

                {/* Secondo slide */}
                <Carousel.Item>
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-5 col-lg-5 text-container">
                            <h1><span className='important-text'>Slide 2 Title</span></h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <button className="btn btn-primary btn-logo">Learn More</button>
                        </div>
                        <div className="col-md-6 col-lg-6 mt-5 illustration-container">
                            <img src={illustration} alt="Seconda illustrazione" className="img-fluid illustration" />
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Home;
