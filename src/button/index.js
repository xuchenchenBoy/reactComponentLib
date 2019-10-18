import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.PureComponent {
  handleClick() {
    this.props.handleClick && this.props.handleClick();
  }

  render() {
    return (
      <div onClick={this.handleClick}>button</div>
    );
  }
}

Button.propTypes = {
  handleClick: PropTypes.func
};

Button.defaultProps = {
  handleClick: () => {}
};

export default Button;