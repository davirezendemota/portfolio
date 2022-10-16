import { StyledCard } from './StyledCard';
import { Button } from '../Button'

function PortCard () {

    const tecs = ['react.js', 'css', 'html'];

    const PortButton = styled(Button)`
        
    `;

    return (
        <StyledCard>
            <div className="PortCard">
                <span className='title'>Some Project</span>
                <p className='description'>Description of project lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                {tecs.map((i) => {return (<div key={i}>{i}</div>)})}
                <PortButton>See</PortButton>
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