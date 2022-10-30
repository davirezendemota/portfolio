import { useRef } from 'react';

import { StyledCarousel } from './StyledCarousel';

// FontAwesome components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
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
            {controls && <FontAwesomeIcon onClick={goLeft} icon={faCaretLeft} className="scrollBtn"/>}
            <div className="carousel__group" ref={carousel}>
                {renderSwitch(variant)}
            </div>
            {controls && <FontAwesomeIcon onClick={goRight} icon={faCaretRight} className="scrollBtn"/>}
        </StyledCarousel>
    )
}

export { Carousel };