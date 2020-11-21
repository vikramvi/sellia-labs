import styled from 'styled-components';
import { Col as Cols } from 'react-styled-flexboxgrid';
import LocationSearchInput from '../../../components/InputGooglePlace';
import RangeSliderStyle from 'reusecore/src/elements/Range-with-RC-SLIDE';
import SwitchStyle from 'reusecore/src/elements/Switch';

const Col = styled(Cols)`
  &.visible-lg {
    @media (max-width: 1023px) {
      display: none;
    }
  }
`;

const Holder = styled('div')`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const RangeBoxWrapper = styled.div`
  padding: 8px 9px 0;
`;

const Switch = styled(SwitchStyle)`
  > div {
    &:first-child {
      height: 100%;
      background-color: #e2e2e2 !important;
    }
    &:nth-child(2)[class*='rn-boxShadow-'] {
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    }
  }
`;

const RangeSlider = styled(RangeSliderStyle)`
  .rc-slider {
    height: 14px;
    width: 100%;
    border-radius: 6px;
    touch-action: none;
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    padding: 6px 0;
    position: relative;
  }

  .rc-slider-rail {
    height: 2px;
    background-color: #e2e2e2;
  }
  .rc-slider-track,
  .rc-slider-step {
    height: 2px;
  }
  .rc-slider-track {
    background-color: #30c56d;
  }
  .rc-slider-dot {
    border: 0;
    &.rc-slider-dot-active {
      background-color: #30c56d;
    }
  }
  .rc-slider-handle {
    position: absolute;
    margin-left: -7px;
    cursor: pointer;
    cursor: grab;
    border-radius: 50%;
    background-color: #fff;
    touch-action: pan-x;

    width: 15px;
    height: 15px;
    margin-top: -7px;
    border: 0;
    box-shadow: 0 0 4px rgba(48, 157, 109, 0.6);
    &:hover {
      border: 0;
    }
    &:active {
      box-shadow: 0 0 10px rgba(48, 157, 109, 0.6);
    }
  }
  .rc-slider-handle-click-focused {
    &:focus {
      border: 0;
      box-shadow: 0 0 4px rgba(48, 157, 109, 0.6);
    }
  }
`;

export {
  LocationSearchInput,
  RangeBoxWrapper,
  RangeSlider,
  Switch,
  Holder,
  Col,
};
