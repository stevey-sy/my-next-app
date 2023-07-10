import Seo from "../../components/Seo";
import { useState } from 'react';

export default function Cart2() {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };
    
    const removeFromCart = (index) => {
        const newCartItems = [...cartItems];
        newCartItems.splice(index, 1);
        setCartItems(newCartItems);
    };
    
    return (
        <div>
        <Seo title="Cart2" />
        <h1>장바구니</h1>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item}{' '}
              <button onClick={() => removeFromCart(index)}>삭제</button>
            </li>
          ))}
        </ul>
        <button onClick={() => addToCart('상품 1')}>상품 1 추가</button>
        <button onClick={() => addToCart('상품 2')}>상품 2 추가</button>
      </div>
    );
}