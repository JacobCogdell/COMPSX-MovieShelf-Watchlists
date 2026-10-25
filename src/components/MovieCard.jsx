import { useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";

function MovieCard({ movie, favorites, setFavorites }) {
  // Watchlist context
  const { watchlist, addToWatchlist, removeFromWatchlist } = useContext(MovieContext);

  // Favorite logic (unchanged)
  const isFavorite = favorites.some(fav => fav.id === movie.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      const updated = favorites.filter(fav => fav.id !== movie.id);
      setFavorites(updated);
    } else {
      setFavorites([...favorites, movie]);
    }
  };

  // Watchlist logic
  const isInWatchlist = watchlist.some(w => w.id === movie.id);

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://placehold.co/300x450/667eea/ffffff?text=No+Image";

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img 
          src={posterUrl}
          alt={movie.title}
        />
      </div>

      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>

        <div className="movie-details">
          <span className="movie-rating">⭐ {movie.vote_average}</span>
          <span className="movie-year">
            {movie.release_date ? movie.release_date.substring(0, 4) : "N/A"}
          </span>
        </div>

        {/* Favorites button */}
        <button 
          className="favorite-button"
          onClick={toggleFavorite}
        >
          {isFavorite ? "♥ Remove Favorite" : "♡ Add to Favorites"}
        </button>

        {/* Watchlist button */}
        <button
          className="watchlist-button"
          onClick={() =>
            isInWatchlist
              ? removeFromWatchlist(movie.id)
              : addToWatchlist(movie)
          }
        >
          {isInWatchlist ? "✓ In Watchlist" : "+ Add to Watchlist"}
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
