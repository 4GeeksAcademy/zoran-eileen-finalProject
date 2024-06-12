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
                        'X-RapidAPI-Key': '56a56f15ffmsh72d939fef2de2d3p15ae95jsnb398be58221e',
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
