import React, { useState } from 'react';
import { Row, Col } from 'react-styled-flexboxgrid';
import { IoIosSearch } from 'react-icons/io';

import InputSearch from '../../../components/InputSearch';

export default function TextSearch() {
  const [searchValue, setSearchValue] = useState('');

  const onChange = e => {
    setSearchValue(e.target.value);
  };

  return (
    <Row
      style={{
        paddingLeft: '1rem',
        paddingRight: '1rem',
        marginLeft: 0,
        marginRight: 0,
      }}
    >
      <Col xs={12} mdOffset={3} smOffset={2} sm={8}>
        <InputSearch
          changed={onChange}
          value={searchValue}
          placeholder="10,000 products available"
          buttonIcon={<IoIosSearch size={20} />}
          buttonText="Search"
          style={{
            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
            marginTop: 50,
            marginBottom: 50,
          }}
        />
      </Col>
    </Row>
  );
}
