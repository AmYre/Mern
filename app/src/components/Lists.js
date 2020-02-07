import React, { useState, useContext, useEffect } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import AddServices from "./AddServicesButton";
import AddMovies from "./AddMoviesButton";
import { GlobalContext } from "../context/GlobalContext";
import {useDispatch, useSelector} from 'react-redux';
import {ActionDelMovie, ActionInitMovies} from '../reducers/moviesReducer';
import axios from 'axios';


const ServicesList = props => {
	const [services, setServices, isLoading, isError] = useContext(GlobalContext);
	const [moviesLoading, setMoviesLoading] = useState(true);
	const [moviesError, setMoviesError] = useState(false);
	const movies = useSelector(state => state)||[];
	const dispatch = useDispatch();

	useEffect( () => {
		
		axios.get(process.env.PUBLIC_URL+'/posts')
			.then( response => {dispatch(ActionInitMovies(response.data));setMoviesLoading(false)} )
			.catch(err => {setMoviesError(true);setMoviesLoading(false)})
	}, []);

	const delService = (id) => axios.delete(process.env.PUBLIC_URL+`/posts/${id}`)
	.then(resp => console.log(resp));

	return (

	<div>
		<Container style={{marginBottom: '2rem'}}>
		<AddServices></AddServices>
			<ListGroup>{isLoading ? (<p> Data is loading... </p>) : ( isError ? (<p> Sorry we did not found the data</p>) : (
				<TransitionGroup className="services-list">
					
					{services.map(({ id, title, desc }) => (
						<CSSTransition key={id} timeout={500} classNames="fade">
							<ListGroupItem className="list">
								{desc}
								<Button
									className={'remove-btn'+id}
									color="danger"
									size="sm"
									onClick={() => {
										delService(id);
										setServices(services.filter(service => service.id !== id))
									}}>
									X
								</Button>
							</ListGroupItem>
						</CSSTransition>
					))}
					
				</TransitionGroup>))}
			</ListGroup>
		</Container>
		
		<Container>
			<AddMovies></AddMovies>
			<ListGroup> {moviesLoading ? (<p> Movies are loading... </p>) : ( moviesError ? (<p> Sorry we did not found the movies</p>) : (
				<TransitionGroup className="movies-list">
					{movies.map(({id, desc}) => (
						<CSSTransition key={id} timeout={500} classNames="fade">
							<ListGroupItem className="list">
								{desc}
								<Button
									className={'remove-btn'+id}
									color="danger"
									size="sm"
									onClick={() => {
										dispatch(ActionDelMovie(id));
										delService(id);
									}}>
									X
								</Button>
							</ListGroupItem>
						</CSSTransition>
					))}
				</TransitionGroup>))}
			</ListGroup>
		</Container>
	</div>
	);
};

export default ServicesList;
