
export const ActionInitMovies = (data) => {
    return {
        type: 'INIT_MOVIES',
        payload: data
    }
}


export const ActionAddMovie = (data) => {
    return {
        type: 'ADD_MOVIE',
        payload: data
    }
}

export const ActionDelMovie = (id) => {
    return {
        type: 'DEL_MOVIE',
        payload: id
    }
}

export const moviesReducer = (state = [], action) => {
        
        switch (action.type) 
        {
            case 'INIT_MOVIES' :
                return action.payload;
            case 'ADD_MOVIE' :
                return [...state, action.payload];
            case 'DEL_MOVIE' :
                return state.filter(movie => movie.id !== action.payload);
            default :
                return state;
        }
}