import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    const [services,setServices] = useState([]);
    useEffect( ()=>{
        fetch('./services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    } ,[])
    return (
        <div className="container">
            <h2>Our Services </h2>
            <div  className="row row-cols-1 row-cols-md-3 g-4">
            {
                services.map(service => 
                    <div>
                        <div className="col">
                        <div className="card h-100">
                            <img src={service.img} className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h5 className="card-title">{service.service}</h5>
                            <p className="card-text">{service.description} </p>
                            <Link to ={`/services/${service.id}`} >
                            <button type="button" className="btn btn-secondary px-3 d-flex justify-content-center">More Details</button>
                            </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    )
            }
            </div>
        </div>
    );
};

export default Services;