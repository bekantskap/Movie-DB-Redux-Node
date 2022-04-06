import React, { createContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Reviews from './pages/Reviews';
import Start from './pages/Start';
import WatchList from './pages/WatchList';
import WriteReviews from './pages/WriteReview';

export const MovieContext = createContext();

function App() {
  const [movieList, setMovieList] = useState([]);
  const [movie, setMovie] = useState('');
  const [rating, setRating] = useState(0);
  const url = 'http://localhost:5500/movies.json';

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setMovieList(data));
  }, []);

  const providerValue = React.useMemo(
    () => ({
      movieList,
      setMovieList,
      movie,
      setMovie,
      rating,
      setRating,
    }),
    [movieList, setMovieList, movie, setMovie, rating, setRating]
  );

  return (
    <MovieContext.Provider value={providerValue}>
      <Router>
        <header>
          <nav>
            <Link to="/">Start</Link>
            <Link to="/reviews">Reviews</Link>
            <Link to="/watchlist">Watch List</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route
              path="/"
              element={movieList.map((movie, index) => (
                <Start data={movie} key={index} />
              ))}
            ></Route>
            <Route path="/reviews" element={<Reviews />}></Route>
            <Route path="/writereviews" element={<WriteReviews />}></Route>
            <Route path="/watchlist" element={<WatchList />}></Route>
          </Routes>
        </main>
      </Router>
    </MovieContext.Provider>
  );
}

export default App;
