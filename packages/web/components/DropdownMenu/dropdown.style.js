import styled from 'styled-components';

const DropdownWrapper = styled('div')`
  .dropdown-wrapper {
    position: relative;
    cursor: pointer;
  }

  .dropdown_menu {
    position: absolute;
    right: 0;
    top: 100%;
    min-width: 130px;
    display: block;
    padding: 15px 20px;
    background-color: #fff;
    cursor: auto;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.16);
    z-index: 99;
    opacity: 0;
    visibility: hidden;
    transition: 0.2s ease-in-out;
    &.show {
      opacity: 1;
      visibility: visible;
    }

    a {
      display: block;
      text-decoration: none;
      padding: 10px;
      color: #000;
      white-space: nowrap;
    }
  }
`;

export default DropdownWrapper;
