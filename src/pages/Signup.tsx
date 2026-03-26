import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth, Role } from '../context/AuthContext';

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

  const validate = () => {
    if (!name.trim()) return 'Full name is required.';
    if (!email.includes('@')) return 'Enter a valid email address.';
    if (password.length < 4) return 'Password must be at least 4 characters.';
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
    <div className="min-h-screen bg-surface flex">
      {/* Left Panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#01123F] to-primary flex-col justify-between p-12 text-white">
        <Link to="/" className="text-xl font-black flex items-center gap-2">
          <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>account_tree</span>
          KETJU
        </Link>
        <div>
          <h2 className="text-4xl font-extrabold leading-tight mb-6">Join the transparent supply chain revolution.</h2>
          <p className="text-white/70 text-lg leading-relaxed">
            Every stakeholder from farmer to retailer plays a role in building consumer trust through blockchain transparency.
          </p>
        </div>
        <p className="text-white/40 text-xs">© 2024 KETJU · Polygon Blockchain</p>
      </div>

      {/* Right Panel */}
      <div className="flex-1 flex items-center justify-center p-8 overflow-y-auto">
        <div className="w-full max-w-md py-8">
          <Link to="/" className="lg:hidden text-xl font-black text-primary flex items-center gap-2 mb-8">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>account_tree</span>
            KETJU
          </Link>

          <h1 className="text-3xl font-extrabold text-on-surface mb-2">Create your account</h1>
          <p className="text-on-surface-variant mb-8">Get started in under 2 minutes.</p>

          {error && (
            <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl mb-6 text-red-700 text-sm">
              <span className="material-symbols-outlined text-sm">error</span>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-on-surface-variant mb-2 uppercase tracking-wide">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Rajesh Kumar"
                className="w-full bg-surface-container-low border-none rounded-xl p-4 text-on-surface placeholder:text-outline/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-on-surface-variant mb-2 uppercase tracking-wide">Email</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full bg-surface-container-low border-none rounded-xl p-4 text-on-surface placeholder:text-outline/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
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
              />
            </div>

            {/* Role Selection */}
            <div>
              <label className="block text-sm font-bold text-on-surface-variant mb-3 uppercase tracking-wide">Your Role *</label>
              <div className="grid grid-cols-2 gap-3">
                {ROLES.map(r => (
                  <button
                    key={r.value}
                    type="button"
                    onClick={() => setSelectedRole(r.value)}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${
                      selectedRole === r.value
                        ? 'border-primary-container bg-primary/5'
                        : 'border-outline-variant/20 bg-surface-container-low hover:border-primary/30'
                    }`}
                  >
                    <span className={`material-symbols-outlined text-xl mb-2 block ${selectedRole === r.value ? 'text-primary-container' : 'text-on-surface-variant'}`}>
                      {r.icon}
                    </span>
                    <p className={`font-bold text-sm ${selectedRole === r.value ? 'text-primary-container' : 'text-on-surface'}`}>{r.label}</p>
                    <p className="text-xs text-on-surface-variant mt-1 leading-snug">{r.description}</p>
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-primary-container text-on-primary rounded-full font-bold text-sm shadow-lg shadow-primary/20 hover:bg-primary active:scale-[0.98] transition-all disabled:opacity-60 flex items-center justify-center gap-2 mt-2"
            >
              {loading ? (
                <><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> Creating account…</>
              ) : 'Create Account'}
            </button>
          </form>

          <p className="text-center text-sm text-on-surface-variant mt-6">
            Already have an account?{' '}
            <Link to="/login" className="text-primary font-bold hover:underline">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
