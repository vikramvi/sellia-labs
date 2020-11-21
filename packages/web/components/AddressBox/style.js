import styled from 'styled-components';

const AddressBox = styled('div')`
  display: flex;
  padding: 15px;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #e2e2e2;
`;

const Address = styled('div')`
  display: flex;
  flex-direction: column;
  padding-right: 30px;
  width: 100%;
  flex-shrink: 1;
`;

const Place = styled('span')`
  font-family: 'Lato', sans-serif;
  color: #595959;
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 5px;
  line-height: 1.5;
`;

const Location = styled('span')`
  font-family: 'Lato', sans-serif;
  color: #8c8c8c;
  font-size: 12px;
  font-weight: 400;
`;

export { AddressBox, Address, Place, Location };
