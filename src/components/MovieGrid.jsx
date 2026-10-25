import MovieCard from './MovieCard';

function MovieGrid({ movies, favorites, setFavorites }) {
  return (
    <div className="movie-grid">
      {movies.map(movie => (
        <MovieCard 
          key={movie.id} 
          movie={movie}
          favorites={favorites}
          setFavorites={setFavorites}
        />
      ))}
    </div>
  );
}

export default MovieGrid;
