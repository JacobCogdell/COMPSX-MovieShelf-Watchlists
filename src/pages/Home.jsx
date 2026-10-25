import { useState, useEffect } from "react";
import MovieGrid from "../components/MovieGrid";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
import { getPopularMovies } from "../services/movieService";

function Home({ movies, favorites, setFavorites }) {
  const [popularMovies, setPopularMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(null);

        const movieData = await getPopularMovies();
        setPopularMovies(movieData);
      } catch (err) {
        setError("Failed to load movies. Please try again later.");
        setPopularMovies([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const displayMovies = movies.length > 0 ? movies : popularMovies;

  if (loading) {
    return (
      <main className="main-content">
        <LoadingSpinner />
      </main>
    );
  }

  if (error) {
    return (
      <main className="main-content">
        <ErrorMessage message={error} />
      </main>
    );
  }

  return (
    <main className="main-content">
      <div className="content-header">
        <h2>{movies.length > 0 ? "Search Results" : "Popular Movies"}</h2>
        <p>Discover and save your favorite films</p>
      </div>

      <MovieGrid 
        movies={displayMovies}
        favorites={favorites}
        setFavorites={setFavorites}
      />
    </main>
  );
}

export default Home;
