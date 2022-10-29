import { PortCard } from './PortCard'
import { SkillCard } from './SkillCard'

function Card ({variant}) {

    switch(variant){
        case 'PortCard':
            return <PortCard />;
        case 'SkillCard': 
            return <SkillCard />
    }
    
}

export { Card };