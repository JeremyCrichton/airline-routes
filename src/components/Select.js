import React from 'react';

const Select = ({ options, onSelect, value, valueKey, titleKey, allTitle }) => {
  return (
    <select
      value={value}
      onChange={e => onSelect(parseInt(e.target.value, 10))}
    >
      <option value=''>{allTitle}</option>
      {options.map(airline => (
        <option key={valueKey} value={airline[valueKey]}>
          {airline[titleKey]}
        </option>
      ))}
    </select>
  );
};

export default Select;
