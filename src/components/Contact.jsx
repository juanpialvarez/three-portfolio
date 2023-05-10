import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { fadeIn, textVariant } from '../utils/motion';
import { styles } from '../styles';

const Contact = (props) => {
  const { handleBack } = props;
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      name,
      company,
      email,
    };

    fetch('https://sheltered-harbor-42224.herokuapp.com/contact', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json',
      },
    }).then((response) => {
      if (response.ok) {
        alert("I'll get back to you shortly");
      } else {
        alert('Something went wrong');
      }
    });
  };

  return (
    <div className='max-sm:w-screen max-sm:h-screen h-[500px] w-[500px]  z-20'>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0 }}
        className='blue-gradient w-full h-full p-[1px] rounded-[20px] flex 
        justify-center items-center'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='rounded-[20px] py-5 px-12 h-full w-full
           overflow-scroll m-auto text-center'
        >
          <div className='w-full h-1/6 '>
            <button
              className={`${styles.sectionSubText} bg-transparent hover:bg-blue-500 text-white 
        hover:text-white py-2 px-4 font-bold  border-2 border-blue-500 hover:border-transparent 
        rounded relative top-0 left-1/2 -translate-x-1/2`}
              onClick={(event) => handleBack()}
            >
              Back
            </button>
          </div>
          <motion.div variants={textVariant()}>
            <h2 className={`${styles.sectionHeadText}`}>Contact.</h2>
          </motion.div>
          <motion.p
            variants={fadeIn('', '', 0.1, 1)}
            className={`${styles.sectionSubText} text-white mt-10 text-center`}
          >
            Calle. Jose Ortega y Gasset 84 <br />
            Madrid, España.
          </motion.p>
          <motion.p
            variants={fadeIn('', '', 0.1, 1)}
            className={`${styles.sectionSubText} text-[#ff36cb] mt-10 mb-10`}
          >
            Phone 1:{' '}
            <a href='tel:+524423175868' className='text-white'>
              {' '}
              +34 910 60 66 82{' '}
            </a>
            <br />
            <br />
            Phone 2:{' '}
            <a href='tel:+524423175868' className='text-white'>
              {' '}
              +52 442 317 5868{' '}
            </a>
            <br />
            <br />
          </motion.p>

          <a
            className={`${styles.sectionSubText} bg-transparent hover:bg-blue-500 text-white 
            hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent 
            rounded`}
            href='mailto:juanpabloalvarezv@gmail.com'
          >
            Email Me
          </a>

          <form
            className='w-full my-20'
            onSubmit={(event) => handleSubmit(event)}
          >
            <div className='flex flex-wrap -mx-3 mb-6'>
              <div className='w-full px-3'>
                <label
                  className={`block uppercase tracking-wide text-white text-xs font-bold mb-2`}
                  htmlFor='name'
                >
                  Name
                </label>
                <input
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border 
                  border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none
                   focus:bg-white focus:border-gray-500'
                  id='name'
                  type='text'
                  placeholder='Jane Doe'
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className='flex flex-wrap -mx-3 mb-6'>
              <div className='w-full px-3'>
                <label
                  className='block uppercase tracking-wide text-white text-xs font-bold mb-2'
                  htmlFor='company'
                >
                  Company
                </label>
                <input
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 
                  rounded py-3 px-4 mb-3 leading-tight focus:outline-none
                   focus:bg-white focus:border-gray-500'
                  id='company'
                  type='text'
                  placeholder='Company'
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
            </div>
            <div className='flex flex-wrap -mx-3 mb-6'>
              <div className='w-full px-3'>
                <label
                  className='block uppercase tracking-wide text-white text-xs font-bold mb-2'
                  htmlFor='email'
                >
                  Email
                </label>
                <input
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                  id='email'
                  type='email'
                  placeholder='janedoe@gmail.com'
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <button
              type='submit'
              className={`${styles.sectionSubText} bg-transparent hover:bg-blue-500 text-white 
            hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent 
            rounded  mt-5`}
            >
              Let me Contact You
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
