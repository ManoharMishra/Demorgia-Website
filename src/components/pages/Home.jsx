import React, {useEffect, useState} from 'react'
import { FaChevronLeft, FaChevronRight} from "react-icons/fa";
import '../Styles.css'
import { Swiper} from 'swiper/react'
import { Pagination, Autoplay} from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'

 const Home = ({ data }) => {

  const [slide, setSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null;

  useEffect(() => {
    timeOut = autoPlay && setTimeout(() => {
      nextSlide();
    }, 3000);
  });

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
  <> 
    <Swiper
        modules={[ Pagination, Autoplay]}
        loop={true}
        speed={600}
        autoplay={{ delay: 3000 }}
        slidesPerView="auto"
        pagination={{
          clickable: true,
        }
        }> 
    <div className="carousel" onMouseEnter={() => {setAutoPlay(false); clearTimeout(timeOut);}} onMouseLeave={() => {setAutoPlay(true)}}>
      <FaChevronLeft onClick={prevSlide} className="arrow arrow-left" />
      {data.map((item, idx) => {
        return (
          <div 
            key={idx}
            className={slide === idx ? "slide fade" : "slide fade slide-hidden"}>
            <img className='image slimage'
            src={item.src}
            alt={item.alt}
          />
          <div className='carousel-text'>
             <h1>{item.title}</h1>
             <p>{item.subtitle}</p>
             <button>Get Started</button>
          </div>
        </div>  
        );
      })}
      <FaChevronRight
        onClick={nextSlide}
        className="arrow arrow-right"
      />
      
      <span className="indicators">
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>  
    </div>
    </Swiper> 
  </>  
  );
};

export default Home;