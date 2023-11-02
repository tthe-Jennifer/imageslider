import React, { useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

import "./Carousel.css";

export const Carousel = ({ data }) => {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === data.slides.length -1 ? 0 : slide+1);
    }
    const previousSlide = () => {
        setSlide(slide === 0 ? data.slides.length-1 : slide-1);
    }

  return (
    <div className='carousel'>
        <BsArrowLeftCircleFill className='arrow leftarrow' onClick={ previousSlide }/>
        {data.slides.map((item, indx) => {
            return <img src={item.src} alt={item.alt} key={indx} className={ slide === indx ? "slide" : "slide slide-hidden" }></img>
        })}
        <BsArrowRightCircleFill className='arrow rightarrow' onClick={ nextSlide }/>
        <span className='indicators'>
            {data.slides.map((_, indx) => {
                return <button key = {indx} onClick={() => setSlide(indx)} className={ slide === indx ? 'indicator' : "indicator indicator-inactive"}></button>
            })}
        </span>
    </div>
  )
}
