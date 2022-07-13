import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Favoritos from './pages/Favoritos/Favoritos';
import Home from './pages/home/Home';
import MasInfo from './pages/MasInfo/MasInfo';
import Peliculas from './pages/Peliculas/Peliculas';

function App() {
  return (
    <div >
      <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Peliculas' element={<Peliculas />}></Route>
        <Route path='/Favoritos' element={<Favoritos />}></Route>
        <Route path='/:id' element={<MasInfo />}></Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
