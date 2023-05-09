import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../constants/constants';

const ProjectCard = ({ project, handleViewProject }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className='w-10/12  blue-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px]
          flex justify-evenly items-center flex-col cursor-pointer'
        onClick={(event) => handleViewProject(project)}
      >
        <h3 className='text-white text-[20px] font-bold text-center'>
          {project.name}
        </h3>
        <p className='text-white text-[15px]  text-center'>
          {project.description}
        </p>
      </div>
    </motion.div>
  );
};

const Projects = ({ handleBack, handleViewProject }) => {
  return (
    <>
      <div
        className='max-sm:w-full flex flex-wrap justify-center gap-10 w-[500px] 
      h-screen mt-28 overflow-scroll z-20'
      >
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white 
            font-bold py-2 px-4 rounded-full absolute z-1 top-2 left-2'
          onClick={(event) => handleBack()}
        >
          Back
        </button>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            handleBack={handleBack}
            handleViewProject={handleViewProject}
          />
        ))}
        <div className='w-full h-20' />
      </div>
    </>
  );
};

export default Projects;
