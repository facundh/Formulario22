import React from 'react';

const Input = ({
    className,
    type,
    value,
    label,
    required,
    onChange, 
    name, 
    inputClassName,
    labelClassName, 
    checked
}) => {
  console.log(inputClassName);
  return (
  <>
  {

    
    <div className={type === 'radio' ? `${className} d-flex mx-2` : className}>
      <label 
      for='formCustom'
      className={labelClassName ? labelClassName : 'form-label'}>
        { label }
      </label>
      <input 
        type={type}
        className={inputClassName ? inputClassName : 'form-control'}
        id='formCustom'
        value={value}
        required={required}
        onChange={onChange}
        name={name}
        checked={checked ? checked : null}
      />
  </div>
  
  }
  </>
  );
};

export default Input;