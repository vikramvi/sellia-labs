import React from 'react';
import Select from 'react-select';
import { DropdownField } from './Select.style';

const Dropdown = props => {
  const customStyles = {
    control: () => ({
      display: 'flex',
      backgroundColor: 'transparent',
      color: '#8c8c8c',
      border: '0',
      borderBottom: '1px solid #e2e2e2',
    }),
    valueContainer: base => ({
      ...base,
      padding: '0',
    }),
    placeholder: () => ({
      color: '#8c8c8c',
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    input: () => ({
      color: '#8c8c8c',
    }),
    dropdownIndicator: () => ({
      padding: '8px 0',
    }),
  };
  return (
    <DropdownField>
      <Select {...props} styles={customStyles} />
    </DropdownField>
  );
};
export default Dropdown;
