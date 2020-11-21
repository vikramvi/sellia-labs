import styled from 'styled-components';

const FooterWrapper = styled('footer')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  background-color: #333;
  color: #fff;
  @media (max-width: 576px) {
    flex-direction: column;
  }
  .footer-copyright {
    margin: 0;
    display: block;
    font-size: 16px;
    color: #fff;
    text-align: right;
    line-height: 1.2;

    a {
      color: #fff;
      text-decoration: none;
      transition: 0.15s ease-in-out;

      &:hover {
        color: #30c56d;
      }
    }

    @media screen and (max-width: 576px) {
      font-size: 14px;
      margin-top: 15px;
    }
  }
`;

export default FooterWrapper;
