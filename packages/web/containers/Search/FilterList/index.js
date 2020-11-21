import React, { useState, useContext, useEffect } from 'react';
import { Row } from 'react-styled-flexboxgrid';
import LocationSearchInput from '../../../components/InputGooglePlace/altered';
import { RangeBoxWrapper, RangeSlider, Holder, Col } from './style';
import Switch from 'reusecore/src/elements/Switch';
import { SearchContext, initialState } from '../../../contexts/SearchContext';
import {
  setStateToUrl,
  getUrlToState,
  clearUrl,
} from '../../../helpers/urlHandler';
import Button from 'reusecore/src/elements/Button';
import Text from 'reusecore/src/elements/Text';
import Input from '../../../components/Input';

const FilterElements = props => {
  const { state, dispatch } = useContext(SearchContext);
  const urlState = getUrlToState();
  const [filterState, setFilterState] = useState({
    ...urlState,
  });

  const negotiableSwitchToggle = value => {
    setFilterState({
      ...filterState,
      isNegotiable: value,
    });
  };

  const newConditionSwitchToggle = value => {
    setFilterState({
      ...filterState,
      condition: value,
    });
  };

  const onRadiusSlidingComplete = value => {
    setFilterState({
      ...filterState,
      radius: value,
    });
  };

  const onPriceSlidingComplete = value => {
    setFilterState({
      ...filterState,
      price: value,
    });
  };

  const handleAddress = address => {
    setFilterState({
      ...filterState,
      address,
    });
  };
  const handleLocation = (location, address) => {
    setFilterState({
      ...filterState,
      address,
      location_lat: location.lat,
      location_lng: location.lng,
      radius: filterState.radius ? filterState.radius : state.radius,
    });
  };

  const handleApply = async () => {
    dispatch({
      type: 'UPDATE',
      payload: filterState,
    });
    setStateToUrl({ ...filterState });
  };

  const handleClearSearch = async () => {
    clearUrl();
    setFilterState({
      ...initialState,
      price: [0, 0],
      radius: 0,
    });
    dispatch({
      type: 'UPDATE',
      payload: {},
    });
    // setStateToUrl({});
  };

  const { address, isNegotiable, condition, radius, price, text } = filterState;
  return (
    <div style={{ paddingTop: 20, paddingBottom: 40 }}>
      <Input
        elementType="input"
        value={text}
        label="Title"
        elementConfig={{
          type: 'email',
          required: 'required',
        }}
        changed={e => {
          setFilterState({
            ...filterState,
            text: e.target.value,
          });
        }}
        style={{ marginTop: 20 }}
      />
      <LocationSearchInput
        address={address}
        handleAddress={() => {}}
        handleChange={handleAddress}
        handleLocation={(location, selectedAddress) =>
          handleLocation(location, selectedAddress)
        }
      />

      <Row>
        <Col md={6} sm={12} xs={12} style={{ marginBottom: 20 }}>
          {/* Radius range label style*/}
          <Text fontSize={14} color="#595959" mb={10} content="Radius" />

          {/* Radius range box component */}
          <RangeBoxWrapper>
            <RangeSlider
              min={20}
              max={1000}
              labelText=""
              slideDefaultValue={radius}
              tipFormatter={value => `${value}km`}
              handleChangefunc={value => onRadiusSlidingComplete(value)}
              onAfterChange={value => onRadiusSlidingComplete(value)}
            />
          </RangeBoxWrapper>
        </Col>

        <Col md={6} sm={12} xs={12}>
          {/* Price range label style */}
          <Text fontSize={14} color="#595959" mb={10} content="Price" />

          {/* Radius range box component */}
          <RangeBoxWrapper>
            <RangeSlider
              min={0}
              max={1000000}
              step={1000}
              rangeDefaultValue={price}
              labelText=""
              handleChangefunc={value => onPriceSlidingComplete(value)}
              onAfterChange={value => onPriceSlidingComplete(value)}
              tipFormatter={value => `$ ${value}`}
              type="range"
              dotStyle={{ height: 0 }}
            />
          </RangeBoxWrapper>
        </Col>
      </Row>

      <Row>
        <Col md={6} sm={12} xs={12}>
          {/* Switch component */}
          <Holder style={{ marginTop: 32 }}>
            <Text
              fontSize={14}
              color="#595959"
              mr={30}
              mb={0}
              content="Negotiable?"
            />
            <Switch
              onChange={value => negotiableSwitchToggle(value)}
              value={isNegotiable}
              isChecked={isNegotiable}
              switchSize="50px"
              switchColor="#30C56D"
              barColor="#30C56D"
            />
          </Holder>
        </Col>

        <Col md={6} sm={12} xs={12}>
          {/* Switch component */}
          <Holder style={{ marginTop: 32 }}>
            <Text
              fontSize={14}
              color="#595959"
              mr={30}
              mb={0}
              content="New Condition?"
            />
            <Switch
              onChange={value => newConditionSwitchToggle(value)}
              value={condition}
              isChecked={condition}
              switchSize="50px"
              switchColor="#30C56D"
              barColor="#30C56D"
            />
          </Holder>
        </Col>
      </Row>

      <Row>
        <Col mdOffset={6} md={6} xs={12} sm={12}>
          {/* Apply button component */}
          <Row>
            <Col xs className="visible-lg">
              <Button
                onClick={props.toggleSearchDrawer}
                title="Hide"
                bg="#e2e2e2"
                color="#545454"
                style={{ marginTop: 30, width: '100%' }}
              />
            </Col>
            <Col xs>
              <Button
                onClick={handleClearSearch}
                title="Clear"
                bg="#e2e2e2"
                color="#545454"
                style={{ marginTop: 30, width: '100%' }}
              />
            </Col>

            {/* Cancel button component */}
            <Col xs>
              <Button
                onClick={handleApply}
                title="Apply"
                style={{ marginTop: 30, width: '100%' }}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default FilterElements;
