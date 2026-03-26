import React, { ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import { useAuth, Role } from '../context/AuthContext';

interface SidebarLink {
  icon: string;
  label: string;
  path: string;
  roles: Role[];
}

const SIDEBAR_LINKS: SidebarLink[] = [
  { icon: 'dashboard', label: 'Dashboard', path: '/dashboard', roles: ['farmer', 'processor', 'distributor', 'retailer', 'admin'] },
  { icon: 'inventory_2', label: 'My Products', path: '/farmer', roles: ['farmer'] },
  { icon: 'add_box', label: 'Register Product', path: '/register', roles: ['farmer'] },
  { icon: 'history_edu', label: 'Log Event', path: '/log-event', roles: ['farmer', 'processor', 'distributor', 'retailer'] },
  { icon: 'precision_manufacturing', label: 'Operations', path: '/processor', roles: ['processor'] },
  { icon: 'local_shipping', label: 'Logistics', path: '/distributor', roles: ['distributor'] },
  { icon: 'storefront', label: 'Inventory', path: '/retailer', roles: ['retailer'] },
  { icon: 'admin_panel_settings', label: 'Admin Panel', path: '/admin', roles: ['admin'] },
  { icon: 'qr_code_scanner', label: 'Scan QR', path: '/scanner', roles: ['farmer', 'processor', 'distributor', 'retailer', 'admin'] },
];

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const filteredLinks = SIDEBAR_LINKS.filter(link => 
    user?.role && link.roles.includes(user.role)
  );

  const roleColorClass = {
    farmer: 'text-green-600 bg-green-50',
    processor: 'text-amber-600 bg-amber-50',
    distributor: 'text-orange-600 bg-orange-50',
    retailer: 'text-purple-600 bg-purple-50',
    admin: 'text-red-600 bg-red-50',
  }[user?.role ?? 'farmer'];

  return (
    <div className="w-full min-h-screen bg-surface font-sans text-on-surface">
      <Navbar />
      <div className="h-[72px]" />
      <div className="flex">
        {/* Sidebar */}
        <aside className="fixed left-0 top-[72px] h-[calc(100vh-72px)] w-64 z-40 bg-[#fcf8ff] flex flex-col py-8 px-4 gap-2 border-r border-slate-100">
          <nav className="flex-1 flex flex-col gap-1">
            {filteredLinks.map(link => (
              <button
                key={link.path}
                onClick={() => navigate(link.path)}
                className={`px-4 py-3 flex items-center gap-3 rounded-full transition-all active:translate-x-1 text-left ${
                  location.pathname === link.path
                    ? 'bg-primary-container text-white shadow-lg shadow-primary-container/20'
                    : 'text-[#434655] hover:bg-[#f0ecfb]'
                }`}
              >
                <span className="material-symbols-outlined">{link.icon}</span>
                <span className="font-medium text-sm">{link.label}</span>
              </button>
            ))}
          </nav>

          <div className="p-4 bg-slate-100 rounded-2xl border border-slate-200/60">
            <p className="text-[10px] uppercase font-black tracking-widest text-slate-400 mb-1">Account</p>
            <div className="flex items-center gap-2 mb-2">
              <div className={`w-2.5 h-2.5 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.4)]`} />
              <code className="text-xs text-slate-900 font-mono truncate w-full font-bold" title={user?.walletAddress}>
                {user?.walletAddress ?? '0x...'}
              </code>
            </div>
            <div className="mt-3 pt-3 border-t border-slate-200 flex items-center gap-1 text-blue-600">
              <span className={`material-symbols-outlined text-xs font-bold`}>verified_user</span>
              <span className="text-[10px] font-black uppercase truncate">{user?.role} verified</span>
            </div>
          </div>
          
          <button 
            onClick={logout}
            className="mt-4 px-4 py-3 flex items-center gap-3 rounded-full text-red-600 hover:bg-red-50 transition-all text-left"
          >
            <span className="material-symbols-outlined">logout</span>
            <span className="font-medium text-sm">Logout</span>
          </button>
        </aside>

        {/* Main Content */}
        <main className="ml-64 flex-1 p-8 bg-white min-h-[calc(100vh-72px)]">
          {children}
        </main>
      </div>
    </div>
  );
}
