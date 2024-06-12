import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../store/firebase.js';
import { addDoc, collection } from 'firebase/firestore';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  font-family: Arial, sans-serif;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 10px;
  font-weight: bold;
  color: white;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const Policy = styled.div`
  background-color: #f8f8f8;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 20px;
  font-size: 14px;
`;

const Button = styled.button`
  background-color: #FD9000;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #FD9001;
  }
`;

const CheckoutForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');
  const [user] = useAuthState(auth);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    if (!user) {
      setError('You must be logged in to make a reservation.');
      return;
    }

    try {
      await addDoc(collection(db, 'reservations'), {
        userId: user.uid,
        placeName: 'At Mine, Miami, FL', 
        date: new Date().toISOString()
      });
      setSuccess(true);
      
      setCardNumber('');
      setExpiryDate('');
      setCvc('');
    } catch (error) {
      setError('Failed to make a reservation. Please try again.');
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="cardNumber">Card Number</Label>
        <Input
          type="text"
          id="cardNumber"
          name="cardNumber"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          placeholder="1234 5678 9012 3456"
          required
        />

        <Label htmlFor="expiryDate">Expiry Date</Label>
        <Input
          type="text"
          id="expiryDate"
          name="expiryDate"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          placeholder="MM/YY"
          required
        />

        <Label htmlFor="cvc">CVC</Label>
        <Input
          type="text"
          id="cvc"
          name="cvc"
          value={cvc}
          onChange={(e) => setCvc(e.target.value)}
          placeholder="123"
          required
        />

        <Policy>
          <strong>Cancellation Policy:</strong>
          <p>Free cancellation until 24 hours before check-in. After that, cancel before check-in and get a full refund, minus the first night and service fee.</p>
        </Policy>
        {error && (
          <p style={{ color: 'red' }}>{error}</p>
        )}
        {success && (
          <p style={{ color: 'green' }}>Reservation successful!</p>
        )}
        <Button type="submit">Request to Book</Button>
      </Form>
    </Container>
  );
};

export default CheckoutForm;