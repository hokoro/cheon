import React, {useState} from "react";
import '../css/introduction.css';


const Introduction = () =>{
    const [showTooltip , setShowTooltip] = useState(false);

    const handleMouseEnter = () => {
        setShowTooltip(true);
    }

    const handleMouseLeave = () =>{
        setShowTooltip(false);
    }


    return(
        <div className="Introduction" name="introduction">
            <h1 className="Introduction-title" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Introduction</h1>
            {showTooltip && (
                <div className="bg-gray-800 text-white rounded-lg shadow-lg p-4 w-64 Introduction-tooltip">
                    <p><b>Name: </b>천영성</p>
                    <p><b>Age: </b>27세(만)</p>
                    <p><b>School: </b>조선대학교</p>
                    <p><b>Major: </b>컴퓨터공학과</p>
                    <p><b>Email: </b>hokoro123@Gmail.com</p>
                </div>
            )}
            <div className="Introduction-content">
                <p>안녕하십니까. 웹 서비스 개발자가 되고 싶은 천영성입니다.</p>
                <p>컴퓨터공학과를 전공하며, IT 시스템 전반에 대한 이론과 실무를 익혔습니다.</p>
                <p>프론트와 백엔드 개발 역할을 7번 참여한 경험이 있습니다.</p>
                <p>웹 서비스 개발에 대한 전반적인 기술과 커뮤니케이션 능력을 기를 수 있었습니다.</p>
                <p>아직 배울 것이 많은 신입 개발자입니다.</p>
                <p>하지만 회사 발전에 기여할 수 있는 팀원이 되도록 노력하겠습니다.</p>
            </div>
        </div>
    );
}

export default Introduction;




