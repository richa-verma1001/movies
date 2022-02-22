import React, { Component } from 'react';
import Header from './components/Header';
import ListMovies from './components/ListMovies';
import Pagination from './components/common/Pagination';
import { deleteMovie, getMovies, getMoviesForGenre } from './services/fakeMovieService';
import { getMoviesPerPage, getPageCount } from './utils/paginationHelper';
import { getGenres } from './services/fakeGenreService';
import Navigation from './components/common/Navigation';

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
    console.log('genre clicked' + genreId);
    const movies = genreId === '' ? getMovies() : getMoviesForGenre(genreId);
    const totalPages = getPageCount(this.PAGE_SIZE, movies);

    this.setState({
      movies: movies,
      pageSelected: 1,
      totalPages: totalPages,
      selectedGenre: genreId
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
            <ListMovies
              onDelete={this.handleDelete}
              onFavorite={this.handleFavorite}
              movies={moviesOnPage} />
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
