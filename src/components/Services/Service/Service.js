import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { id, serviceName, description, img } = props.service;


    return (
        <div className="service">
            <Col>
                <Card>
                    <Card.Img height="200px" variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{serviceName}</Card.Title>
                        <Card.Text>
                            {description.slice(0, 235)}
                        </Card.Text>
                        <Link to={`/servicedetail/${id}`}>
                            <Button  >Service detail</Button>
                        </Link>

                    </Card.Body>

                </Card>

            </Col>
        </div>
    );
};

export default Service;