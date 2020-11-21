import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class ReadMore extends Component {
  state = {
    expanded: false,
  };

  toggleLines = event => {
    event.preventDefault();
    this.setState({
      expanded: !this.state.expanded,
    });
  };

  render() {
    const { children, more, less, character } = this.props;

    const { expanded } = this.state;
    if (!children) return '';
    return (
      <Fragment>
        {(children && children.length < character) || expanded
          ? children
          : children.substring(0, character)}
        {children && children.length > character && !expanded && (
          <span>
            <a
              href="#"
              onClick={this.toggleLines}
              style={{ marginLeft: 15, color: '#30C56D' }}
            >
              {more}
            </a>
          </span>
        )}
        {children && children.length > character && expanded && (
          <span>
            <a
              href="#"
              onClick={this.toggleLines}
              style={{ marginLeft: 15, color: '#30C56D' }}
            >
              {less}
            </a>
          </span>
        )}
      </Fragment>
    );
  }
}

ReadMore.defaultProps = {
  character: 150,
  more: 'more',
  less: 'less',
};

ReadMore.propTypes = {
  character: PropTypes.number,
  less: PropTypes.string,
  more: PropTypes.string,
};

export default ReadMore;
