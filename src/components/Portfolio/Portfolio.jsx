import React, { useEffect, useState } from 'react'
import './Portfolio.css'
import Title from '../Title/Title'
import { FaEye, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { FaXmark } from "react-icons/fa6";

 const images = [
   {
    id:1 ,
    image: "src/assets/portfolio/ncvet1.jpg",
    tag: "ncvet recognition"
   },

   {
    id:2 ,
    image: "src/assets/portfolio/perform1.jpg",
    tag: "best performing agency"
   },

   {
    id:3 ,
    image: "src/assets/portfolio/jobmela1.jpg",
    tag: "job mela"
   },

   {
    id:4 ,
    image: "src/assets/portfolio/ncvet2.jpg",
    tag: "ncvet recognition"
   },

   {
    id:5 ,
    image: "src/assets/portfolio/jobmela2.jpg",
    tag: "job mela"
   },

   {
    id:6 ,
    image: "src/assets/portfolio/perform2.jpg",
    tag: "best performing agency"
   },

   {
    id:7 ,
    image: "src/assets/portfolio/jobmela3.jpg",
    tag: "job mela"
   },

   {
    id:8 ,
    image: "src/assets/portfolio/ncvet3.jpg",
    tag: "ncvet recognition"
   },

   {
    id:9 ,
    image: "src/assets/portfolio/perform3.jpg",
    tag: "best performing agency"
   }

 ]

const Portfolio = () => {

   const [tag, setTag] = useState('all');
   const [ filtererdImages, setFiltererdImages] = useState([]);
   const [slideNumber, setSlideNumber] = useState(0)
   const [openModal, setOpenModal] = useState(false)

   useEffect(() => {
     tag == "all" ? setFiltererdImages(images) : setFiltererdImages(images.filter(image => image.tag == tag))
   },[tag])

   const TagButton = ({name, handleSetTag, tagActive}) => {
    return <button onClick={() => handleSetTag(name)} className={`img-heading ${tagActive ? 'active' : null}`}>{name.toUpperCase()}</button>  
   }
   
   //Open Gallery
   const handleOpenModal = (id) => {
      setSlideNumber(id-1)
      setOpenModal(true)
   }

   //Close Gallery
   const handleCloseModal = () => {
      setOpenModal(false)
   }

   openModal ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto" ;

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0 
    ? setSlideNumber( images.length -1 ) 
    : setSlideNumber( slideNumber - 1 )
  }

  // Next Image  
  const nextSlide = () => {
    slideNumber + 1 === images.length 
    ? setSlideNumber(0) 
    : setSlideNumber(slideNumber + 1)
  }

  return (
    <div className='portfolio-section'>
      <div className="portfolio container">

        <div className="portfolio-title">
          <Title title="Our Portfolio"/>
        </div>
        <div className="img-headings">
          <TagButton name="all" handleSetTag={setTag} tagActive={ tag == 'all' ? true : false}/>
          <TagButton name="ncvet recognition" handleSetTag={setTag} tagActive={ tag == 'ncvet recognition' ? true : false}/>
          <TagButton name="best performing agency" handleSetTag={setTag} tagActive={ tag == 'best performing agency' ? true : false}/>
          <TagButton name="job mela" handleSetTag={setTag} tagActive={ tag == 'job mela' ? true : false}/>
        </div>  
        
        <div className="filterImage-container">
          {images && filtererdImages.map((image) =>

            <div key={image.id} className="portfolio-items">
              <div className="portfolio-item ncvet-recognition">
                <p>
                  <div className="p-item">
                    <img src={image.image} alt="" />
                      <div className="caption">
                        <FaEye className='caption-icon single' onClick={() => handleOpenModal(image.id)}/>
                      </div>  
                  </div>
                  <span className='img-title'>{image.tag}</span>
                </p>
              </div>
            </div>

          )}
        </div>

        {openModal && 
          <div className='sliderWrap'>
            <FaXmark className='btnClose' onClick={handleCloseModal}  />
            <FaChevronLeft className='btnPrev' onClick={prevSlide} />
            <FaChevronRight className='btnNext' onClick={nextSlide} />
            <div className='fullScreenImage'>
              <img src={images[slideNumber].image} alt='' />
              <p>
                {images[slideNumber].tag.toUpperCase()}
                <br/>
                <span className='imageNumber'>Image {slideNumber+1} of {images.length}</span>
              </p>
            </div>
          </div>
        }

      </div>
    </div>
  )
}

export default Portfolio
