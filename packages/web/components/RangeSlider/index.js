import React from 'react';
import Slider, { createSliderWithTooltip } from 'rc-slider';

const SliderWithTooltip = createSliderWithTooltip(Slider);

const RangeSlider = props => <SliderWithTooltip {...props} />;

export default RangeSlider;
