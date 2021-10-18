import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Service = () => {
    const {singleService} = useParams();

    const [serviceDetail,setServiceDetail] = useState([]);
    const [singleDetail,setSingleDetail] = useState([]);
    useEffect(()=>{
        fetch('/serviceDetail.json')
        .then(res => res.json())
        .then(data => setServiceDetail(data))
    } ,[])

   useEffect( () => {
       const details = serviceDetail.find(detail => detail.id === singleService )
       setSingleDetail(details)
   } ,[serviceDetail]);


    return (
        <div>
            <h2>Single service {singleService} </h2>
            <h3> single service : {singleDetail?.service} </h3>
            
        </div>
    );
};

export default Service;
