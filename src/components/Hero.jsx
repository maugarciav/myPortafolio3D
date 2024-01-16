// import React from 'react'
// import {motion} from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-forthy'/>
          <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-forthy' />

        </div>
        <div>
        <h1 className={`${styles.heroHeadText}`}>Hi, I&apos;m <span className='text-forthy'>Mauricio 🚀</span></h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>A Computer Science student at Tecnológico de Monterrey. Eager to learn and connect with amazing people. </p>
        </div>
      </div>
        <ComputersCanvas/>
    </section>  
  )
}

export default Hero