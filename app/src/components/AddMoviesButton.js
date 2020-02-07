import React from "react";
import { Button } from "reactstrap";
import {ActionAddMovie} from '../reducers/moviesReducer';
import {useDispatch} from 'react-redux';
import axios from 'axios';

const AddMovies = () => {

	const dispatch = useDispatch();

	const addMovie = (data) => axios({
		method: 'post',
		url: 'https://learn-mern-stack-28.herokuapp.com/posts',
		data: data})

	return (
		<Button
			color="dark"
			style={{
				marginBottom: "2rem"
			}}
			onClick={() => {
				const namePrompt = prompt("Enter what U want");
				if (namePrompt) {

					const update = {id : Math.floor(Math.random() * Math.floor(5000)), title:'Vartago', desc: namePrompt};
					
					addMovie(update);
					dispatch(ActionAddMovie(update));
				}
			}}>
			Ajouter un Film
		</Button>
	);
};

export default AddMovies;
