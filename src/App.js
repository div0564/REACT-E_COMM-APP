import './App.css';
import { Home } from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import { Wishlist } from './pages/Wishlist';
import { Cart } from './pages/Cart';
import { Login } from './pages/Login';
import { ProtectedRoute } from './components/ProtectedRoute';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/wishlist' element={<ProtectedRoute><Wishlist /></ProtectedRoute>} />
      <Route path='/cart' element={<ProtectedRoute><Cart /></ProtectedRoute>} />
      <Route path='/auth/login' element={<Login />} />
    </Routes>
  );
}

export default App;
