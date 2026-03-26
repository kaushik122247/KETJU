import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import QRModal from '../components/QRModal';
import { useAuth } from '../context/AuthContext';
import { useApp, Product, Stage } from '../context/AppContext';

const STAGE_CONFIG: Record<Stage, { label: string; color: string; icon: string; bg: string }> = {
  farm:         { label: 'Farm',         color: 'text-green-700',  bg: 'bg-green-100',  icon: 'agriculture' },
  processing:   { label: 'Processing',   color: 'text-amber-700',  bg: 'bg-amber-100',  icon: 'settings' },
  distribution: { label: 'Distribution', color: 'text-orange-700', bg: 'bg-orange-100', icon: 'local_shipping' },
  retail:       { label: 'Retail',       color: 'text-purple-700', bg: 'bg-purple-100', icon: 'store' },
  consumer:     { label: 'Consumer',     color: 'text-blue-700',   bg: 'bg-blue-100',   icon: 'smartphone' },
};

export default function FarmerDashboard() {
  const { user } = useAuth();
  const { products } = useApp();
  const navigate = useNavigate();

  const [qrProduct, setQrProduct] = useState<Product | null>(null);
  const [sidebarTab, setSidebarTab] = useState<'dashboard' | 'products' | 'register' | 'events' | 'nfts' | 'settings'>('dashboard');

  // Only show this farmer's products
  const myProducts = products.filter(p => p.farmerWallet === user?.walletAddress || p.farmerName === user?.name || true);
  const certified = myProducts.filter(p => p.isOrganic).length;
  const pending = myProducts.filter(p => p.currentStage === 'farm' || p.currentStage === 'processing').length;

  const sidebarLinks: { key: typeof sidebarTab; icon: string; label: string; action?: () => void }[] = [
    { key: 'dashboard', icon: 'dashboard', label: 'Dashboard' },
    { key: 'products',  icon: 'inventory_2', label: 'My Products' },
    { key: 'register',  icon: 'add_box', label: 'Register Product', action: () => navigate('/register') },
    { key: 'events',    icon: 'history_edu', label: 'Log Event', action: () => navigate('/log-event') },
    { key: 'nfts',      icon: 'verified', label: 'My NFT Certificates' },
    { key: 'settings',  icon: 'settings', label: 'Settings' },
  ];

  return (
    <div className="w-full min-h-screen bg-surface font-sans text-on-surface">
      <Navbar role="farmer" />
      <div className="h-[72px] w-full" />
      <div className="flex">
        {/* Sidebar */}
        <aside className="fixed left-0 top-[72px] h-[calc(100vh-72px)] w-64 z-40 bg-[#fcf8ff] flex flex-col py-8 px-4 gap-2">
          <nav className="flex-1 flex flex-col gap-1">
            {sidebarLinks.map(link => (
              <button
                key={link.key}
                onClick={() => { if (link.action) link.action(); else setSidebarTab(link.key); }}
                className={`px-4 py-3 flex items-center gap-3 rounded-full transition-all active:translate-x-1 text-left ${
                  sidebarTab === link.key && !link.action
                    ? 'bg-primary-container text-white shadow-lg shadow-primary-container/20'
                    : 'text-[#434655] hover:bg-[#f0ecfb]'
                }`}
              >
                <span className="material-symbols-outlined">{link.icon}</span>
                <span className="font-medium text-sm">{link.label}</span>
              </button>
            ))}
          </nav>

          <button
            onClick={() => navigate('/verify')}
            className="bg-primary text-on-primary py-3 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-95 mb-4 w-full"
          >
            Verify Batch
          </button>

          <div className="p-4 bg-inverse-surface rounded-2xl">
            <p className="text-[10px] uppercase font-bold tracking-widest text-on-primary-container/60 mb-1">Connected Wallet</p>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <code className="text-xs text-on-primary font-mono">{user?.walletAddress ?? '0x...'}</code>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-xs text-primary-fixed">account_balance_wallet</span>
              <span className="text-[11px] text-white/80">Polygon Mumbai</span>
            </div>
            <div className="mt-3 pt-3 border-t border-white/10 flex items-center gap-1">
              <span className="material-symbols-outlined text-xs text-emerald-400">verified_user</span>
              <span className="text-[10px] text-emerald-400 font-bold uppercase">Farmer role verified</span>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="ml-64 flex-1 p-8">
          {/* Header */}
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-4xl font-black tracking-tight text-on-surface mb-2">
                Welcome back, {user?.name ?? 'Farmer'} 👋
              </h2>
              <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">
                Manage your registered product batches and track their blockchain journey through the supply chain.
              </p>
            </div>
            <button
              onClick={() => navigate('/register')}
              className="bg-primary-container text-on-primary px-8 py-3 rounded-full font-bold shadow-lg shadow-primary-container/20 hover:scale-[1.02] active:scale-95 transition-all"
            >
              Register New Product
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {[
              { icon: 'inventory_2', value: myProducts.length, label: 'Total Products', sub: '+2 this month', subColor: 'text-emerald-600', subIcon: 'trending_up' },
              { icon: 'verified', value: certified, label: 'Organic Certified', sub: `${Math.round((certified / myProducts.length) * 100) || 0}% of your batches`, subColor: 'text-on-surface-variant', borderL: 'border-l-4 border-[#16A34A]' },
              { icon: 'token', value: 3, label: 'NFT Certificates', sub: 'View in wallet', subColor: 'text-primary cursor-pointer hover:underline' },
              { icon: 'pending_actions', value: pending, label: 'Pending Events', sub: 'Awaiting next update', subColor: 'text-amber-600', iconBg: 'bg-amber-100 text-amber-600' },
            ].map((s, i) => (
              <div key={i} className={`bg-surface-container-lowest p-6 rounded-2xl shadow-sm group hover:translate-y-[-4px] transition-all ${s.borderL ?? ''}`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${s.iconBg ?? 'bg-primary/10 text-primary'}`}>
                  <span className="material-symbols-outlined">{s.icon}</span>
                </div>
                <div className="text-4xl font-black text-on-surface mb-1">{s.value}</div>
                <div className="text-sm font-semibold text-on-surface-variant">{s.label}</div>
                <div className={`text-xs font-bold mt-2 flex items-center gap-1 ${s.subColor}`}>
                  {s.subIcon && <span className="material-symbols-outlined text-sm">{s.subIcon}</span>}
                  {s.sub}
                </div>
              </div>
            ))}
          </div>

          {/* Products Table + Side Panel */}
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-8">
              <div className="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden">
                <div className="p-6 flex justify-between items-center bg-surface-container-low/30">
                  <h3 className="text-xl font-bold text-on-surface">My Registered Batches</h3>
                  <button className="text-sm font-bold text-primary flex items-center gap-1">
                    View All <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-surface-container-low text-[10px] uppercase tracking-widest font-black text-on-surface-variant">
                        <th className="px-6 py-4">Product Name</th>
                        <th className="px-6 py-4">Batch ID</th>
                        <th className="px-6 py-4">Harvest Date</th>
                        <th className="px-6 py-4">Current Stage</th>
                        <th className="px-6 py-4">Organic</th>
                        <th className="px-6 py-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-surface-container">
                      {myProducts.map(p => {
                        const sc = STAGE_CONFIG[p.currentStage];
                        return (
                          <tr key={p.id} className="hover:bg-surface-container-low/20 transition-colors">
                            <td className="px-6 py-5 font-bold text-on-surface">{p.name}</td>
                            <td className="px-6 py-5 font-mono text-xs text-on-surface-variant">#{p.batchId}</td>
                            <td className="px-6 py-5 text-sm text-on-surface-variant">
                              {new Date(p.harvestDate).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                            </td>
                            <td className="px-6 py-5">
                              <span className={`px-3 py-1 rounded-full ${sc.bg} ${sc.color} text-[10px] font-black uppercase flex items-center w-fit gap-1`}>
                                <span className="material-symbols-outlined text-[14px]">{sc.icon}</span>
                                {sc.label}
                              </span>
                            </td>
                            <td className="px-6 py-5">
                              {p.isOrganic
                                ? <span className="material-symbols-outlined text-emerald-600" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                                : <span className="material-symbols-outlined text-on-surface-variant/40">cancel</span>
                              }
                            </td>
                            <td className="px-6 py-5 text-right space-x-2">
                              <button
                                onClick={() => navigate(`/verify?batch=${p.batchId}`)}
                                className="text-[10px] font-bold text-primary hover:underline"
                              >
                                VIEW
                              </button>
                              {p.currentStage !== 'consumer' && (
                                <button
                                  onClick={() => setQrProduct(p)}
                                  className="text-[10px] font-bold text-primary bg-primary/5 px-2 py-1 rounded-md hover:bg-primary/10 transition-colors"
                                >
                                  SHARE QR
                                </button>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Side Panel */}
            <div className="col-span-12 lg:col-span-4 space-y-8">
              {/* Recent Activity */}
              <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm">
                <div className="flex items-center gap-2 mb-6">
                  <span className="material-symbols-outlined text-primary">sensors</span>
                  <h3 className="text-xl font-bold text-on-surface">Recent Activity</h3>
                </div>
                <div className="space-y-6 relative before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-[2px] before:bg-surface-container">
                  {[
                    { color: 'bg-emerald-500', text: 'Product CT-2024-0871 entered Distribution stage', time: '2 hours ago' },
                    { color: 'bg-amber-500',   text: 'New event logged by FreshPack Foods', time: '1 day ago' },
                    { color: 'bg-purple-500',  text: 'CT-2024-0654 reached Retail stage', time: '3 days ago' },
                    { color: 'bg-blue-500',    text: 'Consumer verified CT-2024-0432', time: '5 days ago' },
                  ].map((a, i) => (
                    <div key={i} className="flex gap-4 relative">
                      <div className={`w-4 h-4 rounded-full ${a.color} border-4 border-white z-10`} />
                      <div>
                        <p className="text-xs font-semibold text-on-surface leading-tight">{a.text}</p>
                        <span className="text-[10px] text-on-surface-variant">{a.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {qrProduct && (
        <QRModal
          batchId={qrProduct.batchId}
          productName={qrProduct.name}
          onClose={() => setQrProduct(null)}
        />
      )}
    </div>
  );
}
