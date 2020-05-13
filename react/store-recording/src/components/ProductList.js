import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context";

class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <Title name="Our" title="Product" />
        <div className="py-5">
          <div className="container">
            <div className="row">
              <ProductConsumer>
                {(value) => {
                  return value.products.map((product) => {
                    return (
                      <Product
                        key={product.id}
                        product={product}
                        handleCart={value.handleCart}
                        handleDetail={value.handleDetail}
                        openModal={value.openModal}
                        closeModal={value.closeModal}
                      />
                    );
                  });
                }}
              </ProductConsumer>
              {/* <Product product={this.state.product}/> */}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductList;
