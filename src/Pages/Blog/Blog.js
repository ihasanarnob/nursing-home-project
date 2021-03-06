import React from 'react';

import img1 from '../../images/blog1.jpg'
import img2 from '../../images/blog2.jpg'
import img3 from '../../images/blog3.jpg'

const Blog = () => {
    return (
        <div>
            <div className="container row row-cols-1 row-cols-md-2 g-4 my-3 mx-auto">
            <div className="col">
                <div className="card">
                <img src={img1} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Emergency Nurse Recruit Adverisement</h5>
                    <p className="card-text"><span className="text-primary">Pills & Cure</span> recruitng few nurses for the Family Nursing Services.Interested candidates contact us with your CV </p>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                <img src={img2} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Best Nursing Home Care BD</h5>
                    <p className="card-text">Nursing is a profession that is involved with the health care and health awareness activities of the general public. The profession highlights the importance of restoring the health of a patient or person, personally, family, or socially. The person involved in this profession, skilled or trained person, is called a nurse or caretaker. Mainly women are involved in the nursing profession. </p>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                <img src={img3} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Medical equipment suppliers in Bangladesh</h5>
                    <p className="card-text">Along with other typical technological advancements, medical supplies and equipment have grown exponentially over the years in Bangladesh. They are used in hospitals, pharmacies, laboratories as well as for self-care. Medical equipment suppliers are engaged in lawfully supply various medical devices and equipment to the hospitals and pharmacies. They are also responsible for the maintenance and repair services of the tools and supplies.Some regular examples of medical equipment and supplies are surgical tools, hospital beds, oxygen cylinders, Suction machine and many others. Some of them are durable medical devices, while some of them are disposable after usage.</p>
                </div>
                </div>
            </div>
    
            </div>
        </div>
    );
};

export default Blog;