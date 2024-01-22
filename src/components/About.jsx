import {motion} from 'framer-motion'
import {styles} from  '../styles'
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'
import { Tech } from './index'

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
          Aspiring full stack web developer, passionate about React, Node.js , and the art of building exceptional web experiences 
        </span>
        <br/>
        <br/>
        My journey involves mastering the intricacies of front-end development with React, bringing user interfaces to life, and diving into the back-end magic with Node.js to create robust and scalable web applications.
      </motion.p>
      
      <Tech/>
    </>
  )
}

const AboutSectionWrapper = SectionWrapper(About, 'about');
export default AboutSectionWrapper;