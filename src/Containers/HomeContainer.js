import {connect} from 'react-redux';
import Home from "../Components/Home";
import {addToCart, removeToCart} from '../Services/Action/action';

const mapStateToProps= state=>({
    cartData: state.cartItems
})

const mapDipatchToProps= dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data)),
    removeToCartHandler:data=>dispatch(removeToCart(data))
})

export default connect(mapStateToProps, mapDipatchToProps)(Home)

//export default Home;