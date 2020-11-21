import React from 'react';
import InputField from './Input.style';

// get input focus class
const getInputFocusClass = value => {
  if (value !== '' && value != null) {
    return 'is-focus';
  } else {
    return '';
  }
};

const input = props => {
  let inputElement;
  switch (props.elementType) {
    case 'input':
      inputElement = (
        <input
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
          onBlur={props.onBlur}
        />
      );
      break;
    case 'select':
      inputElement = (
        <select value={props.value} onChange={props.changed}>
          {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
      );
      break;
    case 'textarea':
      inputElement = (
        <textarea
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
          rows={props.rows}
        />
      );
      break;
    default:
      inputElement = <input {...props} value={props.value} />;
  }
  return (
    <InputField
      style={props.style}
      className={`${getInputFocusClass(props.value)}`}
    >
      {inputElement}
      <span className="highlight" />
      <label htmlFor={props.label}> {props.label} </label>
    </InputField>
  );
};

export default input;
