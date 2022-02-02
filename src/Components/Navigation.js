import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { 
  setCategory, 
  sortByCategory, 
  sortByOrderDesending, 
  sortByOrderAscending, 
  sortByDateAscending, 
  sortByDateDesending, 
  sortBySearch } 
from '../Redux/actions/SortAction';
import Select from './Widget/Select';
import searchicon from '../Asset/images/searchicon.svg';

const Navigation = () => {
  const [ searchTemplate, setSearchTemplate] = useState('');
  const dispatch = useDispatch();

  // handle Sorting of templates with search
  const handleSearchTemplate = (e) => {
    setSearchTemplate(e.target.value);
    dispatch(sortBySearch(e.target.value));
  }

  // handle Sorting of templates with select
  const handleSelect = (e) => {
    if(e.target.name === 'category'){
      if(e.target.value === 'All'){
        return null;
      }else{
        dispatch(setCategory(e.target.value));
        dispatch(sortByCategory(e.target.value));
      }
    }
    if(e.target.name === 'order'){
      if(e.target.value === 'Ascending'){
        dispatch(sortByOrderAscending());
      }else if(e.target.value === 'Descending'){
        dispatch(sortByOrderDesending());
      }else if(e.target.value === 'Default'){
        return null;
      }
    }
    if(e.target.name === 'date'){
      if(e.target.value === 'Ascending'){
        dispatch(sortByDateAscending());
      }else if(e.target.value === 'Descending'){
        dispatch(sortByDateDesending());
      }else if(e.target.value === 'Default'){
        return null;
      }
    }
  }

  const categories = {
      label: 'Category',
      name: 'category',
      options: ['All', 'E-commerce','Health', 'Education']
    };
  const order = {
      label: 'Order',
      name: 'order',
      options: ['Default', 'Ascending', 'Descending']
    };
  const dates = {
      label: 'Date',
      name: 'date',
      options: ['Default', 'Ascending', 'Descending']
    };

  return <div className='flex'>
    <div className="search">
      <input type="text" placeholder='Search Templates' onChange={handleSearchTemplate} value={searchTemplate}/>
      <img src={searchicon} alt="searchicon" />
    </div>
    <div className='sort_wrapper'>
      <span>Sort By:</span>
      <div className="sort flex_between"> 
        <Select sortProperties={categories} handleSelect={handleSelect}/>
        <Select sortProperties={order} handleSelect={handleSelect}/>
        <Select sortProperties={dates} handleSelect={handleSelect}/>
      </div>
    </div>
  </div>;
};

export default Navigation;
