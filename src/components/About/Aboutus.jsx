import React from 'react'
import './Aboutus.css'
import Title from '../Title/Title';
import { FaEye } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { IoSpeedometerOutline } from "react-icons/io5";


function AboutUs (){
  return (
    <div className="aboutus-section">
      <div className="aboutus-container">
        
        <div className="aboutus-title">
          <Title title="about"/>
        </div>

        <div className='bk'>
          <div>  
            <div className='content'>
              <h4 className='main'>
                Welcome to Demorgia Consulting Services Pvt Ltd, a trusted name in the field of skills assessment
                and business consultancy. We are dedicated to fostering skill development, enhancing employability,
                and moting growth within industries. With a commitment to excellence, we provide comprehensive
                assessment services that align with the organization's standards and the specific requirements of 
                the sector. By leveraging our expertise with team of Assessors and utilizing innovative assessment 
                tools, we provide valuable insights into individuals' strengths and areas for improvement. This 
                enables them to make informed decisions regarding their career paths, identify skill gaps, and take 
                necessary steps to enhance their professional capabilities.
                In addition to our assessment services, we offer expert business consultancy to support organizations in 
                achieving their strategic objectives. Our seasoned consultants bring a wealth of industry knowledge and 
                experience to the table, assisting businesses in optimizing their operations, implementing effective strategies,
                and driving sustainable growth. Contact us today to discover how Demorgia Consulting Services can support you in
                your assessment and consultancy needs. We look forward to being your trusted partner in unlocking opportunities
                and driving transformation.
              </h4>
              
              <div className="card">

                <div>
                  <div className="card-container">
                    <div className="image-container">
                      <img src="src/assets/about-imgs/about1.jpg" className='images' alt="" />
                    </div>
                    <div className="icon">
                      <IoSpeedometerOutline className='card-icon'/>
                    </div>
                    <div className="card-content">
                      <div className="card-title">
                        <h2 className='card-heading'><a href="/">Our Mission</a></h2>
                      </div>
                      <div className="card-body">
                        <h4 className='card-des'>To empower individuals and industries through accurate assessments,
                           fostering skill development, and contributing to a skilled and competent workforce.</h4>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="card-container">
                    <div className="image-container">
                      <img src="src/assets/about-imgs/about2.jpg" className='images' alt="" />
                    </div>
                    <div className="icon">
                      <CgNotes className='card-icon'/>
                    </div>
                    <div className="card-content">
                      <div className="card-title">
                        <h2 className='card-heading'><a href="/">Our Plan</a></h2>
                      </div>
                      <div className="card-body">
                        <h4 className='card-des'>Collaborate closely with the Ministry of Skill Development and Entrepreneurship to align our 
                          initiatives and contribute to the national skill development agenda.</h4>
                    </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div>
                    <div className="card-container">
                      <div className="image-container">
                        <img src="src/assets/about-imgs/about3.jpg" className='images' alt="" />
                      </div>
                      <div className="icon">
                        <FaEye className='card-icon'/>
                      </div>
                      <div className="card-content">
                        <div className="card-title">
                          <h2 className='card-heading'><a href="/">Our Vision</a></h2>
                        </div>
                        <div className="card-body">
                          <h4 className='card-des'>To be a leading assessment agency, recognized for
                              our commitment to excellence,  innovation, and driving positive impact on individuals and industries.</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  
    
  )
}

export default AboutUs;
