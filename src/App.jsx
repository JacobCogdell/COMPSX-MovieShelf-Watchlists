import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import './App.css';
import { MovieProvider } from "./contexts/MovieContext";
import Watchlist from './pages/Watchlist';


function App() {
  // Search results (shared by Header + Home)
  const [searchResults, setSearchResults] = useState([]);

  // Favorites stored in localStorage
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  // Sync favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <MovieProvider>
      <Router>
        <div className="app">
          <Header setSearchResults={setSearchResults} />

          <Routes>
            <Route 
              path="/" 
              element={
                <Home 
                  movies={searchResults} 
                  favorites={favorites} 
                  setFavorites={setFavorites}
                />
              } 
            />

            <Route 
              path="/favorites" 
              element={<Favorites favorites={favorites} setFavorites={setFavorites} />}
            />

             <Route 
               path="/watchlist" 
               element={
                 <Watchlist 
                   favorites={favorites}
                   setFavorites={setFavorites}
                />
               }
            />
          </Routes>
        </div>
      </Router>
    </MovieProvider>
  );
}

export default App;
