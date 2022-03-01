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

export function sortBy(property, movies, order) {
  movies = movies.sort((a, b) => {
    if (order === 'asc')
      return getPropertyValue(property, a) - getPropertyValue(property, b);
    return getPropertyValue(property, b) - getPropertyValue(property, a);
  });
  return movies;
}

function getPropertyValue(property, obj) {
  let result = '';
  switch (property) {
    case 'title':
      result = obj[property][0].charCodeAt();
      break;
    case 'numberInStock':
    case 'dailyRentalRate':
      result = Number(obj[property]);
      break;
    case 'genre':
      result = obj.genre.name[0].charCodeAt();
      break;
    case 'favorite':
      result = obj.favorite;
      break;
    default:
      result = '';
  }
  return result;
}


