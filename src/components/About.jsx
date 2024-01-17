import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'
import {styles} from  '../styles'
import {services} from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'


const ServiceCard = ({index, title, icon}) => {
  return(
    <Tilt className='xs:w-[175px] w-full'>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max:45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[175px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-14 h-14 object-contain'/>
          <h3 className='text-white text-[14px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>

    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        <span className='font-bold '>
          Aspiring Full Stack Web Developer | Passionate about React, Node, and the Art of Building Exceptional Web Experiences 
        </span>
        <br/>
        <br/>
        My journey involves mastering the intricacies of front-end development with React, bringing user interfaces to life, and diving into the back-end magic with Node.js to create robust and scalable web applications.
      </motion.p>

      <div className='mt-20 flex justify-center gap-10 flex-wrap'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} 
            index={index}
            {...service}
          />
        ))}

      </div>
    </>
  )
}

const AboutSectionWrapper = SectionWrapper(About, 'about');
export default AboutSectionWrapper;