import { StyledCarousel } from './StyledCarousel';
import { Card } from '../Card';

function Carousel (){
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

    return (
        <StyledCarousel>
                {arr.map(item => { /*TEMPORARY*/
                    return (
                        <div key={item}>
                            <Card/>
                        </div>
                    )
                })}
        </StyledCarousel>
    )
}

export { Carousel };