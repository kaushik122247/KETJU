<<<<<<< HEAD
import { Routes, Route, useNavigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import RegisterProduct from './pages/RegisterProduct';
import FarmerDashboard from './pages/FarmerDashboard';
import ProcessorDashboard from './pages/ProcessorDashboard';
import DistributorDashboard from './pages/DistributorDashboard';
import RetailerDashboard from './pages/RetailerDashboard';
=======
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { AppProvider } from './context/AppContext';
import ProtectedRoute from './components/ProtectedRoute';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import RegisterProduct from './pages/RegisterProduct.tsx';
import FarmerDashboard from './pages/FarmerDashboard.tsx';
import ProcessorDashboard from './pages/ProcessorDashboard.tsx';
import DistributorDashboard from './pages/DistributorDashboard.tsx';
import RetailerDashboard from './pages/RetailerDashboard.tsx';
>>>>>>> eb481ff724b31a3dcc300958d35c438936476810
import AdminPanel from './pages/AdminPanel';
import VerifyProduct from './pages/VerifyProduct.tsx';
import LogEvent from './pages/LogEvent.tsx';
import QRScanner from './pages/QRScanner.tsx';

import './App.css';

<<<<<<< HEAD
function App() {
  const navigate = useNavigate();

  const handleGlobalClick = (e) => {
    const a = e.target.closest('a');
    if (a) {
      const href = a.getAttribute('href');
      // Only intercept internal links that start with /
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
      <AuthProvider>
        <main>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/verify" element={<VerifyProduct />} />
            <Route path="/scanner" element={<QRScanner />} />
            
            {/* Protected Routes */}
            <Route path="/register" element={
              <ProtectedRoute allowedRoles={['farmer']}>
                <RegisterProduct />
              </ProtectedRoute>
            } />
            <Route path="/log-event" element={
              <ProtectedRoute allowedRoles={['processor', 'distributor', 'retailer']}>
                <LogEvent />
              </ProtectedRoute>
            } />
            
            {/* Role-Specific Dashboards */}
            <Route path="/farmer" element={
              <ProtectedRoute allowedRoles={['farmer']}>
                <FarmerDashboard />
              </ProtectedRoute>
            } />
            <Route path="/admin" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminPanel />
              </ProtectedRoute>
            } />
            {/* Placeholders for new dashboards */}
            <Route path="/processor" element={
              <ProtectedRoute allowedRoles={['processor']}>
                <ProcessorDashboard />
              </ProtectedRoute>
            } />
            <Route path="/distributor" element={
              <ProtectedRoute allowedRoles={['distributor']}>
                <DistributorDashboard />
              </ProtectedRoute>
            } />
            <Route path="/retailer" element={
              <ProtectedRoute allowedRoles={['retailer']}>
                <RetailerDashboard />
              </ProtectedRoute>
            } />
          </Routes>
        </main>
      </AuthProvider>
    </div>
  )
=======
function RoleDashboard() {
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
>>>>>>> eb481ff724b31a3dcc300958d35c438936476810
}

function App() {
  return (
    <AuthProvider>
      <AppProvider>
        <div className="text-on-surface min-h-screen bg-surface">
          <Routes>
            {/* Public */}
            <Route path="/"        element={<Home />} />
            <Route path="/login"   element={<Login />} />
            <Route path="/signup"  element={<Signup />} />
            <Route path="/verify"  element={<VerifyProduct />} />
            <Route path="/scanner" element={<QRScanner />} />

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
