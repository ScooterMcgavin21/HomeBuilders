import React, { useRef, useState } from 'react';
//import { Button } from '../../Button';
//import { Button } from '../../ButtonElements';
import { Button } from '../../Button';
import { Arrow, HeroContainer, HeroContent, HeroImage, HeroSlide, HeroSlider, HeroWrapper, NextArrow, PrevArrow, SliderButtons } from './HeroSectionElements';
function HeroSection({ slides }) {
  // state and functions current image slider
  const [current, setCurrent] = useState(0);
  // look at slides and check the length
  const length = slides.length;
  const timeout = useRef(null); // check value on

  // // Image autoswitch
  // useEffect(() => {
  //   const nextSlide = () => {
  //     setCurrent(current => (current === length - 1 ? 0 : current + 1))
  //   };
  //   timeout.current = setTimeout(nextSlide, 3000);

  //   return function () {
  //     if(timeout.current) {
  //       clearTimeout(timeout.current);
  //     }
  //   };
  // }, [current, length]);

  const nextSlide = () => {
    if(timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === length - 1 ? 0 : current + 1);
    //console.log(current);
  };

  // reverse order
  const prevSlide = () => {
    if(timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === 0 ? length - 1 : current - 1);
    //console.log(current);
  };
  // if no data return null
  if(!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  // const fadeAnimation = {
  //   hidden: {opacity: 0},
  //   visible: {opacity: 1, transition: {duration: 0.8}},
  //   exit: {opacity: 0}
  // }

  return (
    <>
    <HeroContainer>
      <HeroWrapper>
        {slides.map((slide, index) => {
          return (
            <HeroSlide key={index}>
              {index === current && (
                <HeroSlider>
                <HeroImage src={slide.image} alt={slide.alt} />
                <HeroContent>
                  <h1>{slide.title}</h1>
                  <Button
                    to={slide.path}
                    primary='true'
                    css={`max-width: 160px;`}
                  >
                      {slide.label}
                      <Arrow />
                  </Button>
                </HeroContent>
              </HeroSlider>
              )}
              
            </HeroSlide>
          )
        })}
        <SliderButtons>
          <PrevArrow onClick={prevSlide} />
          <NextArrow onClick={nextSlide} />
        </SliderButtons>
      </HeroWrapper>
    </HeroContainer>
    </>
  )
}

export default HeroSection;

{/* <Button
            to='signup'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />} */}
