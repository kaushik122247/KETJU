import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth, Role } from '../context/AuthContext';
import Navbar from '../components/Navbar';

type RoleOption = Exclude<Role, null | 'admin'>;

const ROLES: { value: RoleOption; label: string; icon: string; description: string }[] = [
  { value: 'farmer',      label: 'Farmer',      icon: 'agriculture',         description: 'Register product batches & log harvest events' },
  { value: 'processor',   label: 'Processor',   icon: 'precision_manufacturing', description: 'Log processing & packaging events' },
  { value: 'distributor', label: 'Distributor', icon: 'local_shipping',      description: 'Track shipments & distribution events' },
  { value: 'retailer',    label: 'Retailer',    icon: 'storefront',          description: 'Confirm receipt & manage shelf placement' },
];

export default function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState<RoleOption | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [recentEmails, setRecentEmails] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('ketju_recent_emails');
    if (stored) {
      try { setRecentEmails(JSON.parse(stored)); } catch { /* ignore */ }
    }
  }, []);

  const saveRecentEmail = (email: string) => {
    const updated = [email, ...recentEmails.filter(e => e !== email)].slice(0, 3);
    setRecentEmails(updated);
    localStorage.setItem('ketju_recent_emails', JSON.stringify(updated));
  };

  const validate = () => {
    if (!name.trim()) return 'Full name is required.';
    if (!email.includes('@')) return 'Enter a valid email address.';
    
    if (password.length < 6) return 'Password must be at least 6 characters.';
    
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    if (!specialCharRegex.test(password)) {
      return 'Please add a special character to create a stronger password.';
    }
    
    if (!selectedRole) return 'Please select your supply chain role.';
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate();
    if (err) { setError(err); return; }
    setError(''); setLoading(true);
    try {
      await signup({ name, email, password, role: selectedRole! });
      saveRecentEmail(email);
      const paths: Record<RoleOption, string> = {
        farmer: '/farmer', processor: '/processor',
        distributor: '/distributor', retailer: '/retailer',
      };
      navigate(paths[selectedRole!], { replace: true });
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Signup failed.');
    } finally {
      setLoading(false);
    }
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
              Join the future of <span className="text-blue-600">food transparency.</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-12 max-w-lg font-medium">
              Every stakeholder from farmer to retailer plays a critical role in building a trust-based ecosystem on the Polygon blockchain.
            </p>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                <span className="material-symbols-outlined text-emerald-500 text-2xl">check_circle</span>
                <span className="text-slate-700 font-bold">Verified Producer Network</span>
              </div>
              <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                <span className="material-symbols-outlined text-emerald-500 text-2xl">check_circle</span>
                <span className="text-slate-700 font-bold">Immutable Audit Logs</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Signup Form */}
        <div className="flex-1 flex items-center justify-center p-8 bg-white overflow-y-auto">
          <div className="w-full max-w-md py-12">
            <div className="mb-8 text-center lg:text-left">
              <h1 className="text-4xl font-black text-on-surface mb-3 tracking-tight">Create your account</h1>
              <p className="text-on-surface-variant text-lg">Get started in under 60 seconds.</p>
            </div>

            {error && (
              <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-100 rounded-xl mb-6 text-red-700 text-sm font-bold animate-shake">
                <span className="material-symbols-outlined text-sm">error</span>
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Recent Account Suggestion */}
              {recentEmails.length > 0 && (
                <div className="p-3 bg-surface-container-low rounded-xl border border-primary-container/10 flex flex-col gap-2">
                  <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest pl-1">Sign up with recent email?</p>
                  <div className="flex flex-wrap gap-2">
                    {recentEmails.map(re => (
                      <button
                        key={re}
                        type="button"
                        onClick={() => setEmail(re)}
                        className="px-3 py-1.5 rounded-full bg-white border border-slate-100 text-xs font-bold text-on-surface-variant hover:border-primary-container/30 transition-all shadow-sm"
                      >
                        {re}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <label className="block text-xs font-black text-on-surface-variant uppercase tracking-widest pl-1">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full bg-surface-container-low border-2 border-transparent rounded-2xl p-4 text-on-surface focus:outline-none focus:border-primary-container/30 focus:ring-4 focus:ring-primary-container/5 transition-all text-lg"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-xs font-black text-on-surface-variant uppercase tracking-widest pl-1">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full bg-surface-container-low border-2 border-transparent rounded-2xl p-4 text-on-surface focus:outline-none focus:border-primary-container/30 focus:ring-4 focus:ring-primary-container/5 transition-all text-lg"
                  autoComplete="email"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-black text-on-surface-variant uppercase tracking-widest pl-1">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="6+ characters"
                  className="w-full bg-surface-container-low border-2 border-transparent rounded-2xl p-4 text-on-surface focus:outline-none focus:border-primary-container/30 focus:ring-4 focus:ring-primary-container/5 transition-all text-lg"
                />
              </div>

              {/* Role Selection */}
              <div className="space-y-3 pb-4">
                <label className="block text-xs font-black text-on-surface-variant uppercase tracking-widest pl-1">Your Network Role *</label>
                <div className="grid grid-cols-2 gap-3">
                  {ROLES.map(r => (
                    <button
                      key={r.value}
                      type="button"
                      onClick={() => setSelectedRole(r.value)}
                      className={`p-4 rounded-2xl border-2 text-left transition-all ${
                        selectedRole === r.value
                          ? 'border-primary-container bg-primary/5 shadow-inner'
                          : 'border-outline-variant/5 bg-surface-container-low hover:border-primary/20'
                      }`}
                    >
                      <span className={`material-symbols-outlined text-2xl mb-2 block ${selectedRole === r.value ? 'text-primary-container' : 'text-on-surface-variant'}`}>
                        {r.icon}
                      </span>
                      <p className={`font-black text-sm ${selectedRole === r.value ? 'text-primary-container' : 'text-on-surface'}`}>{r.label}</p>
                      <p className="text-[10px] text-on-surface-variant mt-1 leading-tight font-medium">{r.description}</p>
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-primary-container text-on-primary rounded-full font-black text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-60 flex items-center justify-center gap-3"
              >
                {loading ? (
                  <><div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin" /> Creating Account…</>
                ) : (
                  <>Create Account <span className="material-symbols-outlined">person_add</span></>
                )}
              </button>
            </form>

            <p className="text-center text-sm text-on-surface-variant mt-10 font-medium">
              Already part of the chain?{' '}
              <Link to="/login" className="text-primary font-black hover:underline decoration-2 underline-offset-4">Sign in here</Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
