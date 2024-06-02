const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
        },
        actions: {
            fetchData: async () => {
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



// FLUX TEMPLATE:
// const getState = ({ getStore, getActions, setStore }) => {
// 	return {
// 		store: {
// 			demo: [
// 				{
// 					title: "FIRST",
// 					background: "white",
// 					initial: "white"
// 				},
// 				{
// 					title: "SECOND",
// 					background: "white",
// 					initial: "white"
// 				}
// 			]
// 		},
// 		actions: {
// 			// Use getActions to call a function within a fuction
// 			exampleFunction: () => {
// 				getActions().changeColor(0, "green");
// 			},
// 			loadSomeData: () => {
// 				/**
// 					fetch().then().then(data => setStore({ "foo": data.bar }))
// 				*/
// 			},
// 			changeColor: (index, color) => {
// 				//get the store
// 				const store = getStore();

// 				//we have to loop the entire demo array to look for the respective index
// 				//and change its color
// 				const demo = store.demo.map((elm, i) => {
// 					if (i === index) elm.background = color;
// 					return elm;
// 				});

// 				//reset the global store
// 				setStore({ demo: demo });
// 			}
// 		}
// 	};
// };

// export default getState;