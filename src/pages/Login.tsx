import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';
import { 
  Shield, 
  QrCode, 
  ShieldCheck, 
  AlertCircle, 
  LogIn 
} from 'lucide-react';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: { pathname: string } })?.from?.pathname ?? '/';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) { setError('Please fill in all fields.'); return; }
    setError(''); setLoading(true);
    try {
      await login(email, password);
      // Redirect to role dashboard
      navigate(from === '/' ? getDashboardPath(email) : from, { replace: true });
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Login failed.');
    } finally {
      setLoading(false);
    }
  };

  const getDashboardPath = (email: string) => {
    if (email.includes('farmer')) return '/farmer';
    if (email.includes('processor')) return '/processor';
    if (email.includes('distributor')) return '/distributor';
    if (email.includes('retailer')) return '/retailer';
    if (email.includes('admin')) return '/admin';
    return '/farmer';
  };


  return (
    <div className="min-h-screen bg-surface flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-1 flex overflow-hidden mt-[72px]">
        {/* Left Panel - Hidden on Mobile */}
        <div className="hidden lg:flex lg:w-1/2 bg-slate-50 flex-col justify-center p-20 text-slate-900 relative border-r border-slate-200/60">
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0050e3 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }}></div>
          
          <div className="relative z-10">
            <h2 className="text-5xl font-black leading-tight mb-8 tracking-tight text-slate-900">
              Blockchain-grade trust for the <span className="text-blue-600">entire supply chain.</span>
            </h2>
            <div className="space-y-6">
              {[
                { icon: Shield, text: 'Immutable ledger records for every batch' },
                { icon: QrCode, text: 'Instant consumer verification via QR' },
                { icon: ShieldCheck, text: 'Soulbound NFT certifications for farmers' },
              ].map(f => (
                <div key={f.text} className="flex items-center gap-4 group bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-200 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <f.icon className="w-6 h-6" />
                  </div>
                  <span className="text-slate-700 text-lg font-bold">{f.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Panel - Login Form */}
        <div className="flex-1 flex items-center justify-center p-8 bg-white overflow-y-auto">
          <div className="w-full max-w-md py-12">
            <div className="mb-10 text-center lg:text-left">
              <h1 className="text-4xl font-black text-on-surface mb-3 tracking-tight">Welcome back</h1>
              <p className="text-on-surface-variant text-lg">Sign in to your secure chain account.</p>
            </div>

            {error && (
              <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-100 rounded-xl mb-8 text-red-700 text-sm font-bold">
                <AlertCircle className="w-4 h-4" />
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2 relative">
                <label className="block text-xs font-black text-on-surface-variant uppercase tracking-widest pl-1">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full bg-surface-container-low border-2 border-transparent rounded-2xl p-4 text-on-surface focus:outline-none focus:border-primary-container/30 focus:ring-4 focus:ring-primary-container/5 transition-all text-lg"
                  autoComplete="email"
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-end pr-1">
                  <label className="block text-xs font-black text-on-surface-variant uppercase tracking-widest">Password</label>
                  <button type="button" className="text-[10px] font-bold text-primary hover:underline">Forgot password?</button>
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-surface-container-low border-2 border-transparent rounded-2xl p-4 text-on-surface focus:outline-none focus:border-primary-container/30 focus:ring-4 focus:ring-primary-container/5 transition-all text-lg"
                  autoComplete="current-password"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-primary-container text-on-primary rounded-full font-black text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-60 flex items-center justify-center gap-3 mt-4"
              >
                {loading ? (
                  <><div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin" /> Signing in…</>
                ) : (
                  <>Connect Account <LogIn className="w-5 h-5" /></>
                )}
              </button>
            </form>

            <p className="text-center text-sm text-on-surface-variant mt-10 font-medium">
              New to the chain?{' '}
              <Link to="/signup" className="text-primary font-black hover:underline decoration-2 underline-offset-4">Create an account</Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
