import styled from 'styled-components';

export const MenuWrapper = styled('nav')`
  display: block;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }
`;

export const MenuItemWrapper = styled('span')`
  display: block;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  color: #595959;
  a {
    color: #595959;
  }
  @media (min-width: 768px) {
    display: inline-block;
    padding-left: ${props => props.paddingX || '1rem'};
    padding-right: ${props => props.paddingX || '1rem'};
    flex-shrink: 0;
  }
`;
