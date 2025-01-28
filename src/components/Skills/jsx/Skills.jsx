import React , {useState} from 'react';
import '../css/skills.css';

const Skills =()=>{
    const [showTooltip, setShowTooltip] = useState(false);

    const handleMouseEnter = () => {
        setShowTooltip(true);
    }

    const handleMouseLeave = () =>{
        setShowTooltip(false);
    }


    return(
        <div className="Skills" name="skills">
            <h1 className="Skills-title" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Skills</h1>
            {showTooltip && (
                <div className="bg-gray-800 text-white rounded-lg shadow-lg p-4 w-64 absolute top-5">
                    <div className="absolute w-4 h-4 bg-gray-800"></div>
                    <p>스킬 숙련도</p>
                    <p><b>Python: </b>중급</p>
                    <p><b>Java: </b>중급</p>
                    <p><b>SQLite3: </b>중급</p>
                    <p><b>MySQL: </b>중급</p>
                    <p><b>HTML5: </b>중급</p>
                    <p><b>CSS: </b>중급</p>
                    <p><b>JS: </b>중하</p>
                    <p><b>React: </b>초급</p>
                    <p><b>Django: </b>중급</p>
                    <p><b>Spring boot: </b>중급</p>
                </div>
            )}

            <div className="Skills-content">
                <div className="Skills-line">
                <div className="Skills-Name">Language</div>
                    <ul className="Skills-Name-ul">
                        <li style={{backgroundColor: '#3D75A4', color: 'white'}}>Python</li>
                        <li style={{backgroundColor: '#A58D5F', color: 'white'}}>Java</li>
                    </ul>
                </div>
                <div className="Skills-line">
                    <div className="Skills-Name">SQL</div>
                    <ul className="Skills-Name-ul">
                        <li style={{backgroundColor: '#003B4C', color: 'white'}}>SQLite3</li>
                        <li style={{backgroundColor: '#00758F', color: 'white'}}>MySQL</li>
                    </ul>
                </div>
                <div className="Skills-line">
                    <div className="Skills-Name">FrontEnd</div>
                    <ul className="Skills-Name-ul">
                        <li style={{backgroundColor: '#E44D26', color: 'white'}}>HTML5</li>
                        <li style={{backgroundColor: '#1572B6', color: 'white'}}>CSS</li>
                        <li style={{backgroundColor: '#F7DF1E', color: 'white'}}>JS</li>
                        <li style={{backgroundColor: '#61DAFB', color: 'white'}}>React</li>
                    </ul>
                </div>
                <div className="Skills-line">
                    <div className="Skills-Name">BackEnd</div>
                    <ul className="Skills-Name-ul">
                        <li style={{backgroundColor: '#092E20', color: 'white'}}>Django</li>
                        <li style={{backgroundColor: '#6DB33F', color: 'white'}}>Spring boot</li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default Skills;