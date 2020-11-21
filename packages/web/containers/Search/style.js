import styled from 'styled-components';
import { Col as Cols } from 'react-styled-flexboxgrid';

const FilterMenuWrapper = styled('div')`
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 10px;
`;
const CategoriesWrapper = styled('div')`
  background-color: #ffffff;
  border: 1px solid #e2e2e2;
  overflow: hidden;
  padding: 0;

  @media (max-width: 1023px) {
    display: none;
  }
`;
const PostFoundTextWrap = styled('div')`
  padding-bottom: 10px;
`;

const Holder = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 20px;
  border-bottom: 1px solid #e2e2e2;

  @media (max-width: 1023px) {
    top: 75px;
    position: fixed;
    width: 100vw;
    left: 0;
    padding: 20px 30px;
    background-color: #fff;
    z-index: 1;
  }

  @media (max-width: 768px) {
    top: 60px;
  }
`;

const SideDrawerInner = styled('div')`
  padding: 50px 15px;
  overflow-y: auto;
`;

const Col = styled(Cols)`
  padding: 0 15px;

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    padding: 0 20px;
  }

  @media screen and (max-width: 767px) {
    padding: 0 15px;
  }

  @media (max-width: 1023px) {
    .lg-show {
      display: none;
    }
  }
  @media (min-width: 1024px) {
    .md-hidden {
      display: none;
    }
  }
`;

export {
  FilterMenuWrapper,
  CategoriesWrapper,
  PostFoundTextWrap,
  Holder,
  Col,
  SideDrawerInner,
};
