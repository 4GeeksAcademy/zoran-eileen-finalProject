import React, { useContext, useEffect, useState } from 'react';
import { Context } from './appContext.js';
import Reservation from './Reservation.jsx';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const ImageContainer = styled.div`
  flex: 1;
  padding: 20px;
`;

const ReservationContainer = styled.div`
  flex: 1;
  position: ;
  top: 20px;
  margin-left: 20px; 
`;

const PropertyName = styled.h2`
  color: white;
`;

const PropertyDetails = () => {
    const { id } = useParams();
    const { store } = useContext(Context);
    const [property, setProperty] = useState(null);

    useEffect(() => {
        if (store && store.items) {
            const foundProperty = store.items.find(item => item.id === id);
            setProperty(foundProperty);
        }
    }, [id, store]);

    if (!property) {
        return <div>Loading...</div>;
    }

    return (
        <Container>
            <ImageContainer>
                <PropertyName>{property.name}</PropertyName>
                <img src={property.images[0]} alt="Property" width="100%" />
                <p>{property.description}</p>
            </ImageContainer>
            <ReservationContainer>
                <Reservation />
            </ReservationContainer>
        </Container>
    );
};

export default PropertyDetails;
