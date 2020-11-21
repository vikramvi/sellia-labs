import React, { useContext } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import TextButton from '../../../components/TextButton';
import { SortItemWrapper, DropdownMenu, MenuText } from './style';
import { SearchContext } from '../../../contexts/SearchContext';
import { setStateToUrl } from '../../../helpers/urlHandler';

const SortingElements = () => {
  const { state, dispatch } = useContext(SearchContext);

  const handleCheckboxChange = value => {
    if (value.field === 'distance') {
      setStateToUrl({
        sorting_field: value.field,
        sorting_type: value.type,
        location_lat: state.location.lat,
        location_lng: state.location.lng,
        radius: state.radius,
      });
    } else {
      setStateToUrl({
        sorting_field: value.field,
        sorting_type: value.type,
      });
    }

    dispatch({
      type: 'UPDATE',
      payload: {
        sorting: value,
      },
    });
  };

  const DROPDOWN_MENU_ITEMS = [
    <MenuText
      checked={
        state.sorting &&
        state.sorting.field == 'price' &&
        state.sorting.type == 'asc'
      }
      onClick={handleCheckboxChange.bind(this, { field: 'price', type: 'asc' })}
    >
      Price Low To High
    </MenuText>,
    <MenuText
      checked={
        state.sorting &&
        state.sorting.field == 'price' &&
        state.sorting.type == 'desc'
      }
      onClick={handleCheckboxChange.bind(this, {
        field: 'price',
        type: 'desc',
      })}
    >
      Price High To Low
    </MenuText>,
    <MenuText
      checked={state.sorting && state.sorting.field == 'distance'}
      onClick={handleCheckboxChange.bind(this, {
        field: 'distance',
        type: 'asc',
      })}
    >
      Nearest
    </MenuText>,
  ];

  const DropdownContent = (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        fontFamily: 'Poppins',
        fontWeight: 600,
        color: '#333333',
      }}
    >
      Sorting
      <IoMdArrowDropdown size={'30px'} />
    </div>
  );

  return (
    <div style={{ position: 'relative' }}>
      <SortItemWrapper>
        <DropdownMenu
          content={DropdownContent}
          dropdownDirection="left"
          dropdownItems={DROPDOWN_MENU_ITEMS}
        />
      </SortItemWrapper>
    </div>
  );
};

export default SortingElements;
