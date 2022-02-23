import React, { Component } from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import Pagination from './components/common/Pagination';
import Navigation from './components/common/Navigation';
import { deleteMovie, getMovies, getMoviesForGenre } from './services/fakeMovieService';
import { getMoviesPerPage, getPageCount, sortBy } from './utils/paginationHelper';
import { getGenres } from './services/fakeGenreService';

class Main extends Component {
  PAGE_SIZE = 3;

  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      pageSelected: 1,
      totalPages: 0,
      genres: [],
      selectedGenre: ''
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.handleFavorite = this.handleFavorite.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
    this.handleGenreClick = this.handleGenreClick.bind(this);
    this.handleSort = this.handleSort.bind(this);
  }

  componentDidMount() {
    this.setState({
      movies: getMovies(),
      totalPages: getPageCount(this.PAGE_SIZE, getMovies()),
      genres: getGenres()
    })
  }

  handleDelete(movieId) {
    let movies = [...this.state.movies];
    movies = movies.filter((movie) => movie._id != movieId);
    deleteMovie(movieId);
    this.setState({ movies });
  }

  handleFavorite(movieId) {
    let movies = [...this.state.movies];
    movies = movies.map((movie) => {
      if (movie._id == movieId) {
        // toggle favorite
        movie.favorite = !movie.favorite;
      }
      return movie;
    })
    this.setState({ movies });

  }
  handlePageClick(pageId, movies) {
    this.setState({
      movies: movies,
      pageSelected: pageId
    });
  }

  handleGenreClick(genreId) {
    const movies = genreId === '' ? getMovies() : getMoviesForGenre(genreId);
    const totalPages = getPageCount(this.PAGE_SIZE, movies);

    this.setState({
      movies: movies,
      pageSelected: 1,
      totalPages: totalPages,
      selectedGenre: genreId
    })
  }

  handleSort(property) {
    console.log(`sort called on property ${property}`);
    const movies = sortBy(property, getMovies(), 'asc');

    this.setState({
      movies: movies,
      pageSelected: 1,
      selectedGenre: ''
    })
  }

  render() {
    const moviesOnPage = getMoviesPerPage(this.state.pageSelected, this.PAGE_SIZE, this.state.movies);

    return (
      <div className='container' >
        <header>
          <Header movieCount={moviesOnPage.length} numOfMovies={this.state.movies.length} />
        </header>
        <main>
          <div className='sideNav'>
            <Navigation
              items={this.state.genres}
              selected={this.state.selectedGenre}
              onGenreClick={this.handleGenreClick} />
          </div>
          <div className="movies">
            <MovieList
              onDelete={this.handleDelete}
              onFavorite={this.handleFavorite}
              movies={moviesOnPage}
              onSort={this.handleSort} />
          </div>
        </main>
        <footer>
          <Pagination
            pageSelected={this.state.pageSelected}
            totalPages={this.state.totalPages}
            movies={this.state.movies}
            onPageChange={this.handlePageClick} />
        </footer>
      </div>
    )
  }

}

export default Main;
