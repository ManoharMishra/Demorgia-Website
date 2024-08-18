import React, { useRef } from 'react'
import './Testimonials.css'
import { reviews } from './TestimonialsReviewsData';
import Title from '../Title/Title'
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import { FaChevronLeft, FaChevronRight} from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay} from 'swiper/modules'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'


const Testimonials = () => {

  return (
    <div className='testimonials-section'>
      <div className="testimonials-container">
        <div className="testimonials-title">
            <Title title="Testimonials"/>
        </div>

       <div className="testimonials-items-container">
            <div className="testimonials-items slider">
            <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  loop={true}
                  speed={600}
                  navigation={{
                    nextEl: ".next-button",
                    prevEl: ".prev-button",
                    clickable: true,
                  }}
                  autoplay={{ delay: 4000 }}
                  slidesPerView="auto"
                  pagination={{
                    el: ".swiper-pagination",
                    type: "bullets",
                    clickable: true,
                  }
                  }> 
               <div className="next-button">
                  <FaChevronLeft className='next-button-icon'/>
               </div>  
               <div className="prev-button">
                  <FaChevronRight className='prev-button-icon'/>
               </div>
               <div className="swiper-wrapper">
                    {/* <ul ref={slider}>  */}
                        {reviews.map((review) => ( 
                        <SwiperSlide key={review.id} className='swiper-slide'>
                            <div className="testimonials-person slide">
                                <img src={review.image} alt="" className='testimonials-image'/>
                                <h3 className='person-name'>{review.person_name}</h3>
                                <span className='person-description'>{review.person_description}</span>
                                
                                <div className="testimonial-description">
                                    <p><BiSolidQuoteAltLeft className='comma left-comma'/>{review.testimonials_description}<BiSolidQuoteAltRight className='comma right-comma'/></p>  
                                </div> 
                            </div>    
                        </SwiperSlide>       
                    ))}
                    {/* </ul>  */}
                </div>    
                <div className="swiper-pagination">
                    <span className='swiper-pagination-bullet'></span>
                </div>
            </Swiper>    
            </div>
        </div>

      </div>
    </div>
  )
}

export default Testimonials
