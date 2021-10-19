import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Doctor = (props) => {
    const { name, specialistf, img } = props.doctor;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img height="200px" variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            <h4>{specialistf}</h4>
                        </Card.Text>
                    </Card.Body>

                </Card>

            </Col>
        </div>
    );
};

export default Doctor;