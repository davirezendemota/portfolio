import { PortCard } from './PortCard'
import { SkillCard } from './SkillCard'

function Card ({variant, skillName = null, skillLogo = null, progress = null}) {

    switch(variant){
        case 'PortCard':
            return <PortCard />;
        case 'SkillCard': 
            return <SkillCard skillLogo={skillLogo} skillName={skillName} progress={progress}/>
    }
    
}

export { Card };