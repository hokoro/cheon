import React from 'react';
import '../css/projects.css';

const Projects = () =>{

    return(

        <div className="Projects" name="Projects">
            <h1 className="Projects-title">Projects</h1>
            <div className="Projects-content">
                <div className="Projects-content-piece">
                    <h4 className="Projects-class individual">CheontFolio</h4>
                    <p className="Projects-duration">2025.01.24 ~ now</p>
                    <hr/>
                    <h5 className="Project-explanation">정적 파일로 만들고 서버에 배포하는 나만의 포트폴리오</h5>
                    <ul className="Project-deep-explanation">
                        <li>개인 프로젝트</li>
                        <li>Netlify를 활용한 배포</li>
                        <li>자기소개서 및 이력서</li>
                    </ul>
                    <a href={"https://github.com/hokoro/cheon"} className="Projects-link">https://github.com/hokoro/cheon</a>
                    <div className="Projects-skills">
                        React, HTML, CSS, JavaScript, Netlify
                    </div>
                </div>
                <div className="Projects-content-piece">
                    <h4 className="Projects-class team">Rosseta</h4>
                    <p className="Projects-duration">2024.12 ~ 2024.01</p>
                    <hr/>
                    <h5 className="Project-explanation">청각장애인을 위한 수어 교육 플랫폼</h5>
                    <ul className="Project-deep-explanation">
                        <li>팀 프로젝트(8인)</li>
                        <li>플랫폼 백엔드 개발 담당</li>
                        <li>회원가입,게시판,교육 시스템 개발</li>
                    </ul>
                    <a href={"https://github.com/hokoro/Rossetta"}
                       className="Projects-link">https://github.com/hokoro/Rossetta</a>
                    <div className="Projects-skills">
                        Django, Python, TypeScript, HTML, CSS
                    </div>
                </div>
                <div className="Projects-content-piece">
                    <h4 className="Projects-class team">Chosun Map</h4>
                    <p className="Projects-duration">2022.09 ~ 2022.12</p>
                    <hr/>
                    <h5 className="Project-explanation">조선대학교 도보형 내비게이션 웹 서비스</h5>
                    <ul className="Project-deep-explanation">
                        <li>팀 프로젝트(5인)</li>
                        <li>풀스택 개발</li>
                        <li>지도, 내비게이션, 교내버스 노선정보 서비스 개발</li>
                    </ul>
                    <a href={"https://github.com/hokoro/ChosunMap"}
                       className="Projects-link">https://github.com/hokoro/ChosunMap</a>
                    <div className="Projects-skills">
                        Django, Python, HTML, CSS, Vanilla JS
                    </div>
                </div>
                <div className="Projects-content-piece">
                    <h4 className="Projects-class team">YCC</h4>
                    <p className="Projects-duration">2022.03 ~ 2022.07</p>
                    <hr/>
                    <h5 className="Project-explanation">유튜브 악성 댓글 탐지 및 분석 웹 서비스</h5>
                    <ul className="Project-deep-explanation">
                        <li>팀 프로젝트(3인)</li>
                        <li>풀스택 개발</li>
                        <li>댓글 탐지, 사이트 댓글 분석 서비스 개발</li>
                    </ul>
                    <a href={"https://github.com/hokoro/YoutubeCommnetCleaner"}
                       className="Projects-link">https://github.com/hokoro/YoutubeCommentCleaner</a>
                    <div className="Projects-skills">
                        Django, Python, HTML, CSS
                    </div>
                </div>
                <div className="Projects-content-piece">
                    <h4 className="Projects-class team">Pose_Eureka</h4>
                    <p className="Projects-duration">2021.12</p>
                    <hr/>
                    <h5 className="Project-explanation">모션 인식 웹 스트리밍 서비스</h5>
                    <ul className="Project-deep-explanation">
                        <li>팀 프로젝트(4인)</li>
                        <li>Mediapipe js 모션 분류 기능 개발</li>
                        <li>1:1 스트리밍 게임 서비스</li>
                    </ul>
                    <a href={"https://github.com/hokoro/Pose_EureKa"}
                       className="Projects-link">https://github.com/hokoro/Pose_Eureka</a>
                    <div className="Projects-skills">
                        JavaScript, Jquery, Node.js, Flask, Express JS
                    </div>
                </div>
                <div className="Projects-content-piece">
                    <h4 className="Projects-class team">Escooter_No_Helmet_Detection_YOLO</h4>
                    <p className="Projects-duration">2021.10</p>
                    <hr/>
                    <h5 className="Project-explanation">모빌리티 스쿠터 헬멧 착용 여부 판단 웹서비스</h5>
                    <ul className="Project-deep-explanation">
                        <li>팀 프로젝트(4인)</li>
                        <li>업로드 탐지 백엔드 서비스 개발</li>
                        <li>실시간 헬멧 미착용 탐지, 업로드 영상 미착용 탐지 </li>
                    </ul>
                    <a href={"https://github.com/hokoro/Escooter_No_Helmet_Detection_YOLO"}
                       className="Projects-link">https://github.com/hokoro/Escooter_No_Helmet_Detection_YOLO</a>
                    <div className="Projects-skills">
                        Python, HTML, CSS, JS
                    </div>
                </div>
                <div className="Projects-content-piece">
                    <h4 className="Projects-class team">CJ_VRP</h4>
                    <p className="Projects-duration">2021.09</p>
                    <hr/>
                    <h5 className="Project-explanation">택배 최적 경로 인사이트 도출</h5>
                    <ul className="Project-deep-explanation">
                        <li>팀 프로젝트(4인)</li>
                        <li>화성시 데이터 분석, 전처리, 시각화 담당</li>
                        <li>택배 최적 경로 알고리즘을 도출후 인사이트 제작</li>
                    </ul>
                    <a href={"https://github.com/hokoro/CJ_Competition"}
                       className="Projects-link">https://github.com/hokoro/CJ_Competition</a>
                    <div className="Projects-skills">
                        Python
                    </div>
                </div>
                <div className="Projects-content-piece">
                    <h4 className="Projects-class individual">Pinterest 서비스</h4>
                    <p className="Projects-duration">2021.07~ 2021.10</p>
                    <hr/>
                    <h5 className="Project-explanation">Pinterest 서비스 만들기</h5>
                    <ul className="Project-deep-explanation">
                        <li>개인 프로젝트</li>
                        <li>반응형 웹 사이트 제작(풀스택)</li>
                        <li>Django를 활용한 Pinterest 서비스 개발</li>
                    </ul>
                    <a href={"https://github.com/hokoro/cheon01"}
                       className="Projects-link">https://github.com/hokoro/cheon01</a>
                    <div className="Projects-skills">
                        Python, HTML, CSS, JS, Docker
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Projects;