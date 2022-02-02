import React from 'react';
import infoicon from '../Asset/images/infoicon.svg';

const Alert = () => {
  return <div className='infoAlert'>
    <div className='wrapper flex_center'> 
      <img src={infoicon} alt="infoicon" />
      <span>Tada! Get started with a free template. Can’t find what you are looking for? Search from the 1000+ available templates</span>
    </div>
  </div>;
};

export default Alert;
