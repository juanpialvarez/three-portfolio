import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../constants/constants';

const ProjectCard = ({ card, handleBack }) => {
  const { name, description, github, website } = card;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className='w-10/12  blue-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white 
            font-bold py-2 px-4 rounded-full relative z-1 top-2 left-1'
        onClick={(event) => handleBack()}
      >
        Back
      </button>
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px]
          flex justify-evenly items-center flex-col'
      >
        <h3 className='text-white text-[20px] font-bold text-center'>{name}</h3>
        <p className='text-white text-[15px]  text-center'>{description}</p>
        <div className='w-full flex justify-between'>
          <a
            className='bg-blue-500 hover:bg-blue-700 text-white 
            font-bold py-2 px-4 rounded-full'
            href={github}
          >
            Git Hub
          </a>
          <a
            className='bg-blue-500 hover:bg-blue-700 text-white 
            font-bold py-2 px-4 rounded-full'
            href={website}
          >
            Project
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = ({ handleBack }) => {
  return (
    <>
      <div className='max-sm:w-full flex flex-wrap justify-center gap-10 w-[500px] h-screen overflow-scroll'>
        {projects.map((project, index) => (
          <ProjectCard key={index} card={project} handleBack={handleBack} />
        ))}
      </div>
    </>
  );
};

export default Projects;
