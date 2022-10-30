import { PortCard } from './PortCard'
import { SkillCard } from './SkillCard'

function Card ({variant, skillName = null, skillLogo = null, progress = null, data = null}) {

    switch(variant){
        case 'PortCard':
            return <PortCard data={data}/>;
        case 'SkillCard': 
            return <SkillCard skillLogo={skillLogo} skillName={skillName} progress={progress}/>
    }
    
}

export { Card };