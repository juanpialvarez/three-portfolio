import React from 'react';
import DeskCanvas from './canvas/Desk';
import Header from './Header';

const Main = () => {
  return (
    <div className='h-screen'>
      <Header />
      <DeskCanvas />
    </div>
  );
};

export default Main;
