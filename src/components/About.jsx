import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { fadeIn, textVariant } from '../utils/motion';
import picture from '../assets/images/profile-photo.jpg';
import { styles } from '../styles';

const About = () => {
  return (
    <Tilt className='xs:w-[250px] h-[600px] w-[500px] flex'>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className='blue-gradient w-full h-full p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px]
          flex justify-evenly items-center flex-col'
        >
          <img
            src={picture}
            alt='Me'
            className='h-[180px] rounded-[20px] mb-3'
          />
          <motion.div variants={textVariant()}>
            <p className={`${styles.sectionSubText} text-white`}>
              Introduction
            </p>
            <h2 className={styles.sectionHeadText}>Overview.</h2>
          </motion.div>
          <motion.p
            variants={fadeIn('', '', 0.1, 1)}
            className='mt-4 text-secondary text-[17px]
      max-w-3xl leading-[30px] text-white'
          >
            I'm a Junior Software developer with experience with Typescript,
            JavaScript, Python and frameworks such as React, Angular, Node.js,
            Express.js, and Django amongst others. I am a quick learner and
            eager to grow as a developer.
          </motion.p>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default About;
