import { StyledCard } from './StyledCard';
import { Button } from '../Button'
import styled from 'styled-components';

const StyledPortCard = styled(StyledCard)`
    
    background-color: var(--blue-1);
    width: 18.75rem;
    display: flex;
    flex-direction: column;
    flex: 0;
    color: var(--white-1);
    font-weight: 500;
    padding: .6rem 1rem 1rem 1rem;
    border-radius: .5rem;
    position: relative;
    gap: .6rem;

    .title{
        font-size: 1.25rem;
    }
    .description{
        font-size:1rem;
        font-weight: 400;
        overflow-y: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }
    button{
        font-size: 1rem;
        padding: 0.25rem 0.6rem;
        margin: .5rem 0 0 auto;
        background-color: var(--blue-2);
        color:var(--white-1);
        border-color: var(--blue-2);
    }
    .group__tags{
        display: flex;
        gap: .6rem;
        width: 100%;
        overflow: hidden;
    }
    .tag{
        padding: 0.25rem 0.6rem;
        background-color: var(--blue-1-1);
        border-radius: .5rem;
        text-transform: uppercase;
    }
    .tab{
        z-index: -1;
        position: absolute;
        top: -0.6rem;
        left: 1rem;
        border-radius: 1rem;
        width: 30%;
        height: 1rem;
        background-color: var(--blue-2);
    }
`;

function PortCard () {

    const techs = ['react.js', 'css', 'html'];

    return (
        <StyledPortCard>
            <div className="tab"></div>
            <span className='title'>Some Project</span>
            <p className='description'>Description of project lorem ipsum lorem ipsum lorem ipsum orem ipsum lorem </p>
            <div className="group__tags">
                {techs.map((i) => {return (<div key={i} className="tag">{i}</div>)})}
            </div>
            <Button>See</Button>
        </StyledPortCard>
    )
}

export { PortCard };