import React from 'react'
import './Styles.css'
import { FaAngleRight, FaXTwitter, FaFacebookF, FaInstagram, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa6";
import { useFormik } from "formik";


const initialValues = {
  newsletter: ""
};

const Footer = () => {
    
    const { values, handleChange ,handleSubmit, handleBlur} = useFormik({
      initialValues,
        onSubmit: (values, action) => {
            console.log(values);
            action.resetForm();
        }
    });

  return (
    <>
    <div className='footer-section'>
      <div className="footer-container">
        <div className="footer-contents">

           <div className="footer-content logo-section">
            <img src="src/assets/img/logo.png" alt="" />
            <p>Empowering Individuals and<br/>
               Industries through Accurate<br/>
               Assessments, Strategic<br/>
               Consultancy, and Innovative Solutions. Unlocking<br/>
               Potential, Driving Growth.
            </p>
           </div>

           <div className="footer-content">
            <h2 className='headings-1'>Useful links</h2>
            <p className='links'><FaAngleRight className='highlight-arrow'/>Home</p> <hr className='after-useful-links'/>
            <p className='links'><FaAngleRight className='highlight-arrow'/>About Us</p> <hr className='after-useful-links'/>
            <p className='links'><FaAngleRight className='highlight-arrow'/>Services</p> <hr className='after-useful-links'/>
            <p className='links'><FaAngleRight className='highlight-arrow'/>Terms of Service</p> <hr className='after-useful-links'/>
            <p className='links'><FaAngleRight className='highlight-arrow'/>Privacy Policy</p> <hr className='after-useful-links'/>
           </div>

           <div className="footer-content">
            <h2 className='headings-2'>Contact us</h2>
            <p className='contact'>Unit 14, Tower A, 9th Floor<br/>
               Logix Cyber Park<br/>
               Noida 62, UP 201309<br/>
               India<br/>

               <span>Phone:</span> +91-120-3229282<br/>
               <span>Phone:</span> +91-120-3116273<br/>
               <span>Email:</span> hrd@demorgia.com<br/>
            </p>
            

            <div className="social-links">
              <a href="https://www.twitter.com"><FaXTwitter className='social-icons'/></a>
              <a href="https://www.facebook.com/demorgia2012"><FaFacebookF className='social-icons'/></a>
              <a href="https://www.instagram.com"><FaInstagram className='social-icons'/></a>
              <a href="https://www.google.com"><FaGooglePlusG className='social-icons'/></a>
              <a href="https://www.linkedin.com"><FaLinkedinIn className='social-icons'/></a>
            </div>
           </div>

           <div className="footer-content">
            <h2 className='headings-3'>Group company</h2>
            <p className='company'>"Vikram Aviation Pvt Ltd"<br/>
               'Trusted Partner for Precision<br/>
               Calibration, Expert Repairs, Composite Maintenance,<br/>
                and Consumable Solutions.'<br/>
                Our group company fosters<br/>
                collaborative excellence across industries, uniting<br/>
                innovation and expertise.
            </p>

            <div className='newsletter'>
              <input type="text" name='newsletter' value={values.newsletter} onChange={handleChange} onBlur={handleBlur} placeholder='NEWSLETTER'/>
              <button className='subscribe-btn' onClick={handleSubmit}>Subscribe</button>
            </div>
           </div>
           
        </div>
      </div>
    </div>
    <div className='footer-description-section'>
      <div className="footer-description">
        <p className='desc'>© Copyright <span className='bold'>Demorgia Consulting Services Pvt Ltd.</span> All Rights Reserved</p>
        <p className='desc-conts'>Designed by <a href='https://www.demorgia.com'>Demorgia</a></p>
      </div>
    </div>
 </>
  )
}

export default Footer
