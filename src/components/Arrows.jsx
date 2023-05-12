import React from 'react';
import { styles } from '../styles';

const Arrows = () => {
  return (
    <div className='hidden w-screen h-20 max-sm:flex justify-between'>
      <div className='w-1/4'>
        <div className='arrow2 arrow2-first' />
        <div className='arrow2 arrow2-second' />
      </div>
      <h2
        className={`${styles.sectionSubText} text-[#ff36cb] text-lg blink-text relative top-10`}
      >
        Swipe
      </h2>
      <div className='w-1/4'>
        <div className='arrow arrow-first' />
        <div className='arrow arrow-second' />
      </div>
    </div>
  );
};

export default Arrows;
