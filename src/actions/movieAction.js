const addMovie = m => ({
  type: 'ADD_MOVIE',
  payload: {
    id: m.id,
    title: m.title,
    year: m.year,
    runtime: m.runtime,
    genres: [m.genres],
    director: m.director,
    actors: m.actors,
    plot: m.plot,
    posterUrl: m.posterUrl,
    review: '',
    rating: null,
    rated: false,
  },
});

const removeMovie = id => ({
  type: 'REMOVE_MOVIE',
  payload: id,
});

const addReview = m => ({
  type: 'ADD_REVIEW',
  payload: {
    id: m.id,
    review: m.review,
    rating: m.rating,
  },
});

export { removeMovie, addMovie, addReview };
