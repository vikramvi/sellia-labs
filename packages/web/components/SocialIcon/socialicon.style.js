import styled from 'styled-components';

const SocialIconWrapper = styled('div')`
  position: relative;

  a {
    display: inline-block;
    color: #fff;
    text-decoration: none;
    transition: 0.15s ease-in-out;
    margin: 0 0.8em;

    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }

    &:hover {
      > div {
        color: #30c56d !important;
      }
    }

    > div {
      display: block;
      transition: 0.15s ease-in-out;
    }
  }
`;

export default SocialIconWrapper;
