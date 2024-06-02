import React, { useState, useEffect } from "react";
import IosShareIcon from '@mui/icons-material/IosShare';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Reservation from "./Reservation.jsx";
import PropertyDetails from "./PropertyDetails.jsx";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);
    const [location, setLocation] = useState('');
    const [checkin, setCheckin] = useState('');
    const [checkout, setCheckout] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);
    const [pets, setPets] = useState(0);
    const [selectedItem, setSelectedItem] = useState(null);


    const fetchData = async () => {
        const url = `https://airbnb13.p.rapidapi.com/search-location?location=${location}&checkin=${checkin}&checkout=${checkout}&adults=${adults}&children=${children}&infants=${infants}&pets=${pets}&page=1&currency=USD`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '6a85a1be0amshfa9a4983738ed1bp1b867ajsnddc4a82a15a4',
                'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
            }
        };
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }
            const json = await response.json();
            console.log(json); 
            if (json.results) {
                setItems(json.results);
            } else {
                throw new Error('Invalid data structure');
            }
            setIsLoaded(true);
        } catch (error) {
            console.error('Error fetching data:', error);
            setError(error.message);
            setIsLoaded(true);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        setIsLoaded(false);
        setItems([]);
        setError(null);
        fetchData();
    };

    
    const navigate = useNavigate();
    const handleItemClick = (item) => {
        navigate(`/details/${item.id}`, { state: { item } });
    };

    const renderItemDetails = (item) => {
        return (
            <div className="item-details">
                <h4>{item.name}</h4>
                <p>{item.address}</p>
                <p>{item.type}</p>
                <p>Rating: {item.rating} ({item.reviewsCount} reviews)</p>
                <p>Price: ${item.price.rate} {item.price.currency} per night</p>
                <div className="images">
                    {item.images.map((image, index) => (
                        <img key={index} src={image} alt={`Image ${index + 1}`} width="200" />
                    ))}
                </div>
                <div className='Name_icons'>
                    <div className="Name_share">
                        <IosShareIcon />
                        <a href="#">Share</a>
                    </div>
                    <div className='Name_save'>
                        <FavoriteBorderOutlinedIcon />
                        <a href="#">Save</a>
                    </div>
                </div>
                <div className="book-now">
                    <h3>Book Now</h3>
                    {/* <Reservation /> */}
                </div>
            </div>
        );
    };

    return (

        <div className="NameofAirbnb">
            <form onSubmit={handleSearch}>
                <div>
                    <label>
                        Location:
                        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
                    </label>
                </div>
                <div>
                    <label>
                        Check-in:
                        <input type="date" value={checkin} onChange={(e) => setCheckin(e.target.value)} required />
                    </label>
                </div>
                <div>
                    <label>
                        Check-out:
                        <input type="date" value={checkout} onChange={(e) => setCheckout(e.target.value)} required />
                    </label>
                </div>
                <div>
                    <label>
                        Adults:
                        <input type="number" value={adults} onChange={(e) => setAdults(e.target.value)} min="1" required />
                    </label>
                </div>
                <div>
                    <label>
                        Children:
                        <input type="number" value={children} onChange={(e) => setChildren(e.target.value)} min="0" required />
                    </label>
                </div>
                <div>
                    <label>
                        Infants:
                        <input type="number" value={infants} onChange={(e) => setInfants(e.target.value)} min="0" required />
                    </label>
                </div>
                <div>
                    <label>
                        Pets:
                        <input type="number" value={pets} onChange={(e) => setPets(e.target.value)} min="0" required />
                    </label>
                </div>
                <button type="submit">Search</button>
            </form>

            {error && <div>Error: {error}</div>}
            {!isLoaded ? (
                <div>Loading...</div>
            )  : (
                
                <div className="results">
                    {items.map(item => (
                        <div key={item.id} className="listing" onClick={() => handleItemClick(item)}>
                            <h4>{item.name}</h4>
                            <p>Price: ${item.price.rate} {item.price.currency} per night</p>
                            <img src={item.images[0]} alt="Thumbnail" width="100" />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default SearchBar;

// import React, { useState, useEffect } from "react";
// import IosShareIcon from '@mui/icons-material/IosShare';
// import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';


// const SearchBar = () => {
//     const [isLoaded, setIsLoaded] = useState(false);
//     const [items, setItems] = useState([]);
//     const [error, setError] = useState(null);
//     const [location, setLocation] = useState('');
//     const [checkin, setCheckin] = useState('');
//     const [checkout, setCheckout] = useState('');
//     const [adults, setAdults] = useState(1);
//     const [children, setChildren] = useState(0);
//     const [infants, setInfants] = useState(0);
//     const [pets, setPets] = useState(0);
//     const [selectedItem, setSelectedItem] = useState(null);
//     const fetchData = async () => {
//         const url = `https://airbnb13.p.rapidapi.com/search-location?location=${location}&checkin=${checkin}&checkout=${checkout}&adults=${adults}&children=${children}&infants=${infants}&pets=${pets}&page=1&currency=USD`;
//         const options = {
//             method: 'GET',
//             headers: {
//                 'X-RapidAPI-Key': '6a85a1be0amshfa9a4983738ed1bp1b867ajsnddc4a82a15a4',
//                 'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
//             }
//         };
//         try {
//             const response = await fetch(url, options);
//             if (!response.ok) {
//                 throw new Error(`Error: ${response.statusText}`);
//             }
//             const json = await response.json();
//             console.log(json); 
//             if (json.results) {
//                 setItems(json.results);
//             } else {
//                 throw new Error('Invalid data structure');
//             }
//             setIsLoaded(true);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//             setError(error.message);
//             setIsLoaded(true);
//         }
//     };
//     const handleSearch = (e) => {
//         e.preventDefault();
//         setIsLoaded(false);
//         setItems([]);
//         setError(null);
//         fetchData();
//     };
//     const handleItemClick = (item) => {
//         setSelectedItem(item);
//     };
//     const renderItemDetails = (item) => {
//         return (
//             <div className="item-details">
//                 <h4>{item.name}</h4>
//                 <p>{item.address}</p>
//                 <p>{item.type}</p>
//                 <p>Rating: {item.rating} ({item.reviewsCount} reviews)</p>
//                 <p>Price: ${item.price.rate} {item.price.currency} per night</p>
//                 <div className="images">
//                     {item.images.map((image, index) => (
//                         <img key={index} src={image} alt={`Image ${index + 1}`} width="100" />
//                     ))}
//                 </div>
//                 <div className='Name_icons'>
//                     <div className="Name_share">
//                         <IosShareIcon />
//                         <a href="#">Share</a>
//                     </div>
//                     <div className='Name_save'>
//                         <FavoriteBorderOutlinedIcon />
//                         <a href="#">Save</a>
//                     </div>
//                 </div>
//                 <div className="book-now">
//                     <h3>Book Now</h3>
//                     {/* Reservation area implementation goes here */}
//                 </div>
//             </div>
//         );
//     };
//     return ( 
//         <div className="NameofAirbnb"> 
//             <form onSubmit={handleSearch}>
//                 <div>
//                     <label>
//                         Location:
//                         <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
//                     </label>
//                 </div>
//                 <div>
//                     <label>
//                         Check-in:
//                         <input type="date" value={checkin} onChange={(e) => setCheckin(e.target.value)} required />
//                     </label>
//                 </div>
//                 <div>
//                     <label>
//                         Check-out:
//                         <input type="date" value={checkout} onChange={(e) => setCheckout(e.target.value)} required />
//                     </label>
//                 </div>
//                 <div>
//                     <label>
//                         Adults:
//                         <input type="number" value={adults} onChange={(e) => setAdults(e.target.value)} min="1" required />
//                     </label>
//                 </div>
//                 <div>
//                     <label>
//                         Children:
//                         <input type="number" value={children} onChange={(e) => setChildren(e.target.value)} min="0" required />
//                     </label>
//                 </div>
//                 <div>
//                     <label>
//                         Infants:
//                         <input type="number" value={infants} onChange={(e) => setInfants(e.target.value)} min="0" required />
//                     </label>
//                 </div>
//                 <div>
//                     <label>
//                         Pets:
//                         <input type="number" value={pets} onChange={(e) => setPets(e.target.value)} min="0" required />
//                     </label>
//                 </div>
//                 <button type="submit">Search</button>
//             </form>
//             {error && <div>Error: {error}</div>}
//             {!isLoaded ? (
//                 <div>Loading...</div>
//             ) : selectedItem ? (
//                 renderItemDetails(selectedItem)
//             ) : (
//                 <div className="results">
//                     {items.map(item => (
//                         <div key={item.id} className="listing" onClick={() => handleItemClick(item)}>
//                             <h4>{item.name}</h4>
//                             <p>Price: ${item.price.rate} {item.price.currency} per night</p>
//                             <img src={item.images[0]} alt="Thumbnail" width="100" />
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// }
// export default SearchBar;