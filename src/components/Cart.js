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
                    <td className='white-tr-td'>QTY</td>
                    <td className='white-tr-td'> Price</td>
                </tr>
                <tr>
                    <td className='cart-details-order'><img src={camaro} alt='produc'/></td>
                    <td className='cart-details-order'>
                        <span className='cart-carName'>Mercedes A Class</span><br/>
                        <span className='cart-car-details'>#21345678912334</span><br/>
                        <span className='cart-car-details'>Sliver// 2018 // Mercedes</span>
                    </td>
                    <td className='cart-details-order'>
                      <span className='cart-car-details-qty'><span>- </span>1 <span>+</span></span>
                    </td>
                    <td className='cart-details-order'>
                    <span className='cart-car-details-qty'>19 999$</span>
                    </td>
                </tr>
                <tr>
                    <td className='cart-details-order'><img src={camaro} alt='produc'/></td>
                    <td className='cart-details-order'>
                        <span className='cart-carName'>Mercedes A Class</span><br/>
                        <span className='cart-car-details'>#21345678912334</span><br/>
                        <span className='cart-car-details'>Sliver// 2018 // Mercedes</span>
                    </td>
                    <td className='cart-details-order'>
                      <span className='cart-car-details-qty'><span>- </span>1 <span>+</span></span>
                    </td>
                    <td className='cart-details-order'>
                    <span className='cart-car-details-qty'>19 999$</span>
                    </td>
                </tr>
            </table>
            </div>

        </div>
    );
}
export default Cart;