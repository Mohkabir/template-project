import React, { useState } from 'react';
import Template from './Template';
import { useSelector } from 'react-redux';
import Pagination from './Pagination';
import Loading from './Widget/Loading';
import Error from './Widget/Error';

const Templates = () => {

  const templates = useSelector((state)=> state.templates);
  const sort = useSelector((state)=> state.sortReducer);
  const loading = useSelector((state)=> state.loadingReducer);
  const error = useSelector((state)=> state.errorReducer);

  const [ postPerPage, setPostPerPage] = useState(15);
  const [ currentPage, setCurrentPage] = useState(1);

  const indexOfLastPage = currentPage * postPerPage;
  const indexOfFirstPage = indexOfLastPage - postPerPage;
  const currentTemplate = templates.slice(indexOfFirstPage, indexOfLastPage);
  const numberOfPages = Math.ceil(templates.length / postPerPage);

  const previous = () => {
    if(currentPage > 1){
      setCurrentPage(currentPage - 1);
    }else{  
      alert("last page")
    }
  }
  const next = () => {
    if(currentPage < numberOfPages){
      setCurrentPage(currentPage + 1);
    }else{    
      alert("last page")
    }
  }  

  return <div>
    <div className='flex'>
      <h2>{sort.category} Templates</h2>
      <p>{templates.length} templates</p>
    </div>
    {
      loading === true && error === ''?(<Loading />): 
      error !== ''? (<Error errorMsg={error} />): (
        <div className='flex'>
          {
            currentTemplate.map( (template, index) => (
              <Template data-testId="allTemplate" key={index} template={template}/>
            ))
          }
        </div>
      )
    } 
    <Pagination 
    postPerPage={postPerPage} 
    totalPost={templates}
    currentPage={currentPage} 
    numberOfPages={numberOfPages} 
    next={next} 
    previous={previous} />
  </div>;
};

export default Templates;
