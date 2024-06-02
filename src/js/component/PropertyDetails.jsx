// import React, { useEffect } from 'react';
// import Reservation from './Reservation.jsx';
// import SearchBar from './SearchBar.jsx'
// import { Search } from '@mui/icons-material';


// const PropertyDetails = (item) => {
//   return (
//       <div className="item-details">
//           <h4>{item.name}</h4>
//           <p>{item.address}</p>
//           <p>{item.type}</p>
//           <p>Rating: {item.rating} ({item.reviewsCount} reviews)</p>
//           <p>Price: ${item.price.rate} {item.price.currency} per night</p>
//           <div className="images">
//               {item.images.map((image, index) => (
//                   <img key={index} src={image} alt={`Image ${index + 1}`} width="200" />
//               ))}
//           </div>
//           <div className='Name_icons'>
//               <div className="Name_share">
//                   <IosShareIcon />
//                   <a href="#">Share</a>
//               </div>
//               <div className='Name_save'>
//                   <FavoriteBorderOutlinedIcon />
//                   <a href="#">Save</a>
//               </div>
//           </div>
//           <div className="book-now">
//               <h3>Book Now</h3>
//               <Reservation />
//           </div>
//       </div>
//   );
// };

// export default PropertyDetails;
