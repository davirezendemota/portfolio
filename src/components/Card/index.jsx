import { StyledCard } from './StyledCard';
import { Button } from '../Button'
//import styled from 'styled-components';

// const StyledButton = styled(Button)`
//     color: #fff;
// `;

function PortCard () {

    const techs = ['react.js', 'css', 'html'];

    return (
        <StyledCard>
            <div className="PortCard">
                <div className="tab"></div>
                <span className='title'>Some Project</span>
                <p className='description'>Description of project lorem ipsum lorem ipsum lorem ipsum orem ipsum lorem </p>
                <div className="group__tags">
                    {techs.map((i) => {return (<div key={i} className="tag">{i}</div>)})}
                </div>
                <Button>See</Button>
            </div>
        </StyledCard>
    )
}

function SkillCard () {
    return (
        <StyledCard>
            <span>SkillCard</span>
        </StyledCard>
    )
}


function Card ({type}) {

    return(
        <>
            {(type == "PortCard" && (<PortCard />))}
            {(type == "SkillCard" && (<SkillCard />))}
        </>
    )
}

export { Card };