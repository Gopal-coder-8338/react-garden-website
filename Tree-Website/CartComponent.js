import './index.css';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';

export function CartComponent() {
    const { cartItems , setCartItems } = useCart();

    const totalPrice = cartItems.reduce((total , item) => total + item.price , 0);

    const handleRemoveItem = (index) => {
        const updatedCart = cartItems.filter((_, i) => i !== index); // Create a new array without the deleted item
        setCartItems(updatedCart); // Update the cart immutably
    };
    return (
        <div className='cart'>
            <h2>Cart</h2>
            <div className="cart-box">
                {cartItems.length === 0 ? (
                    <div style={{textAlign:'center'}}>
                        <img src='./empty.jpeg' width='250' height='200' />
                        
                    </div>
                ) : (
                    cartItems.map((item, index) => (
                        <div className='cartDetails' key={index} style={{ display: 'flex', justifyContent: 'space-between',alignItems:'center', marginBottom: '10px' }}>
                            {/* Render object properties */}
                            <img src={item.image} alt={item.name} width="80" height="80" style={{ borderRadius: '5px' }} />
                            <div style={{ marginLeft: '10px' }}>
                                <strong>{item.name}</strong>
                                <p>₹{item.price}</p>
                            </div>
                            <button 
                                onClick={() => handleRemoveItem(index)} 
                                style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>
                                Delete
                            </button>
                        </div>
                    ))
                )}
                <hr />
                <div className='totalPrice' style={{textAlign:'right', fontSize:'18px',fontWeight:'bold'}}>
                    Total Price : &#8377;{totalPrice}
                </div>
                <div className='cart-btn'>
                    <Link className='button' to="">Clear Cart</Link>
                    <Link className='button' to="/">Add More Items</Link>
                </div>
            </div>
            <button className='btn btn-primary mt-2'>Pay Now</button>
        </div>
    );
}
