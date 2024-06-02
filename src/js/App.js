import React from "react";
import { Routes, Route } from "react-router-dom";
import PropertyDetails from "./component/PropertyDetails.jsx";
import Reservation from "./component/Reservation.jsx";
import ReservationConfirmation from "./component/ReservationConfirmation.jsx";
import Navbar from "./component/Navbar.jsx";
import SearchBar from "./component/SearchBar.jsx";


function App() {

  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" element={<SearchBar />} />
          {/* <Route path="/details/:id" element={<PropertyDetails />} /> */}
          <Route path="/reservationconfirmation" element={<ReservationConfirmation />} />
          <Route render={() => <h1>Not found!</h1>} />
        </Routes>
    </div>
  );
}
 export default App;
