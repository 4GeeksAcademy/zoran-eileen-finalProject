import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import PropertyDetails from "./component/PropertyDetails.jsx";
import Reservation from "./component/Reservation.jsx";
import ReservationConfirmation from "./component/ReservationConfirmation.jsx";
import Navbar from "./component/Navbar.jsx";
import SearchBar from "./component/SearchBar.jsx";
import Theme from "./component/Theme.jsx"
import { Provider } from './component/appContext.js';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import UserProfile from "./component/UserProfile.jsx";

function App() {
  return (
    <Provider>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <Router>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<SearchBar />} />
              <Route path="/details/:id" element={<PropertyDetails />} />
              <Route path="/reservationconfirmation/:id" element={<ReservationConfirmation />} />
              <Route path="/profile" element = {<UserProfile />} />
            </Routes>
          </div>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
