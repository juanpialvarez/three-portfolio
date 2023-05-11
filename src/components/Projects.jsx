import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../constants/constants';
import { styles } from '../styles';

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
      h-screen mt-44 overflow-scroll z-20 scrollable'
      >
        <button
          className={`${styles.sectionSubText} bg-transparent hover:bg-blue-500 text-white 
          hover:text-white py-2 px-4 font-bold  border-2 border-blue-500 hover:border-transparent 
          rounded absolute top-5 left-5 z-1`}
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
        <div className='w-full h-32' />
      </div>
    </>
  );
};

export default Projects;
