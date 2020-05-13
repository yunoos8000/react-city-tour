import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    cart : [],
    products: [],
    detailsProduct: detailProduct,
    modalOpen:false,
    modalProduct : detailProduct,
    cartSubTotal:0,
    cartTax:0,
    cartTotal:0,

  };

  componentDidMount() {
    this.setProducts();
  }
  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach((item) => {
      const singleProduct = {...item};
      tempProducts = [...tempProducts, singleProduct];
    });
    this.setState(() => {
      return {
        products: tempProducts,
      };
    });
  };



  getItem = (id) => {
    const getProduct = this.state.products.find((item) => item.id === id);
    return getProduct;
  };

  getCartItem=(id)=>{
    const getProduct = this.state.cart.find((item) => item.id === id);
    return getProduct;
  }

  handleDetail = (id) => {
    const getProduct =  this.getItem(id);
    this.setState(()=>{
      return {
        detailsProduct : getProduct
      }
    })
  };
  handleCart = (id) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id))
    const products = tempProducts[index];
    products.inCart = true;
    products.count = 1;
    const price = products.price
    products.total = price;
    const subTotal = this.state.cartSubTotal + products.price
    
    this.setState(()=>{
      return{
        products:[...tempProducts], cart:[...this.state.cart, products],cartSubTotal:subTotal
      }
    },()=>{
      console.log(this.state.cart);
      
    })
  };

  openModal = (id) =>{
    const product =this.getItem(id);
    this.setState(()=>{
      return{
        modalProduct : product,
        modalOpen : true
      }
    },()=>{
      this.addTotals();
      
    })

  }
  closeModal = () =>{
    this.setState(()=>{
      return{
        modalOpen : false
      }
    })

  }

  increment =(id)=>{
    let tempCart = [...this.state.cart]
    const index = tempCart.indexOf(this.getCartItem(id));
    const products = tempCart[index];
    products.count = products.count + 1 ;
    products.total = products.price * products.count;

    this.setState(()=>{
      return{
        cart:tempCart,
      }
    },()=>{
      this.addTotals();
      
    })
  }
  
  decrement =(id)=>{
    let tempCart = [...this.state.cart]
    const index = tempCart.indexOf(this.getCartItem(id));
    const products = tempCart[index];
    products.count = products.count - 1 ;

    if(products.count === 0){
      this.removeItem(id);
    }else{
      products.total = products.price * products.count;
      
      this.setState(()=>{
        return{
          cart:tempCart
        }
      },()=>{
        this.addTotals();
        
      })
    }
    
    
  }
  
  removeItem =(id)=>{
    let tempProducts = [...this.state.products];
    let tempCartList = [...this.state.cart];
    console.log(tempCartList);
    tempCartList = tempCartList.filter(item => item.id !== id)

    
   const index =  tempProducts.indexOf(this.getItem(id));
   tempProducts[index].count = 0;
   tempProducts[index].total = 0;
   tempProducts[index].inCart = false;

    this.setState(()=>{
      return{
        cart: tempCartList,
        products : tempProducts 
      }
    },()=>{
      this.addTotals();
    })
  }

  addTotals = ()=>{

    let subTotal = 0
    this.state.cart.map((item) => (subTotal += item.total)); 
    const tempTex = subTotal * 0.10
    const tax =  parseFloat(tempTex.toFixed(2));
    const total =  parseFloat((subTotal + tax).toFixed(2));
    this.setState(()=>{
      return{
        cartSubTotal:subTotal,
        cartTax:tax,
        cartTotal:total,
      }
    })

    
  }
  
  clearCart =()=>{
    this.setState(()=>{
      return{
        cart : [],
        cartSubTotal:0,
        cartTax:0,
        cartTotal:0,
      }
    },()=>{
      this.setProducts();
    })
  }


  


  // tester = () => {
  //   console.log("Prduct of in cart " + this.state.products[0].inCart);
  //   console.log("Temp data of in cart " + storeProducts[0].inCart);
  //   const tempDeta = storeProducts;

  //   tempDeta[0].inCart = true;
  //   this.setState(
  //     () => {
  //       return {
  //         products: tempDeta,
  //       };
  //     },
  //     () => {
  //       console.log("Prduct of in cart " + this.state.products[0].inCart);
  //       console.log("Temp data of in cart " + storeProducts[0].inCart);
  //     }
  //   );
  // };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          handleCart: this.handleCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
        }}
      >
        {/* <button onClick={this.tester}>click me</button> */}
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
