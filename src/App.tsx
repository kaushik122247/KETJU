import React from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { AppProvider } from './context/AppContext';
import ProtectedRoute from './components/ProtectedRoute';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import RegisterProduct from './pages/RegisterProduct';
import FarmerDashboard from './pages/FarmerDashboard';
import ProcessorDashboard from './pages/ProcessorDashboard';
import DistributorDashboard from './pages/DistributorDashboard';
import RetailerDashboard from './pages/RetailerDashboard';
import AdminPanel from './pages/AdminPanel';
import VerifyProduct from './pages/VerifyProduct';
import LogEvent from './pages/LogEvent';
import QRScanner from './pages/QRScanner';
import About from './pages/About';

import './App.css';

const RoleDashboard: React.FC = () => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  switch (user.role) {
    case 'farmer':      return <FarmerDashboard />;
    case 'processor':   return <ProcessorDashboard />;
    case 'distributor': return <DistributorDashboard />;
    case 'retailer':    return <RetailerDashboard />;
    case 'admin':       return <AdminPanel />;
    default:            return <Navigate to="/login" replace />;
  }
}

const App: React.FC = () => {

  return (
    <AuthProvider>
      <AppProvider>
        <div className="text-on-surface selection:bg-primary-container selection:text-on-primary-container min-h-screen bg-surface">
          <Routes>
            {/* Public */}
            <Route path="/"        element={<Home />} />
            <Route path="/login"   element={<Login />} />
            <Route path="/signup"  element={<Signup />} />
            <Route path="/verify"  element={<VerifyProduct />} />
            <Route path="/scanner" element={<QRScanner />} />
            <Route path="/about"   element={<About />} />

            {/* Protected — role-dispatched */}
            <Route path="/dashboard" element={<ProtectedRoute><RoleDashboard /></ProtectedRoute>} />

            <Route path="/farmer"      element={<ProtectedRoute allowedRoles={['farmer']}><FarmerDashboard /></ProtectedRoute>} />
            <Route path="/processor"   element={<ProtectedRoute allowedRoles={['processor']}><ProcessorDashboard /></ProtectedRoute>} />
            <Route path="/distributor" element={<ProtectedRoute allowedRoles={['distributor']}><DistributorDashboard /></ProtectedRoute>} />
            <Route path="/retailer"    element={<ProtectedRoute allowedRoles={['retailer']}><RetailerDashboard /></ProtectedRoute>} />
            <Route path="/admin"       element={<ProtectedRoute allowedRoles={['admin']}><AdminPanel /></ProtectedRoute>} />

            <Route path="/register"  element={<ProtectedRoute><RegisterProduct /></ProtectedRoute>} />
            <Route path="/log-event" element={<ProtectedRoute><LogEvent /></ProtectedRoute>} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </AppProvider>
    </AuthProvider>
  );
}

export default App;
