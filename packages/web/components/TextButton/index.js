import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton, ButtonIcon, ButtonText } from './style';

const TextButton = ({
  title,
  onClick,
  style,
  icon,
  iconStyle,
  iconPosition,
  className,
  disabled,
  ...props
}) => {
  return (
    <StyledButton
      style={style}
      onClick={onClick}
      className={className}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <ButtonIcon
          disabled={disabled}
          style={iconStyle}
          iconPosition={iconPosition}
        >
          {icon}
        </ButtonIcon>
      )}
      <ButtonText>{title}</ButtonText>
      {icon && iconPosition === 'right' && (
        <ButtonIcon
          disabled={disabled}
          style={iconStyle}
          iconPosition={iconPosition}
        >
          {icon}
        </ButtonIcon>
      )}
    </StyledButton>
  );
};

TextButton.propTypes = {
  /** Title of button. */
  title: PropTypes.string,

  /** Text sizes of button. */
  textSize: PropTypes.number,

  /** Text Weight of button. */
  fontWeight: PropTypes.number,

  /** Callback function when button is pressed. */
  onPress: PropTypes.func,

  /** Callback function when button is press in. */
  onPressIn: PropTypes.func,

  /** Callback function when button is press out. */
  onPressOut: PropTypes.func,

  /** Callback function when button is long press. */
  onLongPress: PropTypes.func,

  /** Determines what the opacity of the wrapped view should be when touch is active. */
  activeOpacity: PropTypes.number,

  /** Custom style for the button */
  style: PropTypes.any,

  /** Text Style for the button */
  textStyle: PropTypes.any,

  /** Custom text color for the button */
  textColor: PropTypes.string,

  /** Class name of the button */
  className: PropTypes.string,

  /** Icon name for the button */
  icon: PropTypes.object,

  /** Icon Position */
  iconPosition: PropTypes.oneOf(['left', 'right']),

  /** custom style for the icon */
  iconStyle: PropTypes.any,

  /** If true button will be disabled */
  disabled: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

TextButton.defaultProps = {
  iconPosition: 'right',
  activeOpacity: 0.9,
  disabled: false,
};

export default TextButton;
