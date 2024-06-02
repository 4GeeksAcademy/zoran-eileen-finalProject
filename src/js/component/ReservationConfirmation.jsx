import React from "react";
import Reservation from "./Reservation.jsx";
import { useNavigate } from "react-router-dom";

const ReservationConfirmation = () => {
    const navigate = useNavigate();
    return(
        <div>
            <Reservation />
            <h1>Checkout stuff</h1>
            <button onClick={() => navigate("/details")}>BACK BUTTON</button>
        </div>
    );
}

export default ReservationConfirmation;