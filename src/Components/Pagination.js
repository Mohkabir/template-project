import React, { useState } from 'react';

const Pagination = ({ postPerPage, totalPost, currentPage, numberOfPages, next, previous }) => {
  return <div className='flex_around pagination'>
    <input 
      className='pageSwitch'
      type="button" 
      onClick={previous} 
      value="Previous"
    />
    <div>
      <span className='currentPage'>{currentPage}</span>
      of <span>{numberOfPages}</span>
    </div>
    <input 
      className='pageSwitch' 
      type="button" 
      onClick={next} 
      value="Next &#x3e;"
    />
  </div>;
};

export default Pagination;