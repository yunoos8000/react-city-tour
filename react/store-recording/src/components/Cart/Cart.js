import React, { Component } from 'react';
import Title from '../Title'
import CartColunms from './CartColunms'
import EmptyCart from './EmptyCart'
import {ProductConsumer} from '../../context'
import CartList from './CartList'
import CartTotals from './CartTotals';
class Cart extends Component {
    render() {
        return (
<ProductConsumer>
    {value => {
        const {cart} = value;        
        if( cart.length > 0 ){
            return(
            
                <section>
                    <Title name="Your" title="Cart"/>
                    <CartColunms />
                    <CartList value={value}/>
                    <CartTotals value={value} history={this.props.history} />
                </section>
            )
        }else{
            return(
            
                <section>
                    <Title name="Your" title="Cart"/>
                    <EmptyCart />
                </section>
            )
        }
        
        
    }}
</ProductConsumer>
            
        );
    }
}

export default Cart;
