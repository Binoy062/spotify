import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import AlbumDetails from './pages/AlbumDetails';

function App() {
  return (
    <Router>
      <Navbar />
      <Player />  {/* Move Player component here */}
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flex: 1, padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/album/:id" element={<AlbumDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
