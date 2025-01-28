import React from 'react';
import '../css/awardandactivations.css';

const AwardAndActivations = () =>{
    return(
        <div className="AwardAndActivations" name="awardandactivations">
            <h1 className="Award-title">Award</h1>
            <div className="Award-content">
                <p><b>국가우수이공계장학생</b> (2020.08.14)</p>
                <p><b>인공지능사관학교 교육과정 장려상</b> (2021.12.08)</p>
                <p><b>인공지능사관학교 프로젝트 최우수상</b> (2021.12.08)</p>
            </div>
            <h1 className="Activation-title">Activation</h1>
            <div className="Activation-content">
                <p><b>청소년 교육지원 사업</b> (2020.05.04 ~ 2021.02.22)</p>
                <p><b>ICT Innovation Square</b> (2020.10.19. ~ 2020.12.11)</p>
                <p><b>광주 인공지능 사관학교</b> (2021.04.19. ~ 2021.12.07)</p>
                <p><b>KT AIVLE School</b> (2023.08.08 ~ 2024.01.25)</p>
            </div>
        </div>
    );
}

export default AwardAndActivations;