import {connect} from 'react-redux';
import Header from "../Components/Header";

const mapStateToProps= state=>({
    cartData: state.cartItems
})

const mapDipatchToProps= dispatch=>({
     
})

export default connect(mapStateToProps, mapDipatchToProps)(Header)

//export default Home;