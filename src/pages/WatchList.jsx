import { useSelector } from 'react-redux';
import React from 'react';
import WatchListCard from '../components/WatchListCard';

export default function WatchList() {
  const movie = useSelector(state => {
    return state.movieStore;
  });

  return (
    <main>
      <h2 className="watch-list__header">Watch List</h2>
      <div className="watch-list__container">
        {movie.map((mov, index) => {
          return <WatchListCard movie={mov} key={index} />;
        })}
      </div>
    </main>
  );
}
