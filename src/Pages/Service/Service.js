import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Service = () => {

    const {serviceId} = useParams();

    const [serviceDetail,setServiceDetail]= useState([]);
    const [singleDetail,setSingleDetail] =useState([]);
    
    useEffect( ()=>{
        fetch("/serviceDetail.json")
        .then(res => res.json())
        .then(data => setServiceDetail(data))
    } ,[]);

    useEffect( () =>{
        const foundDetail = serviceDetail.find(details => details === serviceId)
        setSingleDetail(foundDetail);
    } ,[serviceDetail])

    return (
        <div>
            <h1> Single Service {serviceId} </h1>
            <h2> detail : {singleDetail?.id} </h2>
    
            
        </div>
    );
};

export default Service;