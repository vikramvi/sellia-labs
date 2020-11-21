import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, MenuText, CountText } from './tabViewStyle';

const TabViewMenu = ({
  style,
  onClick,
  menuIcon,
  iconPosition,
  menuText,
  count,
  menuTextSize,
  menuTextColor,
  menuTextLineHeight,
  countTextColor,
  countTextSize,
  countTextLineHeight,
  key,
}) => {
  return (
    <Fragment>
      {/* Tabview menu item */}
      {menuIcon || menuText ? (
        <TouchableOpacity style={style} onClick={onClick} key={key}>
          {/* If menu icon position is left then render */}
          {menuIcon && iconPosition === 'left' && <span>{menuIcon}</span>}

          {menuText && (
            <MenuText
              menuTextColor={menuTextColor}
              menuTextSize={menuTextSize}
              menuTextLineHeight={menuTextLineHeight}
            >
              {menuText}
            </MenuText>
          )}

          <CountText
            countTextColor={countTextColor}
            countTextSize={countTextSize}
            countTextLineHeight={countTextLineHeight}
          >
            {count}
          </CountText>
          {menuIcon && iconPosition === 'right' && <span>{menuIcon}</span>}
        </TouchableOpacity>
      ) : null}
    </Fragment>
  );
};

TabViewMenu.propTypes = {
  /** style props allow you to customize menu layout & spacing **/
  style: PropTypes.any,

  /** Callback function when TabViewMenu is pressed. **/
  onClick: PropTypes.func,

  /** Custom text for TabViewMenu item */
  menuText: PropTypes.string,

  /** Custom menu text size for TabViewMenu item */
  menuTextSize: PropTypes.number,

  /** Custom menu text line height for TabViewMenu item */
  menuTextLineHeight: PropTypes.number,

  /** Custom menu text color for TabViewMenu item */
  menuTextColor: PropTypes.string,

  /** Allow you to change icon position */
  iconPosition: PropTypes.oneOf(['left', 'right']),
};

TabViewMenu.defaultProps = {
  iconPosition: 'left',
};

export default TabViewMenu;
