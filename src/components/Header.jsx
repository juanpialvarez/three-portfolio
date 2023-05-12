import React from 'react';
import { styles } from '../styles';
import { linkedIn, github } from '../assets/index.js';

const Header = () => {
  return (
    <div className='my-2 px-4 flex justify-between items-center'>
      <p
        className={`${styles.sectionSubText} text-white text-[18] cursor-pointer flex`}
        onClick={() => window.location.reload()}
      >
        Juan Pablo &nbsp;
        <span>| Developer</span>
      </p>
      <div className='a '>
        <a href='https://www.linkedin.com/in/juanpabloalvarezv/'>
          <img
            src={linkedIn}
            alt='linkedIn'
            className='max-sm:h-8 h-10 inline-block hover:opacity-50'
          />
        </a>
        <a href='https://www.linkedin.com/in/juanpabloalvarezv/'>
          <img
            src={github}
            alt='linkedIn'
            className='max-sm:h-7 h-9 inline-block mx-2 hover:opacity-50'
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
