import { useRef, useEffect, useState } from 'react';

import { StyledCarousel } from './StyledCarousel';

// FontAwesome components
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa6';
import { PortCard } from '../Card/PortCard';
import { SkillCard } from '../Card/SkillCard';


function Carousel ({controls = false, variant = null, data = null, children = null}){

  const carousel = useRef(null);
  const carouselWrapper = useRef(null);

  const [showScrollBtns, setShowScrollBtns] = useState(controls)

  const checkResize = () => {
    const carouselW = carousel.current.offsetWidth
    const carouselWrapperW = carousel.current.scrollWidth

    if(carousel && carouselWrapperW > carouselW){
      setShowScrollBtns(true)
    } else {
      setShowScrollBtns(false)
    }
  }

  window.onresize = checkResize

  useEffect(checkResize)

    const goLeft = (e) => { // take offset width and increase to scroll position
        e.preventDefault();
        
        //console.log(carousel.current.offsetWidth);
        carousel.current.scrollLeft -= carousel.current.offsetWidth; 
    }
    
    const goRight = (e) => { // take offset width and decrease to scroll position
        e.preventDefault();
        
        //console.log(carousel.current.offsetWidth);
        carousel.current.scrollLeft += carousel.current.offsetWidth; 
    }

    function renderSwitch(variant){
        switch(variant){
            case 'projects':
                return data.map((item, idx) => (<PortCard key={idx} data={item}/>));
            case 'skills':
                return data.map((item, idx) => (<SkillCard key={idx} data={item}/>));
            default:
                return children;
        }
    }

    return (
        <StyledCarousel ref={carouselWrapper} className="relative">
            {showScrollBtns && <FaCaretLeft onClick={goLeft} className="scrollBtn min-w-fit absolute left-2 opacity-50"/>}
            <div className="carousel__group" ref={carousel}>
                {renderSwitch(variant)}
            </div>
            {showScrollBtns && <FaCaretRight onClick={goRight} className="scrollBtn min-w-fit absolute right-2 opacity-50"/>}
        </StyledCarousel>
    )
}

export { Carousel };
