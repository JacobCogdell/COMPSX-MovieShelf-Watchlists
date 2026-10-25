import { useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";
import MovieGrid from "../components/MovieGrid";

function Watchlist({ favorites, setFavorites }) {
  const { watchlist, removeFromWatchlist } = useContext(MovieContext);

  return (
    <main className="main-content">
      <div className="content-header">
        <h2>My Watchlist</h2>
        <p>Movies you’ve saved to watch later</p>
      </div>

      {watchlist.length > 0 ? (
        <MovieGrid 
          movies={watchlist}
          favorites={favorites}
          setFavorites={setFavorites}
          onRemove={removeFromWatchlist}
        />
      ) : (
        <div className="empty-state">
          <p>Your watchlist is empty. Add some movies!</p>
        </div>
      )}
    </main>
  );
}

export default Watchlist;
