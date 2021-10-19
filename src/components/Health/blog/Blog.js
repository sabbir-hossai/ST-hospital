import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './blog.css';

const Blog = (props) => {
    const { description, img, name } = props.blog

    return (
        <div >
            <Col>
                <Card >
                    <Card.Img height="200px" variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description.slice()}
                        </Card.Text>
                    </Card.Body>

                </Card>

            </Col>
        </div>
    )
}


export default Blog;