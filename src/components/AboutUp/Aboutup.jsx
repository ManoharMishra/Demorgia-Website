import React from 'react'
// import enhance from '../Assets/enhance.png'
// import stratrgy from '../Assets/strategy.png'
// import heart from '../Assets/heart.png'
import './Aboutup.css'

const Aboutup = () => {
 
    return (
      
    <div className='aboutup-section'>
      <div className="aboutup-container">
        <div className=' aboutup-items container2'>

          <div className='aboutup-item continuous'>
            <img className='logo'  src="src/assets/about-imgs/enhancement.png" alt="" />
            <h3><a href="/">Continuous Enhancement</a></h3>
            <span>We continuously enhance our assessment 
                methodologies and technologies to ensure precise 
                evaluation and reliable results.
            </span>
          </div>

          <div className="aboutup-item partnership">
            <img className='logo' src="src/assets/about-imgs/partnership.png" alt="" />
            <h3><a href="/">Strategic Partnership</a></h3>
            <span>Foster strategic partnerships 
                  with stakeholders to facilitate seamless 
                  transitions from assessment to employability.
            </span>
          </div>

          <div className="aboutup-item Contribution">
            <img className='logo' src="src/assets/about-imgs/contribution.png" alt="" />
            <h3><a href="">Contribution</a></h3>
            <span>We contribute to the national agenda of skill development
                  by supporting the goals and initiatives of the MSDE.
            </span>
          </div>

        </div>
      </div>  
    </div>
  )
}

 export default Aboutup;
