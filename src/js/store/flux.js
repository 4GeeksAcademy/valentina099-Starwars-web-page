 const apiUrl = "https://swapi.dev/api"
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],

			people: null,
			planets: null
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			getPeople: async () => {
				try {
					const response = await fetch(`${apiUrl}/people`)
					if(!response.ok){
						throw new Error("error fetching people")
					}
					const data = await response.json()
					setStore({people:data.results})
				} catch (error) {
					console.log(error)
					setStore({people:false})
				}
			},

			getPlanets: async () => {
				try {
					const response = await fetch(`${apiUrl}/planets`)
					if(!response.ok){
						throw new Error("error fetching planets")
					}
					const data = await response.json()
					setStore({planets:data.results})
				} catch (error) {
					console.log(error)
					setStore({planets:false})
				}
			},

			
		}
	};
};

export default getState;


