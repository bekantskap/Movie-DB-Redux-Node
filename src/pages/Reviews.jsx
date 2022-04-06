import { useSelector } from 'react-redux';
import React from 'react';
import ReviewCard from '../components/ReviewCard';

export default function Reviews() {
  const reviewedMovies = useSelector(state => {
    return state.movieStore;
  });

  return (
    <div>
      {reviewedMovies
        .filter(movie => (movie.rated = true))
        .map(filteredMovie => (
          <li>
            <ReviewCard movie={filteredMovie} />
          </li>
        ))}
    </div>
  );
}
