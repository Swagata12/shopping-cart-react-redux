import React, {Component} from 'react';
import { AddToCartContext } from '../../contexts/AddToCartContext';
import $ from 'jquery';

export default class AddToCart extends Component {
  handleAddToCart = () => {
    $("html, body").animate({ scrollTop: 0 }, 500);
    $("#nav-view-cart-button").addClass('active');
    setTimeout(() => $("#nav-view-cart-button").removeClass('active'), 600);
    this.context.action(this.props.product);
  }
  render() {
    return(
      <div className="add-cart-container">
        <button type="button" className="btn btn-primary"
          onClick={this.handleAddToCart}>Add to Cart</button>
      </div>
    );
  }
}

AddToCart.contextType = AddToCartContext;