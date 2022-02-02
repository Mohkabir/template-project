import React, { useState, useEffect } from 'react';
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
  console.log(templates, "templates log")

  const [ postPerPage, setPostPerPage] = useState(15);
  const [ currentPage, setCurrentPage] = useState(1);

  const indexOfLastPage = currentPage * postPerPage;
  const indexOfFirstPage = indexOfLastPage - postPerPage;

  // const [ currentTemplate, setCurrentTemplate] = useState(templates.slice(indexOfFirstPage, indexOfLastPage));

  const currentTemplate = templates.slice(indexOfFirstPage, indexOfLastPage);

  const numberOfPages = Math.ceil(templates.length / postPerPage);

  // useEffect(() => {
  //   setCurrentTemplate(templates.slice(indexOfFirstPage, indexOfLastPage));

  //   if(sort.category === 'Health'){
  //     setCurrentTemplate(currentTemplate.filter(temp => {
  //       return temp.category.include('Health');
  //     }))
  //   }else if(sort.category === 'E-commerce'){
  //     setCurrentTemplate(currentTemplate.filter(temp => {
  //       return temp.category.include('E-commerce');
  //     }))
  //   }else if(sort.category === 'Education'){
  //     setCurrentTemplate(currentTemplate.filter(temp => {
  //       return temp.category.include('Education');
  //     }))
  //   }else{
  //     setCurrentTemplate(templates.slice(indexOfFirstPage, indexOfLastPage));
  //   }
    
  // }, [sort])

  const previous = () => {
    if(currentPage > 1){
      setCurrentPage(currentPage - 1);
    }else{  
      alert("last page")
    }
    console.log(currentPage,"currentPage log")
  }

  const next = () => {
    if(currentPage < numberOfPages){
      setCurrentPage(currentPage + 1);
    }else{  
      
      alert("last page")
    }
    console.log(currentPage,"currentPage log")
  }  

  // const acend = arr.sort((a, b) => a.created.localeCompare(b.created));
  // const decend = arr.sort((a, b) => a.created.localeCompare(b.created));

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
                <Template key={index} template={template}/>
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
