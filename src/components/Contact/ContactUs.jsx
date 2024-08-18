import React, { useState } from 'react'
import './ContactUs.css'
import Title from '../Title/Title'
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { useFormik } from "formik";
import { contactUsSchema } from '../schema';


  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: ""
};

const ContactUs = () => {
    
    const {values, errors, touched, handleChange, handleBlur, handleSubmit} = useFormik({
        initialValues,
        validationSchema: contactUsSchema,
        onSubmit: (values, action) => {
            console.log(values);
            action.resetForm();
        }
    });
  return (
    <div className='contactus-section'>
      <div className="contactus-container">

        <div className="contactus-title">
          <Title title="contact us" subTitle="Let's Connect and Unlock Your Potential!"/>
        </div>

        <div className="contactus-items">

          <div className="contactus-item">
            <IoLocationOutline className='contactus-icons'/>
            <h4>Address</h4>
            <p>Unit 14, Tower A, 9th Floor<br/>
               Logix Cyber Park<br/>
               Noida 62, UP 201309<br/>
               India
            </p>
          </div>
          <hr />

          <div className="contactus-item">
            <FiPhone className='contactus-icons'/>
            <h4>Phone Number</h4>
            <p>
              <a href="tel: +91-120-3229282">+91-120-3229282</a>
              <br/>
              <a href="tel: +91-120-3116273">+91-120-3116273</a>
            </p>
          </div>
          <hr />

          <div className="contactus-item">
            <TfiEmail className='contactus-icons'/>
            <h4>Email</h4>
            <p><a href="mailto: info@example.com">hrd@demorgia.com</a></p>
          </div>

        </div>
        
        <div className="contactus-contents">
          <form>
            <div className="contactus-content">
              <div className='input-box'>
                <input type="text" name='name' value={values.name} onChange={handleChange} onBlur={handleBlur} placeholder='Your Name' required/>
                  { errors.name && touched.name? (<p className='form-error'>{errors.name}</p>) : null }
              </div>
              <div className="input-box">
                <input type="email" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} placeholder='Your Email' required/>
                { errors.email && touched.email ? (<p className='form-error'>{errors.email}</p>) : null}
              </div>
            </div>
            <br/>
            <div className="input-box">
              <input type="text" name='subject' value={values.subject} onChange={handleChange} onBlur={handleBlur} placeholder='Subject' required/><br/>
              { errors.subject && touched.subject ? (<p className='form-error'>{errors.subject}</p>) : null}
            </div>
            <div className="input-box">
              <textarea name="message" value={values.message} onChange={handleChange} onBlur={handleBlur} placeholder='Message' rows={6} required></textarea>
              { errors.message && touched.message ? (<p className='form-error'>{errors.message}</p>) : null}
            </div>
          </form>
        </div>
        
      <button className='contactus-btn' onClick={handleSubmit}>Send Message</button> 
      

      </div>
    </div>
  )
}

export default ContactUs
