import styled from 'styled-components';

const InputField = styled('div')`
  position: relative;
  margin-bottom: 2rem;
  input,
  textarea,
  select {
    font-size: 16px;
    padding: 10px 0;
    display: block;
    width: 100%;
    border: none;
    color: #8c8c8c;
    border-bottom: 1px solid #e2e2e2;
  }
  input:focus,
  textarea:focus,
  select:focus {
    outline: none;
  }
  label {
    color: #8c8c8c;
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 0;
    top: 10px;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }

  &.is-focus label,
  input:focus ~ label,
  input:valid ~ label,
  textarea:focus ~ label,
  textarea:valid ~ label,
  select:focus ~ label,
  select:valid ~ label {
    top: -20px;
    font-size: 14px;
    color: #595959;
  }
  .highlight {
    position: absolute;
    height: 1px;
    top: auto;
    left: 50%;
    bottom: 0;
    width: 0;
    pointer-events: none;
    transition: all 0.2s ease;
  }
  input:focus ~ .highlight,
  textarea:focus ~ .highlight,
  select:focus ~ .highlight {
    width: 100%;
    height: 2px;
    background-color: #30c56d;
    left: 0;
  }
`;
export default InputField;
