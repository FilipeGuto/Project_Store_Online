import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import ShippingStatus from './ShippingStatus';

class ProductCard extends React.Component {
  render() {
    const { product, onClickButton } = this.props;
    const { title, thumbnail, price, id, shipping } = product;
    const toLink = {
      pathname: `/product-details/${id}`,
      state: { product },
    };
    return (
      <div className="product-div">
        <Link
          className="product-list-link"
          data-testid="product-detail-link"
          to={ toLink }
        >
          <div data-testid="product">
            <div className="product-list-title-div">
              <h4>{title}</h4>
            </div>
            <div className="product-list-img">
              <img className="product-list-img" src={ thumbnail } alt={ title } />
            </div>
          </div>
        </Link>
        <div>
          <p>
            Preço: R$
            {price}
          </p>
        </div>
        <div className="product-list-shipping-div">
          <ShippingStatus status={ shipping.free_shipping } />
        </div>
        <div>
          <button
            onClick={ () => onClickButton(product) }
            type="button"
            data-testid="product-add-to-cart"
            className="product-list-addcart-button"
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    );
  }
}

ProductCard.propTypes = {
  onClickButton: PropTypes.func.isRequired,
  product: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    category_id: PropTypes.string,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool,
    }).isRequired,
  }).isRequired,
};

export default ProductCard;
