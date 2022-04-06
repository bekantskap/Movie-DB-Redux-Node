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
      const key = action.payload.id - 1;
      return {
        ...state,
        movieStore: {
          ...state.movieStore,
          [key]: {
            ...state.movieStore[key],
            review: action.payload.review,
            rating: action.payload.rating,
            rated: true,
          },
        },
      };
    }

    default:
      return state;
  }
};

export default movieReducer;
