import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ShoppingCartCards from '../components/ShoppingCartCards';
import img from '../image/Return.png';

class ShoppingCart extends React.Component {
  render() {
    const { cartProducts, handleQuant } = this.props;
    if (cartProducts.length === 0) {
      return (
        <div>
          <Link to="/">
            <img className="shopcart-img" src={ img } alt="botão de retornar" />
          </Link>
          <h4 data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </h4>
        </div>
      );
    }
    return (
      <div className="shoppingcart-page-div">
        <Link to="/">
          <img className="shopcart-img" src={ img } alt="botão de retornar" />
        </Link>
        <div className="shopping-card-div">
          <ShoppingCartCards cartProducts={ cartProducts } handleQuant={ handleQuant } />
        </div>
        <div>
          <Link
            data-testid="checkout-products"
            to="/checkout"
          >
            <button className="finish-buy-button" type="button"> FINALIZAR COMPRA </button>
          </Link>
        </div>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  cartProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleQuant: PropTypes.func.isRequired,
};

export default ShoppingCart;
