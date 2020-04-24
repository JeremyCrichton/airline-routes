import React from 'react';

const Select = ({ options, onSelect, value, valueKey, titleKey, allTitle }) => {
  return (
    <select value={value} onChange={e => onSelect(e.target.value)}>
      <option value=''>{allTitle}</option>
      {options.map(option => (
        <option key={option[valueKey]} value={option[valueKey]}>
          {option[titleKey]}
        </option>
      ))}
    </select>
  );
};

export default Select;
