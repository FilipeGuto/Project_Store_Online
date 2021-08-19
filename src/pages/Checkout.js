import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import img from '../image/Return.png';
import img2 from '../image/Elo.png';
import img3 from '../image/Visa.png';
import img4 from '../image/Boleto.png';
import img5 from '../image/Master.png';
import img6 from '../image/Checked.png';

class Checkout extends React.Component {
  fullName() {
    return (
      <input
        type="text"
        data-testid="checkout-fullname"
        id="fullname"
        name="fullname"
        placeholder="Nome Completo"
      />
    );
  }

  cpf() {
    return (
      <input
        type="text"
        data-testid="checkout-cpf"
        id="cpf"
        name="cpf"
        placeholder="CPF"
      />
    );
  }

  email() {
    return (
      <input
        type="text"
        data-testid="checkout-email"
        id="email"
        name="email"
        placeholder="Email"
      />
    );
  }

  phone() {
    return (
      <input
        type="text"
        data-testid="checkout-phone"
        id="tel"
        name="tel"
        placeholder="Telefone"
      />
    );
  }

  zip() {
    return (
      <input
        type="text"
        data-testid="checkout-cep"
        id="cep"
        name="cep"
        placeholder="CEP"
      />
    );
  }

  address() {
    return (
      <input
        type="text"
        data-testid="checkout-address"
        id="address"
        name="address"
        placeholder="Endereço"
      />
    );
  }

  render() {
    const { cart } = this.props;
    const total = cart.reduce((acc, { price }) => (acc + price), 0).toFixed(2);
    return (
      <main className="checkout-main">
        <header>
          <Link to="/">
            <img className="shopcart-img" src={ img } alt="botão de retornar" />
          </Link>
        </header>
        <section>
          <h2>Finalizar Compras</h2>
          <div className="product-review">
            <h4>Revise seus Produtos</h4>
            <table>
              <tbody>
                {cart.map(({ id, title, price }) => (
                  <tr key={ id }>
                    <td><img className="checked-icon" src={ img6 } alt="checked" /></td>
                    <td>{`${title}`}</td>
                    <td>R$: </td>
                    <td>{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h4>
              Total: R$
              {total}
            </h4>
          </div>
          <div className="buyer-info-div">
            <h4>Informações do Comprador</h4>
            <div>
              {this.fullName()}
              {this.cpf()}
              {this.email()}
              {this.phone()}
              {this.zip()}
              {this.address()}
            </div>
          </div>
          <div className="payment-method-div">
            <h4>Método de Pagamento</h4>
            <div>
              <span>Boleto: </span>
              <input type="radio" id="boleto" name="payment" />
              <img className="payment-icons" src={ img4 } alt="Ícone de Boleto" />
            </div>
            <div>
              <p>Cartão de Crédito: </p>
              <input type="radio" id="visa" name="payment" />
              <img className="payment-icons" src={ img3 } alt="Ícone do Cartão Visa" />
              <input type="radio" id="master" name="payment" />
              <img className="payment-icons" src={ img5 } alt="Ícone do Cartão Master" />
              <input type="radio" id="elo" name="payment" />
              <img className="payment-icons2" src={ img2 } alt="Ícone do Cartão Elo" />
            </div>
          </div>
          <nav>
            <button type="button">
              Comprar
            </button>
          </nav>
        </section>
      </main>
    );
  }
}

Checkout.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default Checkout;
