import React from "react";
import App from '../App.css';
import AddToCart from './AddToCart.jpg';

function Home(props){
    console.warn('Home',props.cartData);
    return(
        <div>
            <div className="add-to-cart">
                <span className="cart-count">{props.cartData.length}</span>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
            </div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="image-wrapper item">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4bcLbRGpOn7Ldspic3anEbnWEwSi3I9YDCMK41ODfoixo44W9KuDKlE0hakEmZONNZeY&usqp=CAU" alt="No Image"/>
                </div>
                <div className="text-wrapper item">
                    <span>Iphone</span>
                    <span>Price : $1000</span>
                </div>
                <div className="button-wrapper item">
                    <button onClick={()=>props.addToCartHandler({price: 1000, name: 'iPhoneX'})}>Add To Cart</button>
                    <button className="remove-cart-button" onClick={()=>props.removeToCartHandler()}>Remove To Cart</button>
                </div>
            </div>
            
        </div>
    )
}

export default Home;