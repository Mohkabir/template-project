import React from 'react';
import moment  from 'moment';

const Template = ({template}) => {

  const date = moment(template?.createdAt).format('LLL');

  return <div className='card' data-testid="template">
    <div>
      <h1> {template?.name}</h1>
      <p>{template?.description}</p>
      <p>
        <small style={{fontSize:'0.7em'}}>
          <strong>Category</strong>: 
          {template?.category.map(category => (<span style={{margin:'0 1px'}}>  {category},</span>))}
          </small>
      </p>
    </div>
    <div className='card_footer flex_between'>
      <a className='green' href={template?.link}>Use Template</a>
      <small><span className=''>{date}</span></small>
    </div>
  </div>;
};

export default Template;
