
import React from 'react';
import styled from '@emotion/styled';
import Select from 'react-select';

function SelectDropdown({
  onChange, options, value, className, ...props
}) {
  const defaultValue = (options, value) => {
    return options ? options.find((option) => option.value === value) : '';
  };

  return (

    <StyledSelect
      value={defaultValue(options, value)}
      onChange={(value) => {
        onChange(value)
      }}
      className={className}
      options={options}
      {...props}
    />

  )
}

const StyledSelect = styled(Select)`
    background: #FFFFFF;
    border: 1px solid #BDBDBD;
    box-sizing: border-box;
    padding: 2px 12px;
    width: 100%;
    border-radius: 32px !important;
    margin-bottom:15px;

    .css-1s2u09g-control{
    border:none;
    outline:none;

    &:focus{
      outline:none;
    }
  }
`;

export default SelectDropdown;
