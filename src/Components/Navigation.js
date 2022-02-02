import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setCategory, sortByCategory, sortByOrderDesending, sortByOrderAscending, sortByDefault, sortByDateAscending, sortByDateDesending } from '../Redux/actions/SortAction';
import Select from './Widget/Select';
import searchicon from '../Asset/images/searchicon.svg';

const Navigation = () => {
  // const [ category, setCategory] = useState('All');
  // const [ order, setOrder] = useState('Default');
  // const [ date, setDate] = useState('Default');
  const dispatch = useDispatch();
  // const sort = useSelector((state)=> state.sortReducer);

  const handleSelect = (e) => {
    if(e.target.name === 'category'){
      console.log(e.target.value, "cat value log")
      dispatch(setCategory(e.target.value));
      dispatch(sortByCategory(e.target.value));
    }
    if(e.target.name === 'order'){
      if(e.target.value === 'Ascending'){
        dispatch(sortByOrderAscending());
      }else if(e.target.value === 'Descending'){
        dispatch(sortByOrderDesending());
      }else if(e.target.value === 'Default'){
        dispatch(sortByDefault());
      }
    }
    if(e.target.name === 'date'){
      if(e.target.value === 'Ascending'){
        dispatch(sortByDateAscending());
      }else if(e.target.value === 'Descending'){
        dispatch(sortByDateDesending());
      }else if(e.target.value === 'Default'){
        dispatch(sortByDefault());
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
      <input type="text" placeholder='Search Templates'/>
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
