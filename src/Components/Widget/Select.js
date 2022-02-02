import React from 'react';

const Select = ({sortProperties, handleSelect}) => {

  const {name, options, label } = sortProperties;

  return(
    <div className='select'>
      <label>{label}</label>
      <select name={name} onChange={handleSelect}>
        {options?.map( (option, index) =>(
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
