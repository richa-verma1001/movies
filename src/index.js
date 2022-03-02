import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import MoviesContainer from './components/MoviesContainer';
import Movies from './routes/Movies';
import Customers from './routes/Customers';
import Rentals from './routes/Rentals';
import LoginForm from './routes/LoginForm';
import RegisterForm from './routes/RegisterForm';
import WithNavigate from './components/common/WithNavigate';
import NotFound from './routes/NotFound';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Movies />} />
        <Route path="movies" element={<Movies />} >
          <Route index element={<MoviesContainer />} />
          <Route path="new" element={<WithNavigate />} />
          <Route path=":movieid" element={<WithNavigate />} />
        </Route>
        <Route path="customers" element={<Customers />} />
        <Route path="rentals" element={<Rentals />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="register" element={<RegisterForm />} />
        <Route path="*" element={<NotFound />} />
      </Route>

    </Routes>
  </BrowserRouter >,
  document.getElementById('root'));