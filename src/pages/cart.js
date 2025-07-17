import '../components/cart.css';

function Cart({ cart, setCart }) {
  const removeItem = (indexToRemove) => {
    const updatedCart = cart.filter((_, index) => index !== indexToRemove);
    setCart(updatedCart);
    localStorage.setItem('bav-cart', JSON.stringify(updatedCart));
  }

  const total = cart.reduce((sum, item) => sum + Number(item.price), 0);

  return (
    <div className='cart-container'>
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p style={{ textAlign: "center" }}>Your cart is empty.</p>
      ) : (
        <>
          <ul className='cart-list'>
            {cart.map((item, i) => (
              <li key={i}>
                <span>{item.name} - KES {item.price}</span>
                <button className='cart-remove-btn'
                  onClick={() => removeItem(i)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className='cart-total'>Total: KES {total}</div>
          <button className='cart-checkout-btn'>Checkout</button>
        </>
      )}
    </div>
  );
}

export default Cart;
