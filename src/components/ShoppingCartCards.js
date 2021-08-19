import React from 'react';
import PropTypes from 'prop-types';

class ShoppingCartCards extends React.Component {
  render() {
    const { cartProducts, handleQuant } = this.props;
    return (
      <div>
        {cartProducts.map((product) => (
          <div key={ product.id }>
            <div>
              <h4 data-testid="shopping-cart-product-name">{product.title}</h4>
            </div>
            <div className="shoppingcart-quantity-div">
              <p>Quantidade:</p>
              <p data-testid="shopping-cart-product-quantity">{`${product.quant} Unds.`}</p>
              <button
                type="button"
                data-testid="product-decrease-quantity"
                onClick={ () => handleQuant(product, '-') }
              >
                -
              </button>
              <button
                type="button"
                data-testid="product-increase-quantity"
                onClick={ () => handleQuant(product, '+') }
              >
                +
              </button>
            </div>
            <p>
              {`Price: R$${product.price * product.quant}`}
            </p>
          </div>
        ))}
      </div>
    );
  }
}

ShoppingCartCards.propTypes = {
  cartProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleQuant: PropTypes.func.isRequired,
};

export default ShoppingCartCards;
