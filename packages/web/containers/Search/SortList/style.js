import styled from 'styled-components';
import DropdownMenuStyle from '../../../components/DropdownMenu';

const SortItemWrapper = styled.div`
  > * {
    .checkboxComponent {
      > div {
        &:first-child {
          display: none;
        }
      }
    }
  }
`;

const DropdownMenu = styled(DropdownMenuStyle)`
  min-width: 194px;
  padding: 10px 0;
  li {
    padding: 0;
    > div {
      padding: 11px 18px;
    }
  }
`;

const MenuText = styled.div`
  color: #595959;
  font-size: 16px;
  line-height: 22px;
  transition: color 0.3s ease-in-out;
`;

export { SortItemWrapper, DropdownMenu, MenuText };
