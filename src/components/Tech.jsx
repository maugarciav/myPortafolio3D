import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'


const Tech = () => {
  return (
    <div className='flex justify-center gap-10 flex-wrap'>
      {technologies.map(technologie => (
        <div 
          key={technologie.name}
          className='w-28 h-28'>
            <BallCanvas icon={technologie.icon}/>
        </div>
      ))}
    </div>
  )
}

const TechSectionWrapper = SectionWrapper(Tech, '')
export default TechSectionWrapper

