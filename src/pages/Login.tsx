import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

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

  const demoAccounts = [
    { label: '🌾 Farmer', email: 'farmer@test.com' },
    { label: '⚙️ Processor', email: 'processor@test.com' },
    { label: '🚛 Distributor', email: 'distributor@test.com' },
    { label: '🏪 Retailer', email: 'retailer@test.com' },
  ];

  return (
    <div className="min-h-screen bg-surface flex">
      {/* Left Panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#01123F] to-primary flex-col justify-between p-12 text-white">
        <Link to="/" className="text-xl font-black flex items-center gap-2">
          <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>account_tree</span>
          KETJU
        </Link>
        <div>
          <h2 className="text-4xl font-extrabold leading-tight mb-6">
            Track every step of the supply chain with blockchain certainty.
          </h2>
          <div className="flex flex-col gap-4">
            {['Immutable blockchain records', 'Role-based access control', 'IPFS-backed certifications'].map(f => (
              <div key={f} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                </div>
                <span className="text-white/80 text-sm font-medium">{f}</span>
              </div>
            ))}
          </div>
        </div>
        <p className="text-white/40 text-xs">© 2024 KETJU · Powered by Polygon Blockchain</p>
      </div>

      {/* Right Panel */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <Link to="/" className="lg:hidden text-xl font-black text-primary flex items-center gap-2 mb-8">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>account_tree</span>
            KETJU
          </Link>

          <h1 className="text-3xl font-extrabold text-on-surface mb-2">Welcome back</h1>
          <p className="text-on-surface-variant mb-8">Sign in to your supply chain account.</p>

          {error && (
            <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl mb-6 text-red-700 text-sm">
              <span className="material-symbols-outlined text-sm">error</span>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-on-surface-variant mb-2 uppercase tracking-wide">Email</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full bg-surface-container-low border-none rounded-xl p-4 text-on-surface placeholder:text-outline/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                autoComplete="email"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-on-surface-variant mb-2 uppercase tracking-wide">Password</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Min. 4 characters"
                className="w-full bg-surface-container-low border-none rounded-xl p-4 text-on-surface placeholder:text-outline/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                autoComplete="current-password"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-primary-container text-on-primary rounded-full font-bold text-sm shadow-lg shadow-primary/20 hover:bg-primary active:scale-[0.98] transition-all disabled:opacity-60 flex items-center justify-center gap-2"
            >
              {loading ? (
                <><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> Signing in…</>
              ) : 'Sign In'}
            </button>
          </form>

          {/* Demo accounts */}
          <div className="mt-8">
            <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-3 text-center">Quick Demo — Click to fill</p>
            <div className="grid grid-cols-2 gap-2">
              {demoAccounts.map(acc => (
                <button
                  key={acc.email}
                  type="button"
                  onClick={() => { setEmail(acc.email); setPassword('demo1234'); }}
                  className="py-2 px-3 rounded-lg bg-surface-container text-on-surface-variant text-xs font-bold hover:bg-surface-container-high transition-colors text-left"
                >
                  {acc.label}<br />
                  <span className="font-mono font-normal opacity-70">{acc.email}</span>
                </button>
              ))}
            </div>
          </div>

          <p className="text-center text-sm text-on-surface-variant mt-8">
            Don't have an account?{' '}
            <Link to="/signup" className="text-primary font-bold hover:underline">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
