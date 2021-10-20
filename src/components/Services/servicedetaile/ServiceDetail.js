import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './servicedetaile.css'

const ServiceDetail = () => {
    const [serviceDetailes, setServiceDetailes] = useState([]);
    const { serviceId } = useParams();
    useEffect(() => {
        fetch("/services.json")
            .then(res => res.json())
            .then(data => setServiceDetailes(data))
    }, [])

    console.log(serviceDetailes)


    const service = serviceDetailes.find(service => service.id == serviceId);

    console.log(service)
    return (
        <div className="details">
            <div>
                <img src={service?.img} alt="" />
                <h3>{service?.serviceName}</h3>
                <p>{service?.description}</p>
                
            </div>

        </div>
    );
};

export default ServiceDetail;