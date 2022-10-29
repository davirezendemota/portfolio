import { useRef } from 'react';

import { StyledCarousel } from './StyledCarousel';

// FontAwesome components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';



function Carousel ({children}){

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

    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

    return (
        <StyledCarousel>
            <FontAwesomeIcon onClick={goLeft} icon={faCaretLeft}/>
            <div className="carousel__group" ref={carousel}>

                {arr.map(i => { /*TEMPORARY*/
                    return (
                        <div key={i}>
                            {children}
                        </div>
                    )
                })}
            </div>
            <FontAwesomeIcon onClick={goRight} icon={faCaretRight}/>
        </StyledCarousel>
    )
}

export { Carousel };