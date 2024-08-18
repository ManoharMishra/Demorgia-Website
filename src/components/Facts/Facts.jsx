import React, { useState } from 'react'
import './Facts.css'
import Title from '../Title/Title'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

const Facts = () => {
  const [counterOn, setCounterOn] = useState(false)

  return (
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => {setCounterOn(false)
    }}>
        <div className='facts-section'>
          <div className="facts-container">
            <div className="facts-title">
                <Title title="facts" subTitle="Our team's expertise spans various domains, including assessment excellence, strategic business consultancy, digital marketing proficiency, and talent acquisition and manpower solutions. We leverage our skills to help individuals unlock their potential and organizations achieve their goals."/>
            </div>
            <div className="facts-counters">
                <div className="facts-counter">
                    <h1>
                    { counterOn && <CountUp start={0} end={18} duration={1} delay={.3}/>}
                    <span>+</span>
                    </h1>
                    <p>SSC Empanelled</p> 
                </div>

                <div className="facts-counter">
                    <h1>
                    { counterOn && <CountUp start={0} end={900} duration={1} delay={.3}/>}
                    <span>+</span>
                    </h1> 
                    <p>Job Roles Assessed</p> 
                </div>

                <div className="facts-counter">
                    <h1>
                    { counterOn && <CountUp start={0} end={501410} duration={1} delay={.3}/>}
                    <span>+</span>
                    </h1>
                    <p>Assessed Candidates</p> 
                </div>

                <div className="facts-counter">
                    <h1>
                    { counterOn && <CountUp start={0} end={200} duration={1} delay={.3}/>}
                    <span>+</span>
                    </h1>
                    <p>SME Engaged</p> 
                </div>  

                <div className="facts-counter">
                    <h1>
                    { counterOn && <CountUp start={0} end={1000} duration={1} delay={.3}/>}
                    <span>+</span>
                    </h1>
                    <p>Assessor/Proctor</p> 
                </div>

                <div className="facts-counter">
                    <h1>
                    { counterOn && <CountUp start={0} end={100} duration={1} delay={.3}/>}
                    <span>+</span>
                    </h1>
                    <p>Projects</p> 
                </div>
            </div>
          </div>    
        </div>
    </ScrollTrigger>
  )
}

export default Facts
