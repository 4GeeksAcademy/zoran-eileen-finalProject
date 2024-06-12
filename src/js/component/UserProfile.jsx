import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { auth, db } from '../store/firebase'; 
import styled from 'styled-components';

const Container = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #222;
  color: white;
  border-radius: 8px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin: 0 0 20px 0;
  color: #FF6F00;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const UserProfile = () => {
  const [user, loading, error] = useAuthState(auth);
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      if (user) {
        const q = query(collection(db, 'reservations'), where('userId', '==', user.uid));
        const querySnapshot = await getDocs(q);
        const reservationsData = querySnapshot.docs.map(doc => doc.data());
        setReservations(reservationsData);
      }
    };

    fetchReservations();
  }, [user]);

  if (loading) {
    return <Container>Loading...</Container>;
  }

  if (error) {
    return <Container>Error: {error.message}</Container>;
  }

  if (!user) {
    return <Container>Please log in to view your profile.</Container>;
  }

  return (
    <Container>
      <Title>User Profile</Title>
      <Section>
        <h2>Email</h2>
        <p>{user.email}</p>
      </Section>
      <Section>
        <h2>Reserved Places</h2>
        {reservations.length === 0 ? (
          <p>No reservations found.</p>
        ) : (
          reservations.map((reservation, index) => (
            <div key={index}>
              <p>{reservation.placeName}</p>
              <p>{new Date(reservation.date).toLocaleString()}</p>
            </div>
          ))
        )}
      </Section>
    </Container>
  );
};

export default UserProfile;