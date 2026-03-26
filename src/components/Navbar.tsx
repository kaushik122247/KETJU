import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth, Role } from '../context/AuthContext';

interface NavbarProps {
  role?: Role;
}

const roleConfig: Record<string, { label: string; color: string; links: { href: string; label: string }[] }> = {
  farmer: {
    label: 'Farmer Role',
    color: 'bg-[#16A34A]/10 text-[#16A34A]',
    links: [
      { href: '/farmer', label: 'Dashboard' },
      { href: '/register', label: 'Add Product' },
      { href: '/log-event', label: 'Log Event' },
    ],
  },
  processor: {
    label: 'Processor Role',
    color: 'bg-amber-100 text-amber-700',
    links: [
      { href: '/processor', label: 'Dashboard' },
      { href: '/log-event', label: 'Log Event' },
    ],
  },
  distributor: {
    label: 'Distributor Role',
    color: 'bg-orange-100 text-orange-700',
    links: [
      { href: '/distributor', label: 'Dashboard' },
      { href: '/log-event', label: 'Log Event' },
    ],
  },
  retailer: {
    label: 'Retailer Role',
    color: 'bg-purple-100 text-purple-700',
    links: [
      { href: '/retailer', label: 'Dashboard' },
      { href: '/log-event', label: 'Log Event' },
    ],
  },
  admin: {
    label: 'Admin',
    color: 'bg-red-100 text-red-700',
    links: [
      { href: '/admin', label: 'Dashboard' },
    ],
  },
  verify: {
    label: 'Verifier',
    color: 'bg-blue-100 text-blue-700',
    links: [
      { href: '/verify', label: 'Trace' },
    ],
  },
};

const publicLinks = [
  { href: '/', label: 'Home' },
  { href: '/verify', label: 'Verify Product' },
  { href: '/about', label: 'About Us' },
];

export default function Navbar({ role }: NavbarProps) {
  const { user, isAuthenticated, logout } = useAuth();
  const location = useLocation();
  const effectiveRole = role ?? user?.role ?? null;
  const cfg = effectiveRole ? roleConfig[effectiveRole] : null;
  const navLinks = cfg ? [{ href: '/', label: 'Home' }, ...cfg.links] : publicLinks;

  return (
    <header className="fixed top-0 w-full z-[100] bg-white/80 backdrop-blur-xl border-b border-slate-200/50 flex justify-between items-center h-[72px] px-8 shadow-sm">
      {/* Logo */}
      <div className="flex-1 flex justify-start">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>account_tree</span>
          <span className="text-2xl font-black tracking-tighter text-slate-900">KETJU</span>
        </Link>
      </div>

      {/* Center Nav */}
      <nav className="hidden md:flex flex-1 justify-center items-center gap-8 text-sm font-semibold">
        {navLinks.map(l => (
          <Link
            key={l.href}
            to={l.href}
            className={`transition-colors font-sans text-sm font-medium tracking-tight ${
              location.pathname === l.href
                ? 'text-blue-600 border-b-2 border-blue-600 pb-1 font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {l.label}
          </Link>
        ))}
      </nav>

      {/* Right Actions */}
      <div className="flex-1 flex justify-end items-center gap-3">
        {isAuthenticated && user ? (
          <>
            {cfg && (
              <span className={`hidden lg:flex items-center ${cfg.color} px-3 py-1.5 rounded-full text-[10px] font-bold tracking-wide uppercase`}>
                {cfg.label}
              </span>
            )}
            <code className="hidden lg:block text-xs font-medium text-on-surface-variant bg-surface-container-low px-2 py-1.5 rounded border border-outline-variant/20">
              {user.walletAddress}
            </code>
            <button
              onClick={logout}
              className="text-sm font-semibold text-primary border border-primary px-4 py-1.5 rounded-full hover:bg-primary-container/5 transition-all"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="px-5 py-2 rounded-full text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">
                Sign In
              </button>
            </Link>
            <Link to="/signup">
              <button className="bg-primary-container text-on-primary px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-primary/20 hover:scale-[0.98] active:scale-95 transition-transform">
                Get Started
              </button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
