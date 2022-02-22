export function getMoviesPerPage(pageNum, pageSize, movies) {
  let lastIndex = (pageNum * pageSize) - 1;
  let startIndex = lastIndex - pageSize + 1;
  lastIndex = movies.length > lastIndex ? lastIndex : movies.length - 1;
  let moviesForPage = [];

  for (let i = startIndex; i <= lastIndex; i++) {
    moviesForPage.push(movies[i]);
  }
  return moviesForPage;
}

export function getPageCount(pageSize, movies) {
  const numMovies = movies.length;
  const remainder = numMovies % pageSize;
  return remainder > 0 ? Math.floor((numMovies / pageSize)) + 1 : numMovies / pageSize;
}


