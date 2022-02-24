import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Movies from './routes/Movies';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MoviesContainer from './components/MoviesContainer';
import MovieForm from './routes/MovieForm';
import Customers from './routes/Customers';
import Rentals from './routes/Rentals';
import NotFound from './routes/NotFound';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Movies />} />
        <Route path="movies" element={<Movies />} >
          <Route index element={<MoviesContainer />} />
          <Route path=":id" element={<MovieForm />} />
        </Route>
        <Route path="customers" element={<Customers />} />
        <Route path="rentals" element={<Rentals />} />
        <Route path="*" element={<NotFound />} />
      </Route>

    </Routes>
  </BrowserRouter >,
  document.getElementById('root'));