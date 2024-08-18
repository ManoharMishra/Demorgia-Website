import React from 'react'
import './Partners.css'
import Title from '../Title/Title'
import { partnersData } from './PartnersData'
import { partnersData2 } from './PartnersData'
import { FaChevronLeft, FaChevronRight} from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay} from 'swiper/modules'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'

const Partners = () => {
  return (
    <div className='partners-section'> 
      <div className="partners-container">
        <div className="partners-title">
          <Title title="Partenr's"/>
        </div>

        <div className="partners-items">

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
            } className='swiper-bigscreen'> 
            <div className="next-button">
              <FaChevronLeft className='next-button-icon'/>
            </div>  
            <div className="prev-button">
              <FaChevronRight className='prev-button-icon'/>
            </div>  
           { partnersData.map((partners) => ( 
            <SwiperSlide key={partners.id} className='swiperSlide'>
              <div className="partners-item">
                  <img src={partners.image1} alt="" />
                  <img src={partners.image2} alt="" />
                  <img src={partners.image3} alt="" />
                  <img src={partners.image4} alt="" />
                  <img src={partners.image5} alt="" />
                  <img src={partners.image6} alt="" />
              </div>
            </SwiperSlide>
            ))}
            <div className="swiper-pagination">
              <span className='swiper-pagination-bullet'></span>
            </div>
          </Swiper> 
          
          
            <Swiper
              modules={[ Pagination, Autoplay]}
              loop={true}
              speed={600}
              autoplay={{ delay: 4000 }}
              slidesPerView="auto"
              pagination={{
                el: ".swiper-pagination",
                type: "bullets",
                clickable: true,
              }
              } className='swiper-smallscreen'> 
            { partnersData2.map((partner) => ( 
              <SwiperSlide key={partner.id} className='swiperSlide'>
                <div className="partners-item">
                    <img src={partner.image1} alt="" />
                    <img src={partner.image2} alt="" />
                    <img src={partner.image3} alt="" />
                </div>
              </SwiperSlide>
              ))}
              <div className="swiper-pagination">
                <span className='swiper-pagination-bullet'></span>
              </div>
            </Swiper>
          
        </div>
        
      </div>
    </div>
  )
}

export default Partners
