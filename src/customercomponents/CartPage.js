import React, { useState } from 'react';
import { useCart } from './CartContext';

function CartPage() {
  const { cartItems, clearCart } = useCart();
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [bookingDate, setBookingDate] = useState(new Date().toISOString().split('T')[0]);
  const [paymentDone, setPaymentDone] = useState(false);

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handlePayment = async () => {
    if (!name.trim() || !mobile.trim() || !address.trim()) {
      alert('Please fill in all required fields');
      return;
    }

    const bookingData = {
      name,
      mobile,
      address,
      paymentMethod,
      bookingDate,
      items: cartItems,
      totalAmount: total,
    };

    try {
      const response = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        setPaymentDone(true);
        clearCart();
        setName('');
        setMobile('');
        setAddress('');
        setPaymentMethod('card');
        setBookingDate(new Date().toISOString().split('T')[0]);
      } else {
        alert('Failed to process booking');
      }
    } catch (error) {
      console.error('Payment Error:', error);
      alert('Something went wrong!');
    }
  };

  const styles = {
    container: {
      maxWidth: '600px',
      margin: '40px auto',
      background: '#fff',
      padding: '25px',
      borderRadius: '12px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
      fontFamily: 'Segoe UI, sans-serif',
    },
    title: {
      textAlign: 'center',
      marginBottom: '20px',
    },
    emptyMsg: {
      textAlign: 'center',
      color: 'gray',
    },
    list: {
      listStyle: 'none',
      padding: 0,
      marginBottom: '20px',
    },
    item: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '10px',
      background: '#f9f9f9',
      borderRadius: '6px',
      marginBottom: '10px',
    },
    total: {
      textAlign: 'right',
      fontWeight: 'bold',
      fontSize: '18px',
      marginBottom: '20px',
    },
    label: {
      display: 'block',
      marginTop: '15px',
      fontWeight: '500',
    },
    input: {
      width: '100%',
      padding: '8px',
      marginTop: '5px',
      borderRadius: '6px',
      border: '1px solid #ccc',
    },
    buttonSection: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '20px',
    },
    clearBtn: {
      background: '#ff4d4d',
      color: 'white',
      border: 'none',
      padding: '10px 15px',
      borderRadius: '6px',
      cursor: 'pointer',
    },
    payBtn: {
      background: '#4CAF50',
      color: 'white',
      border: 'none',
      padding: '10px 15px',
      borderRadius: '6px',
      cursor: 'pointer',
    },
    successMsg: {
      marginTop: '30px',
      padding: '15px',
      background: '#d4edda',
      color: '#155724',
      borderRadius: '6px',
      textAlign: 'center',
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>🛒 My Bookings</h2>

      {cartItems.length === 0 ? (
        <p style={styles.emptyMsg}>Your cart is empty</p>
      ) : (
        <>
          <ul style={styles.list}>
            {cartItems.map((item, index) => (
              <li key={index} style={styles.item}>
                <span>{item.name}</span>
                <span>₹{item.price.toLocaleString()}</span>
              </li>
            ))}
          </ul>

          <div style={styles.total}>
            <h3>Total: ₹{total.toLocaleString()}</h3>
          </div>

          <div>
            <label style={styles.label}>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              style={styles.input}
            />

            <label style={styles.label}>Mobile Number:</label>
            <input
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Enter your mobile number"
              style={styles.input}
            />

            <label style={styles.label}>Address:</label>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              rows="3"
              placeholder="Enter your delivery address"
              style={styles.input}
            />

            <label style={styles.label}>Booking Date:</label>
            <input
              type="date"
              value={bookingDate}
              onChange={(e) => setBookingDate(e.target.value)}
              style={styles.input}
            />

            <label style={styles.label}>Payment Method:</label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              style={styles.input}
            >
              <option value="card">Credit/Debit Card</option>
              <option value="upi">UPI</option>
              <option value="cod">Cash on Delivery</option>
            </select>
          </div>

          <div style={styles.buttonSection}>
            <button style={styles.clearBtn} onClick={clearCart}>Clear Cart</button>
            <button style={styles.payBtn} onClick={handlePayment}>Proceed to Pay</button>
          </div>
        </>
      )}

      {paymentDone && (
        <div style={styles.successMsg}>
          ✅ Your details have been saved successfully!
        </div>
      )}
    </div>
  );
}

export default CartPage;
