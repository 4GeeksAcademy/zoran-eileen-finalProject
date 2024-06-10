const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
        },
        actions: {
            fetchData: async (location, checkin, checkout, adults, children, infants, pets) => {
                const url = `https://airbnb13.p.rapidapi.com/search-location?location=${location}&checkin=${checkin}&checkout=${checkout}&adults=${adults}&children=${children}&infants=${infants}&pets=${pets}&page=1&currency=USD`;
                const options = {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': 'd56c033ce8msh715f3141600bf71p136d3ejsnd91870ed8310',
                        'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
                    }
                };
                try {
                    const response = await fetch(url, options);
                    if (!response.ok) {
                        throw new Error(`Error: ${response.statusText}`);
                    }
                    const json = await response.json();
                    if (json.results) {
                        setStore({ items: json.results });
                    } else {
                        throw new Error('Invalid data structure');
                    }
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            }
        }
    };
};

export default getState;
