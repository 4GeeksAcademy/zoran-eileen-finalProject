// import React, { useState } from "react";

// const SearchForm = ({ onSearch }) => {
//     const [location, setLocation] = useState('');
//     const [checkin, setCheckin] = useState('');
//     const [checkout, setCheckout] = useState('');
//     const [adults, setAdults] = useState(1);
//     const [children, setChildren] = useState(0);
//     const [infants, setInfants] = useState(0);
//     const [pets, setPets] = useState(0);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         onSearch({ location, checkin, checkout, adults, children, infants, pets });
//     };

//     return (
//         <form onSubmit={handleSubmit} className="p-3">
//             <div className="mb-3">
//                 <label className="form-label">Location:</label>
//                 <input
//                     type="text"
//                     className="form-control"
//                     value={location}
//                     onChange={(e) => setLocation(e.target.value)}
//                     required
//                 />
//             </div>
//             <div className="mb-3">
//                 <label className="form-label">Check-in:</label>
//                 <input
//                     type="date"
//                     className="form-control"
//                     value={checkin}
//                     onChange={(e) => setCheckin(e.target.value)}
//                     required
//                 />
//             </div>
//             <div className="mb-3">
//                 <label className="form-label">Check-out:</label>
//                 <input
//                     type="date"
//                     className="form-control"
//                     value={checkout}
//                     onChange={(e) => setCheckout(e.target.value)}
//                     required
//                 />
//             </div>
//             <div className="mb-3">
//                 <label className="form-label">Adults:</label>
//                 <input
//                     type="number"
//                     className="form-control"
//                     value={adults}
//                     onChange={(e) => setAdults(e.target.value)}
//                     min="1"
//                     required
//                 />
//             </div>
//             <div className="mb-3">
//                 <label className="form-label">Children:</label>
//                 <input
//                     type="number"
//                     className="form-control"
//                     value={children}
//                     onChange={(e) => setChildren(e.target.value)}
//                     min="0"
//                     required
//                 />
//             </div>
//             <div className="mb-3">
//                 <label className="form-label">Infants:</label>
//                 <input
//                     type="number"
//                     className="form-control"
//                     value={infants}
//                     onChange={(e) => setInfants(e.target.value)}
//                     min="0"
//                     required
//                 />
//             </div>
//             <div className="mb-3">
//                 <label className="form-label">Pets:</label>
//                 <input
//                     type="number"
//                     className="form-control"
//                     value={pets}
//                     onChange={(e) => setPets(e.target.value)}
//                     min="0"
//                     required
//                 />
//             </div>
//             <button type="submit" className="btn btn-primary">Search</button>
//         </form>
        
//     );
// };

// export default SearchForm;
