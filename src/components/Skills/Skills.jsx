import React, { useState } from 'react'
import './Skills.css'
import Title from '../Title/Title';
import ScrollTrigger from 'react-scroll-trigger';

const Skills = () => {

  const [skillsBarOn, setSkillsBarOn] = useState(false)

  return (
    <ScrollTrigger onEnter={() => setSkillsBarOn(true)} onExit={() => setSkillsBarOn(false)}>
        <div className='skills-section' id='skills'>
        <div className="skills-container">

            <div className="skills-title">
                <Title title='our skills' subTitle='At Demorgia Consulting Services, we possess a diverse skill set that enables us to provide comprehensive solutions to our clients. With deep industry knowledge, innovative methodologies, and a commitment to excellence, we deliver exceptional services that drive success.'/>
            </div>
        { skillsBarOn &&
            <div className="skills-items">

                <div className="skills-item">
                    <div className="progress-line" data-percent="99%">
                        <span style={{width: "99%", backgroundColor:"green"}}>
                            <div className="skills-info">
                                <p>Assessment Excellence</p>
                                <p>99%</p>
                            </div>
                        </span>
                    </div>
                </div>

                <div className="skills-item">
                    <div className="progress-line" data-percent="95%">
                        <span style={{width: "95%", backgroundColor:"rgb(29, 149, 176)"}}>
                            <div className="skills-info">
                                <p>Manpower Solutions</p>
                                <p>95%</p>
                            </div>
                        </span>
                    </div>
                </div>

                <div className="skills-item">
                    <div className="progress-line" data-percent="90%">
                        <span style={{width: "90%", backgroundColor:"rgb(240, 45, 45)"}}>
                            <div className="skills-info">
                                <p>software solutions</p>
                                <p>90%</p>
                            </div>
                        </span>
                    </div>
                </div>

                <div className="skills-item">
                    <div className="progress-line" data-percent="85%">
                        <span style={{width: "85%", backgroundColor:"rgb(36, 122, 241)"}}>
                            <div className="skills-info">
                                <p>business solutions</p>
                                <p>85%</p>
                            </div>
                        </span>
                    </div>
                </div>

                <div className="skills-item">
                    <div className="progress-line" data-percent="80%">
                        <span style={{width: "80%", backgroundColor:"rgb(253, 220, 34)"}}>
                            <div className="skills-info">
                                <p>training & development</p>
                                <p>80%</p>
                            </div>
                        </span>
                    </div>
                </div>

            </div>
          }
          </div>
        </div>
    </ScrollTrigger>
  )
}

export default Skills
