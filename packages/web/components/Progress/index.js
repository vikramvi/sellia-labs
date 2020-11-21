import React from 'react';
import PropTypes from 'prop-types';
import { ProgressBar, InnerProgressBar } from './progress.style';

const Progress = props => {
  const { progress, style, color, width, height, radius } = props;

  return (
    <ProgressBar style={style} width={width} height={height} radius={radius}>
      <InnerProgressBar
        progress={progress}
        height={height}
        color={color}
        radius={radius}
      />
    </ProgressBar>
  );
};

Progress.propTypes = {
  progress: PropTypes.number.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.number,
  color: PropTypes.string,
};

Progress.defaultProps = {
  progress: 0,
};

export default Progress;
