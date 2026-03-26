import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';

const Login = () => {
  const [selectedRole, setSelectedRole] = useState('farmer');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleConnect = async () => {
    setIsLoading(true);
    setError('');
    
    try {
      const user = await login(selectedRole);
      
      const from = location.state?.from?.pathname;
      if (from && from !== '/' && from !== '/login') {
        navigate(from, { replace: true });
      } else {
        const roleRoutes = {
          farmer: '/farmer',
          processor: '/processor',
          distributor: '/distributor',
          retailer: '/retailer',
          admin: '/admin'
        };
        navigate(roleRoutes[user.role] || '/', { replace: true });
      }
    } catch (err) {
      setError('Connection failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const ROLES = [
    { id: 'farmer', icon: 'agriculture', label: 'Farmer', colorClass: 'bg-emerald-100 text-emerald-600' },
    { id: 'processor', icon: 'precision_manufacturing', label: 'Processor', colorClass: 'bg-amber-100 text-amber-600' },
    { id: 'distributor', icon: 'local_shipping', label: 'Distributor', colorClass: 'bg-orange-100 text-orange-600' },
    { id: 'retailer', icon: 'storefront', label: 'Retailer', colorClass: 'bg-purple-100 text-purple-600' },
    { id: 'admin', icon: 'admin_panel_settings', label: 'System Admin', colorClass: 'bg-blue-100 text-blue-600' }
  ];

  return (
    <div className="min-h-screen bg-surface flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center p-6 mt-[72px]">
        {/* Background Decorative Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-primary/5 blur-[100px]"></div>
          <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-secondary/5 blur-[100px]"></div>
        </div>

        <div className="w-full max-w-[480px]">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-lg border border-outline-variant/20 text-primary mb-6">
              <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance_wallet</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-on-surface mb-3">Connect Wallet</h1>
            <p className="text-on-surface-variant">Select your role to simulate connecting a Web3 wallet to the KETJU network.</p>
          </div>

          {/* Login Card */}
          <div className="bg-white rounded-3xl p-8 shadow-[0_24px_48px_-12px_rgba(27,26,37,0.06)] border border-outline-variant/20">
            {error && (
              <div className="bg-error/10 text-error p-4 rounded-xl mb-6 text-sm font-medium flex items-center gap-2">
                <span className="material-symbols-outlined">error</span>
                {error}
              </div>
            )}

            <div className="space-y-4 mb-8">
              <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest pl-1">
                Select Network Role
              </label>
              
              <div className="space-y-3">
                {ROLES.map((role) => (
                  <button
                    key={role.id}
                    onClick={() => setSelectedRole(role.id)}
                    className={"w-full flex items-center gap-4 p-4 rounded-2xl border-2 transition-all " + (selectedRole === role.id ? "border-primary bg-primary/5 shadow-sm" : "border-outline-variant/30 hover:border-primary/30 hover:bg-surface-container-lowest")}
                  >
                    <div className={"w-10 h-10 rounded-full flex items-center justify-center " + (selectedRole === role.id ? role.colorClass : "bg-surface-container text-on-surface-variant")}>
                      <span className="material-symbols-outlined text-[20px]">{role.icon}</span>
                    </div>
                    <div className="text-left flex-1">
                      <div className={"font-bold " + (selectedRole === role.id ? "text-primary" : "text-on-surface")}>
                        {role.label}
                      </div>
                      <div className="text-xs text-on-surface-variant">
                        Connect as {role.label.toLowerCase()} wallet
                      </div>
                    </div>
                    {selectedRole === role.id && (
                      <span className="material-symbols-outlined text-primary">check_circle</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleConnect}
              disabled={isLoading}
              className={"w-full py-4 rounded-full font-bold text-white shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 " + (isLoading ? "bg-primary/70 cursor-not-allowed" : "bg-primary hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 active:shadow-md")}
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Connecting...
                </>
              ) : (
                <>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg" alt="MetaMask" className="w-5 h-5" />
                  Connect MetaMask
                </>
              )}
            </button>
            
            <p className="text-center text-xs text-on-surface-variant mt-6">
              By connecting, you agree to KETJU's Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
