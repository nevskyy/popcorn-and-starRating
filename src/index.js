import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import './index.css';
import App from './App';

import { StarRating } from './StarRating';

const TestRating = () => {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating color='blue' maxRating={10} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <TestRating />
    <StarRating
      maxRating={5}
      messages={['terrible', 'bad', 'ok', 'good', 'amazing']}
      defaultRating={2}
    />
    <StarRating maxRating={5} color='red' size={24} className='test' /> */}
  </React.StrictMode>
);
