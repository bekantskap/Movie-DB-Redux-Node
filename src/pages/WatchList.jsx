import { useSelector } from 'react-redux';
import React from 'react';
import WatchListCard from '../components/WatchListCard';

export default function WatchList() {
  const movie = useSelector(state => {
    return state.movieStore;
  });

  return (
    <main>
      <h2>Watch List</h2>
      {movie.map((mov, index) => {
        return <WatchListCard movie={mov} key={index} />;
      })}
    </main>
  );
}
