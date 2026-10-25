import MovieCard from './MovieCard';

function MovieGrid({ movies, favorites = [], setFavorites = () => {}, onRemove }) {
  return (
    <div className="movie-grid">
      {movies.map(movie => (
        <MovieCard 
          key={movie.id} 
          movie={movie}
          favorites={favorites}
          setFavorites={setFavorites}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}

export default MovieGrid;
