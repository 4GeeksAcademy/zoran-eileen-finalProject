import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ReservationConfirmation = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    return(
        <div>
            <h1>Checkout stuff</h1>
            <button onClick={() => navigate(`/details/${id}`)}>Back to Listing</button>
        </div>
    );
}

export default ReservationConfirmation;
