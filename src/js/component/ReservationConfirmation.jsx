import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import CheckoutForm from "./CheckoutForm.jsx";

const Container = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: #29D3C3;
  cursor: pointer;
  font-size: 24px;
  display: flex;
  align-items: center;
  margin-right: 10px;

  &:hover {
    color: #82b0fa;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  margin: 0;
  color: white;
`;

const ReservationConfirmation = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    return(
        <Container>
        <Header>
          <BackButton onClick={() => navigate(`/details/${id}`)}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </BackButton>
          <Title>Request to Book</Title>
        </Header>
        <CheckoutForm />
      </Container>
    );
  };

export default ReservationConfirmation;
