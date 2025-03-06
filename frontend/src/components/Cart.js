import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Fetch cart items from local storage or backend
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const removeFromCart = (courseId) => {
    const updatedCart = cart.filter(course => course._id !== courseId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cart.map(course => (
          <li key={course._id}>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <p>Price: ${course.price}</p>
            <button onClick={() => removeFromCart(course._id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button>Proceed to Payment</button>
    </div>
  );
}

export default Cart;
