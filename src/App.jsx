import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import RegisterProduct from './pages/RegisterProduct';
import FarmerDashboard from './pages/FarmerDashboard';
import AdminPanel from './pages/AdminPanel';
import VerifyProduct from './pages/VerifyProduct';
import LogEvent from './pages/LogEvent';
import QRScanner from './pages/QRScanner';

import './App.css'

function App() {
  const navigate = useNavigate();

  // Intercept all span/div/a clicks that have a meaningful routing action.
  // Actually, standard <a> tags are best caught globally here.
  const handleGlobalClick = (e) => {
    const a = e.target.closest('a');
    if (a) {
      const href = a.getAttribute('href');
      if (href && href.startsWith('/')) {
        e.preventDefault();
        navigate(href);
      }
    }
  };

  return (
    <div 
      className="text-on-surface selection:bg-primary-container selection:text-on-primary-container min-h-screen bg-surface"
      onClick={handleGlobalClick}
    >
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterProduct />} />
          <Route path="/farmer" element={<FarmerDashboard />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/verify" element={<VerifyProduct />} />
          <Route path="/log-event" element={<LogEvent />} />
          <Route path="/scanner" element={<QRScanner />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
