import React from "react";
import { Link } from "react-router-dom";
import PayPalButton from './PayPalButton'
export default function CartTotals({ value, history }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;  
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-auto col-sm-8 text-captalize text-right">
            <Link to="/">
              <button
                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                type="button"
                onClick={() => clearCart()}
              >
                Clear List
              </button>
            </Link>
            <h5>
                <span className="text-title">Subtotal : </span>
                <strong>$ {cartSubTotal}</strong>
            </h5>
            <h5>
                <span className="text-title">Tax : </span>
                <strong>$ {cartTax}</strong>
            </h5>
            <h5>
                <span className="text-title">Total : </span>
                <strong>$ {cartTotal}</strong>
            </h5>
            <PayPalButton total={cartTotal} clearCart={clearCart} history={history} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
