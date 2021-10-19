import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Service = () => {

    const {serviceId} = useParams();

    const [details,setDetails] = useState({});


    useEffect( ()=>{
        fetch('/serviceDetail.json')
        .then(res => res.json())
        .then(data => {
            const foundData = (data?.find(d => d.id == serviceId) )
            setDetails(foundData)
        })
    } ,[serviceId])

    return (
        <div className="container my-5">
        <div className="card mb-5" >
            <div className="row g-0">
                <div className="col-md-4">
                <img src={details.img} className="img-fluid rounded-start" alt="..."/>
                </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{details.service}</h5>
                            <p className="card-text">{details.description}</p>
                        </div>
                    </div>
            </div>
        </div>
        <h6 className="container"> {details.detail} </h6>
        </div>
    );
};

export default Service;