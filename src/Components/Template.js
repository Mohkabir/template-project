import React from 'react';

const Template = ({template}) => {



  const { name, description, link, category } = template; 

  return <div className='card'>
    <div>
      <h1> {name}: {category} </h1>
      <p> {description} </p>
    </div>
    <div className='card_footer'>
      <a className='green' href={link}>Use Template</a>
    </div>
  </div>;
};

export default Template;
