import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

class Details extends Component {
  render() {
    // const{}

    return (
      <ProductConsumer>
        {(value) => {
          console.log(value.detailsProduct);
          const {
            id,
            img,
            title,
            price,
            info,
            company,
            inCart,
          } = value.detailsProduct;
          return (
            <div className="container py-5">
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my3">
                  <img src={img} className="img-fluid" alt="product" />
                </div>

                <div className="col-10 mx-auto col-md-6 my3 text-capitalize">
                  <h2>model: {title}</h2>
                  <h5 className="text-muted">
                    price: <strong className="text-info">${price}</strong>
                  </h5>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    made by: <span className="text-uppercase">{company}</span>
                  </h4>
                  <p className="text-capitalize font-wieght-bold mt-3 mb-0">
                    some info about product:
                  </p>
                  <p className="text-muted lead">{info}</p>
                  <div>
                    <Link to="/">
                      <ButtonContainer>Back To Products</ButtonContainer>
                    </Link>
                    <ButtonContainer
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.handleCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? "In Cart" : "Add To Cart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Details;
