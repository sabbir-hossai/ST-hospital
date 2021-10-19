import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Doctor from '../doctor/Doctor';
import './About.css'

const Aboute = () => {
    const [specialist, setSpecialist] = useState();
    useEffect(() => {
        fetch("/specialist.json")
            .then(res => res.json())
            .then(data => setSpecialist(data))
    }, [])
    return (
        <div className="about-container">
            <div >
                <div className="aboutTop">
                    <div className="">
                        <img src="https://i.ibb.co/fFKYHPx/hospital.jpg" alt="" />
                    </div>
                    <div>
                        <h1>ABOUT ST MEDILINK HOSPITAL</h1>
                        <p>ST medilink hospital is a UK registered charity established with the vision of providing essential healthcare to the underprivileged in remote villages in Africa. We aim to inspire and support the education of disadvantaged children, empower young generations to become self-reliant and live better lives.
                            We want to raise greater public awareness about some of the most pressing issues facing disadvantaged families in local communities in Africa, particularly relating to healthcare and education. Our greatest vision is to setup healthcare centres, hospitals and education facilities accessible by many remote villages across Africa, allowing local communities better access to vital medicine, professional care and educational resources.</p>
                    </div>
                </div>

                <div>
                    <h1>Ours Specialist</h1>
                    <div>
                        < Row Row xs={1} sm={2} md={2} lg={4} className="g-4">
                            {specialist?.map(doctor => <Doctor key={doctor.id}
                                doctor={doctor}></Doctor>)
                            }
                        </Row>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aboute;