import styled from "styled-components";

export const NavSidebarWrapper = styled("div")`
  box-sizing: border-box;
  display: block;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 295px;
  height: 100%;
  float: left;
  overflow-y: scroll;
  overflow-x: hidden;
  top: 200;
  left: 0;
  z-index: 10;
  background-color: #ffffff;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.06);
  padding-top: 66;
  padding-bottom: ${(props) => props.paddingY || 0};
  padding-left: ${(props) => props.paddingX || "2rem"};
  padding-right: ${(props) => props.paddingX || "2rem"};
  @media (min-width: 769px) {
    .sm-hidden {
      display: none;
    }
  }

  @media (min-width: 992px) {
    .md-hidden {
      display: none;
    }
  }
  @media (max-width: 768px) {
    .md-show {
      display: none;
    }
    height: 60px;
    padding-left: ${(props) => props.paddingX || "1rem"};
    padding-right: ${(props) => props.paddingX || "0"};
  }
  @media (max-width: 992px) {
    .lg-show {
      display: none;
    }
  }
`;
