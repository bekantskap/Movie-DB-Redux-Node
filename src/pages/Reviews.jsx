import { useSelector } from 'react-redux';
import React from 'react';
import ReviewCard from '../components/ReviewCard';

export default function Reviews() {
  const reviewedMovies = useSelector(state => {
    return state.movieStore;
  });

  const filteredReviewedMovies = reviewedMovies.filter(
    movie => movie.rated !== false
  );

  return (
    <div className="review-container">
      {filteredReviewedMovies.map((filteredMovie, index) => (
        <ReviewCard movie={filteredMovie} key={index} />
      ))}
    </div>
  );
}
