import React from 'react';

const Template = ({template}) => {

  return <div className='card' data-testId="template">
    <div>
      <h1> {template?.name} </h1>
      <p> {template?.description}</p>
    </div>
    <div className='card_footer'>
      <a className='green' href={template?.link}>Use Template</a>
    </div>
  </div>;
};

export default Template;
