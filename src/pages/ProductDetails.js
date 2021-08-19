import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CartButton from '../components/CartButton';
import CostumerEvaluation from '../components/CostumerEvaluation';
import ShippingStatus from '../components/ShippingStatus';
import img from '../image/Return.png';

class ProductDetails extends React.Component {
  render() {
    const { props } = this;
    const { state } = props.location;
    const { product } = state;
    const { title, price, thumbnail, shipping, attributes } = product;
    const { addCartChange } = this.props;
    return (
      <div className="div-productdetail">
        <div className="div-productdetail-nav">
          <Link to="/">
            <img className="shopcart-img" src={ img } alt="botão de retornar" />
          </Link>
          <CartButton />
        </div>
        <div className="product-detail-info-div">
          <div>
            <h2 data-testid="product-detail-name">{ title }</h2>
          </div>
          <div>
            <ShippingStatus status={ shipping.free_shipping } />
          </div>
        </div>
        <div className="div-productdetail-central">
          <div className="div-productdetail-img">
            <img src={ thumbnail } alt="test" />
          </div>
          <div className="div-productdetail-specification">
            <div>
              <h2>Especificações do produto</h2>
              <div>
                <ul>
                  {attributes.map((attribute) => (<li key={ attribute.id }>
                    {`${attribute.name}: ${attribute.value_name}`}
                  </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="price-button-div">
              <h2>
                Price: R$
                { price }
              </h2>
              <button
                onClick={ () => addCartChange(product) }
                type="button"
                value={ title }
                data-testid="product-detail-add-to-cart"
              >
                Adicionar ao carrinho
              </button>
            </div>
          </div>
        </div>
        <div>
          <CostumerEvaluation title={ title } />
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  addCartChange: PropTypes.func.isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        title: PropTypes.string,
        price: PropTypes.number,
        thumbnail: PropTypes.string,
        shipping: PropTypes.shape({
          free_shipping: PropTypes.bool,
        }).isRequired,
      }),
    }),
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      productName: PropTypes.string,
      categoryId: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductDetails;
