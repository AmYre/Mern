import React, { useState, useEffect, createContext } from "react";
import axios from 'axios';

export const GlobalContext = createContext()

export const DataContext = props => {
	const [services, setServices] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	useEffect( () => {
		axios.get('https://learn-mern-stack-28.herokuapp.com/posts')
			.then( response => {setServices(response.data);setIsLoading(false)} )
			.catch(err => setIsError(true))
	}, []);


	return (

		<GlobalContext.Provider value={[services, setServices, isLoading, isError]}>
			{props.children}
		</GlobalContext.Provider>

	)
}
