import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { github, linkedIn, resume } from '../assets';
import { personalLinks } from '../constants';

const SocialIcons = () => {
  const socialIcons = [
    { icon: resume, link: personalLinks.resumeLink },
    { icon: linkedIn, link: personalLinks.linkedInLink },
    { icon: github, link: personalLinks.githubLink },
  ];

  return (
    <div className="flex">
      {socialIcons.map((social, index) => (
        <div
          key={index}
          onClick={() => window.open(social.link, '_blank')}
          className="black-gradient mt-8 w-12 h-12 rounded-full flex justify-center items-center cursor-pointer hover:scale-125 mx-4"
        >
          <img src={social.icon} alt={`social-icon-${index}`} className="object-contain" />
        </div>
      ))}
    </div>
  );
};

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-forthy' />
          <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-forthy' />
        </div>
        <div className='z-10'>
          <h1 className={`${styles.heroHeadText}`}>Hi, I&apos;m <span className='text-forthy'>Mauricio 🚀</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>A Computer Science student at Tecnológico de Monterrey. Eager to learn and connect with amazing people. </p>

          <SocialIcons />
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center item-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div className='w-3 h-3 rounded-full bg-secondary mb-1'
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
