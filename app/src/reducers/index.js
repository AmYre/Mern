import {moviesReducer} from './moviesReducer';
import {gamesReducer} from './addGames';
import {combineReducers} from 'redux';

const reducers = combineReducers(
    {
        handleMovies : moviesReducer,
        handleGames : gamesReducer,
    }
) 

export default reducers;