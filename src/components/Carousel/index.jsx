import { useRef } from 'react';

import { StyledCarousel } from './StyledCarousel';

// FontAwesome components
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa6';
import { PortCard } from '../Card/PortCard';
import { SkillCard } from '../Card/SkillCard';


function Carousel ({controls = false, variant = null, data = null, children = null}){

    const carousel = useRef(null);
    
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
        <StyledCarousel>
            {controls && <FaCaretLeft onClick={goLeft} className="scrollBtn"/>}
            <div className="carousel__group" ref={carousel}>
                {renderSwitch(variant)}
            </div>
            {controls && <FaCaretRight onClick={goRight} className="scrollBtn"/>}
        </StyledCarousel>
    )
}

export { Carousel };
