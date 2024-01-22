import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'


const Tech = () => {
  return (
    <div className='flex justify-center gap-10 flex-wrap'>
      {technologies.map(technologie => (
        <div 
          key={technologie.name}
          className='w-14 h-14 xs:w-20 xs:h-20 sm:w-24 sm:h-24 xl:w-28 xl:h-28'>
            <BallCanvas icon={technologie.icon}/>
        </div>
      ))}
    </div>
  )
}

const TechSectionWrapper = SectionWrapper(Tech, '')
export default TechSectionWrapper

