import React from 'react';

const sortByName = unorderedArray =>
  unorderedArray.sort((a, b) =>
    a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1
  );

const Select = ({ options, onSelect, value, valueKey, titleKey, allTitle }) => {
  return (
    <select value={value} onChange={e => onSelect(e.target.value)}>
      <option value='all'>{allTitle}</option>
      {sortByName(options).map(option => (
        <option key={option[valueKey]} value={option[valueKey]}>
          {option[titleKey]}
        </option>
      ))}
    </select>
  );
};

export default Select;
