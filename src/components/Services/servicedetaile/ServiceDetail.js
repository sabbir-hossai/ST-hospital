import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetail = () => {
    const [serviceDetailes, setServiceDetailes] = useState([]);
    const { serviceId } = useParams();
    useEffect(() => {
        fetch("/services.json")
            .then(res => res.json())
            .then(data => setServiceDetailes(data))
    }, [])




    const service = serviceDetailes.filter(service => console.log(service.id == serviceId));
    console.log(service)
    return (
        <div>

        </div>
    );
};

export default ServiceDetail;