import React, { useEffect } from 'react'
import './Services.css'
import { PiBookOpenTextFill, PiWaveformFill } from "react-icons/pi";
import { TbAssembly } from "react-icons/tb";
import { AiOutlineSolution } from "react-icons/ai";
import { GrCopy } from "react-icons/gr";
import { IoIosPeople } from "react-icons/io";
import Aos from 'aos';
import 'aos/dist/aos.css'
import  '../Title/Title.css';
import Title from '../Title/Title';


const Services = () => {
  useEffect(()=>{
    Aos.init();
  })

  return (
  <>
  <div className="services-section">
   <div className="services-container">
    <div className='services-title' data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
        <Title title="services" subTitle="Empowering Growth with Tailored Solutions and Unparalleled Client Support"/>
      </div>
      <div className='services' data-aos = "fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
        <div className="service">
          <div className="icon"><TbAssembly/></div>
          <div className='service-content'>
            <h4>Skills Assessment</h4>
            <p>We offer comprehensive skills assessment services across various sectors,
              ensuring accurate evaluation and certification of individuals' competencies.
              Our assessments align with industry standards and are conducted by qualified
              assessors using advanced methodologies and online technological platform.</p>
          </div>
        </div>

        <div className="service">
          <div className="icon"><PiBookOpenTextFill/></div>
          <div className='service-content'>
            <h4>Skill Gap Analysis</h4>
            <p>Through our skill gap analysis services, we help businesses identify areas where
              their employees may require further training or development. By assessing the existing
              skill sets and analyzing the desired competencies, we provide insights to bridge the 
              gap and foster continuous improvement within organizations.</p>
          </div>
        </div>

        <div className="service">
        <div className="icon"><AiOutlineSolution/></div>
          <div className='service-content'>
            <h4>Manpower Solutions</h4>
            <p>Demorgia Consulting Services offers manpower solutions to assist businesses in sourcing,
              recruiting, and retaining skilled professionals. We understand the importance of a competent
              workforce and help organizations find the right talent to meet their specific requirements.</p>
          </div>
        </div>
      </div>

      <div className='services' data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
        <div className="service">
        <div className="icon"><PiWaveformFill/></div>
          <div className='service-content'>
            <h4>Training and Development</h4>
            <p>We offer training programs and workshops designed to enhance individuals' skills and knowledge 
              in various domains. Our industry-specific training modules focus on improving practical abilities,
              soft skills, and professional development, empowering individuals to excel in their careers.</p>
          </div>
        </div>

        <div className="service">
        <div className="icon"><GrCopy/></div>
          <div className='service-content'>
            <h4>Software Solutions</h4>
            <p>we specialize in delivering cutting-edge software solutions that empower businesses to streamline their
              operations, enhance efficiency, and drive growth. Our tailored solutions cater to diverse industries,
              ensuring seamless integration and optimized performance to meet your unique needs.</p>
          </div>
        </div>

        <div className="service">
        <div className="icon"><IoIosPeople/></div>
          <div className='service-content'>
            <h4>Business Solutions</h4>
            <p>As technology enthusiasts, we are always exploring new tools and frameworks to stay at the cutting
              edge of innovation. We stays up-to-date with the latest trends in web and mobile development, ensuring
              that applications are built using the most advanced and efficient technologies available.</p>
          </div>
        </div>
      </div>
   </div> 
  </div> 
  </>
  )
}

export default Services
