import React from 'react';
import '../css/certificate.css';

const Certificate = () =>{
    return(
        <div className="Certificate" name="certificate">
            <h1 className="Certificate-title">Certificate</h1>
            <div className="Certificate-content">
                <p><b>빅데이터 분석기사</b>(2023.12)</p>
                <p><b>AICE-Associate</b>(2023.11)</p>
                <p><b>SQLD</b>(2023.07)</p>
                <p><b>정보처리기사</b>(2022.11)</p>
            </div>
        </div>
    )
}

export default Certificate;