import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import { Row } from 'react-bootstrap';
import './Services.css'

const Services = () => {
    const [services, setService] = useState([]);
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div className='services' id="services">

            < Row Row xs={1} sm={2} md={2} lg={3} className="g-4">
                {services.map(service => <Service
                    key={service.id}
                    service={service}
                ></Service>)}
            </Row>

        </div >
    );
};

export default Services;