import React, { createContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Movie from './pages/Movie';
import Reviews from './pages/Reviews';
import Start from './pages/Start';
import WatchList from './pages/WatchList';
import WriteReviews from './pages/WriteReview';

export const MovieContext = createContext();

function App() {
  const [movieList, setMovieList] = useState([]);
  const [movie, setMovie] = useState();
  const [movieId, setMovieId] = useState(0);
  const [review, setReview] = useState();
  const [rating, setRating] = useState(0);
  const [sendToAction, setSendToAction] = useState({
    id: 0,
    review: '',
    rating: 0,
  });

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
      review,
      setReview,
      movieId,
      setMovieId,
      sendToAction,
      setSendToAction,
    }),
    [
      movieList,
      setMovieList,
      movie,
      setMovie,
      rating,
      setRating,
      review,
      setReview,
      movieId,
      setMovieId,
      sendToAction,
      setSendToAction,
    ]
  );

  return (
    <MovieContext.Provider value={providerValue}>
      <Router>
        <header className="navbar">
          <img src={'img/fmbdlogonew.png'} alt="logo"></img>
          <nav>
            <ul>
              <li>
                <Link className="nav-link" to="/">
                  Start
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/reviews">
                  Reviews
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/watchlist">
                  Watch List
                </Link>
              </li>
            </ul>
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
            <Route path="/movie" element={<Movie />}></Route>
          </Routes>
        </main>
      </Router>
    </MovieContext.Provider>
  );
}

export default App;
