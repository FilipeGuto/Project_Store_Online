import React from 'react';
import PropTypes from 'prop-types';

class ShippingStatus extends React.Component {
  render() {
    const { status } = this.props;
    return (
      status ? <span data-testid="free-shipping">Frete Grátis</span> : null
    );
  }
}

ShippingStatus.propTypes = {
  status: PropTypes.bool.isRequired,
};

export default ShippingStatus;
