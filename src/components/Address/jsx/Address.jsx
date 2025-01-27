import React from 'react';
import '../css/address.css';

const Address = () =>{
    // Github 이미지 가져오기
    const imageUrl = `/images/Github.png`;

    return(
        <div className="Address">
            <h1 className="Address-title">Address</h1>
            <div className="Address-content">
                <img src={imageUrl} alt="Logo"/>
            </div>
        </div>
    );
}

export default Address;