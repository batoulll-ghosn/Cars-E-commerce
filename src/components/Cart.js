import './styles/cart.css';
import camaro from '../components/styles/camaro.png';
const Cart=()=>{

    return(
        <div className='cart-b-div'>
            <div className='cart-head'>
                <div className='cart-head-title'><h2>DriveEpic</h2></div>
                <div className='cart-head-button'><button >Continue shopping</button></div>
            </div>
            <div className='my-cart-div'>
                <h1>MY CART</h1>
            </div>
            <div className="cart-product">
            <table>
                <tr>
                    <td className='white-tr-td'>Product</td>
                    <td className='white-tr-td'>Details</td>
                    <td className='white-tr-td'> Price</td>
                    <td className='white-tr-td'> Action</td>
                </tr>
                <tr>
                    <td className='cart-details-order'><img src={camaro} alt='produc'/></td>
                    <td className='cart-details-order'>
                        <span className='cart-carName'>Mercedes A Class</span><br/>
                        <span className='cart-car-details'>#21345678912334</span><br/>
                        <span className='cart-car-details'>Sliver// 2018 // Mercedes</span>
                    </td>
                    
                    <td className='cart-details-order'>
                    <span className='cart-car-details'>19 999$</span>
                    </td>
                    <td className='cart-details-order'><span className='cart-car-details'>Delete</span></td>
                </tr>
                <tr>
                    <td className='cart-details-order'><img src={camaro} alt='produc'/></td>
                    <td className='cart-details-order'>
                        <span className='cart-carName'>Mercedes A Class</span><br/>
                        <span className='cart-car-details'>#21345678912334</span><br/>
                        <span className='cart-car-details'>Sliver// 2018 // Mercedes</span>
                    </td>
                    <td className='cart-details-order'>
                    <span className='cart-car-details'>19 999$</span>
                    </td>
                    <td className='cart-details-order'><span className='cart-car-details'>Delete</span></td>
                </tr>
            </table>
            </div>
            <div className='footer-cart-container'>
                <div className='footer-cart-container-white'>
                    <div className='white-part1'>
                        <span>Choose Pick Up Location</span>
                    </div>
                    <div className='white-part2'>
                        
                        <table>
                            <tr>
                                <td className='td-white'>SubTotal</td>
                                <td className='td-n'>45 500 $</td>
                            </tr>
                            <tr>
                                <td className='td-white'>discount</td>
                                <td className='td-n'>30%-15%</td>
                            </tr>
                            <tr>
                                <td className='part2-shipping'>Shipping</td>
                                <td className='part2-free'>Free</td>
                            </tr>
                            <tr>
                                <td className='td-white'>TOTAL</td>
                                <td className='td-n'>42 000 $</td>
                            </tr>
                        </table>
                        <div className='checkout-cart'><button >Checkout 42 000 $</button></div>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default Cart;