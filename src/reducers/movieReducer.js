const initialState = {
  movieStore: [],
};

const movieReducer = (state = initialState, action) => {
  let index = state.movieStore.findIndex(dup => dup.id == action.payload.id);
  switch (action.type) {
    case 'ADD_MOVIE':
      return {
        ...state,
        movieStore:
          index == -1
            ? [...state.movieStore, action.payload]
            : [...state.movieStore],
      };

    case 'REMOVE_MOVIE':
      return {
        ...state,
        movieStore: state.movieStore.filter(
          event => event.id !== action.payload
        ),
      };

    case 'ADD_REVIEW': {
      return {
        ...state,
        movieStore: state.movieStore.map(movie =>
          movie.id === action.payload.id
            ? {
                ...movie,
                review: action.payload.review,
                rating: action.payload.rating,
                rated: action.payload.rated,
              }
            : movie
        ),
      };
    }

    default:
      return state;
  }
};

export default movieReducer;
