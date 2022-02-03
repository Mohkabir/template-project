import React from 'react';
import notFound from '../../Asset/images/not-found.jpg';
import { useSelector } from 'react-redux';

const NotFound = () => {


  const searchedTemplates = useSelector((state)=> state.templates.searchedTemplates);

  return <div className='notFound'>
    <h2>
      <span style={{color:"red"}}>Not Found !!!</span><br/>
      Template With the Name 
      <span style={{color:"blue", fontSize:'1.2em', margin:'0 5px'}}>{searchedTemplates}</span> Does Not Exist</h2>
    <img className='img' src={notFound} alt="notFound" />
  </div>;
};

export default NotFound;
