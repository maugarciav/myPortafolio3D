import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'
import { styles } from '../styles'
import {github} from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const ProjectCard = ({ project, index }) => {
  return(
    <motion.div 
      variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
    >
      <Tilt
        options={{
          max: 15,
          scale: 1,
          speed: 10
        }}
        className='bg-tertiary p-5 rounded-2xl  sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img 
            src={project.image} 
            alt={project.name} 
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div 
              onClick={() => window.open(project.source_code_link, '_blank')}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img 
                src={github}
                alt='github'
                className='object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>
            {project.name}
          </h3>
          <p className='mt-2 text-secondary text-[14px]'>
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 justify-end mt-2">
          {project.tags.map(tag => (
            <p 
              key={tag.name} 
              className='text-[14px] text-secondary font-bold  flex items-center'
            >
              <br/>
              {tag.name}

            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work.</p>
        <h2 className={styles.sectionHeadText}>Projects 💼</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.div 
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30]px'
        >
        </motion.div>
        <div className='mt-10 flex flex-wrap gap-7 justify-center'>
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              index={index}
              project={project}
            /> 
          ))}
        </div>
      </div>
    </>
  )
}

const WorkSectionWrapper = SectionWrapper(Works, '')
export default WorkSectionWrapper