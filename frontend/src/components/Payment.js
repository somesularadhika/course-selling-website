import React, { useState } from 'react';
import axios from 'axios';

function Payment() {
  const [paymentStatus, setPaymentStatus] = useState(null);

  const handlePayment = () => {
    // Simulate payment process
    axios.post('/api/simulate-payment')
      .then(response => {
        setPaymentStatus('Payment successful');
        // Grant access to course content
        axios.post('/api/grant-access', { courses: response.data.courses })
          .then(() => {
            console.log('Access granted to course content');
          })
          .catch(error => {
            console.error('Error granting access to course content', error);
          });
      })
      .catch(error => {
        setPaymentStatus('Payment failed');
        console.error('Error processing payment', error);
      });
  };

  return (
    <div>
      <h1>Payment</h1>
      <button onClick={handlePayment}>Simulate Payment</button>
      {paymentStatus && <p>{paymentStatus}</p>}
    </div>
  );
}

export default Payment;
