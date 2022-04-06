import React, { useContext, useState } from 'react';
import { MovieContext } from '../App';

const StarRating = () => {
  const x = useContext(MovieContext);

  const [hover, setHover] = useState(0);

  return (
    <div className="star-rating">
      {[...Array(10)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || x.rating) ? 'on' : 'off'}
            onClick={() => x.setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(x.rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};
export default StarRating;
