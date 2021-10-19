import React from 'react';
import { Carousel } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Services from '../Services/Services/Services';
import './Home'

const Home = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block h-200px w-100"
                        src={'https://i.ibb.co/nbk7vcy/baner1.jpg/holder.js/100px250'}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100  "

                        src={"https://i.ibb.co/yBsNK7p/banner4.jpg/holder.js/100px250"}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={"https://i.ibb.co/Xthdxqg/baner3.jpg/holder.js/100px250"}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


            <Services></Services>

        </div>
    );
};

export default Home;