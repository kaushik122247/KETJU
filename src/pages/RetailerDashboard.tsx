import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useApp } from '../context/AppContext';
import { useAuth } from '../context/AuthContext';

export default function RetailerDashboard() {
  const { user } = useAuth();
  const { products } = useApp();
  const navigate = useNavigate();

  const onShelf = products.filter(p => p.currentStage === 'retail');
  const incoming = products.filter(p => p.currentStage === 'distribution');
  const sold = products.filter(p => p.currentStage === 'consumer');

  return (
    <div className="w-full min-h-screen bg-surface font-sans text-on-surface">
      <Navbar role="retailer" />
      <div className="h-[72px]" />
      <div className="flex">
        <aside className="fixed left-0 top-[72px] h-[calc(100vh-72px)] w-64 z-40 bg-[#fcf8ff] flex flex-col py-8 px-4 gap-2">
          <nav className="flex-1 flex flex-col gap-1">
            {[
              { icon: 'dashboard', label: 'Dashboard' },
              { icon: 'storefront', label: 'Inventory' },
              { icon: 'history_edu', label: 'Log Receipt', action: () => navigate('/log-event') },
              { icon: 'qr_code_scanner', label: 'Verify Product', action: () => navigate('/scanner') },
            ].map(l => (
              <button key={l.label} onClick={l.action}
                className="px-4 py-3 flex items-center gap-3 rounded-full transition-all text-left text-[#434655] hover:bg-[#f0ecfb]">
                <span className="material-symbols-outlined">{l.icon}</span>
                <span className="font-medium text-sm">{l.label}</span>
              </button>
            ))}
          </nav>
          <div className="p-4 bg-inverse-surface rounded-2xl">
            <p className="text-[10px] uppercase font-bold tracking-widest text-on-primary-container/60 mb-1">Connected Wallet</p>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              <code className="text-xs text-on-primary font-mono">{user?.walletAddress ?? '0x...'}</code>
            </div>
            <div className="mt-3 pt-3 border-t border-white/10 flex items-center gap-1">
              <span className="material-symbols-outlined text-xs text-purple-400">verified_user</span>
              <span className="text-[10px] text-purple-400 font-bold uppercase">Retailer role verified</span>
            </div>
          </div>
        </aside>

        <main className="ml-64 flex-1 p-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-4xl font-black tracking-tight text-on-surface mb-2">Welcome back, {user?.name ?? 'Retailer'} 👋</h2>
              <p className="text-lg text-on-surface-variant max-w-2xl">Manage your inventory, confirm product receipts, and verify product authenticity for consumers.</p>
            </div>
            <button onClick={() => navigate('/log-event')} className="bg-purple-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-purple-700 active:scale-95 transition-all">
              Confirm Receipt
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: 'local_shipping', value: incoming.length, label: 'Incoming Shipments', color: 'text-orange-600', bg: 'bg-orange-100' },
              { icon: 'storefront', value: onShelf.length, label: 'On Shelf', color: 'text-purple-600', bg: 'bg-purple-100' },
              { icon: 'shopping_cart_checkout', value: sold.length, label: 'Sold / Verified', color: 'text-green-600', bg: 'bg-green-100' },
            ].map((s, i) => (
              <div key={i} className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm group hover:translate-y-[-4px] transition-all">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${s.bg} ${s.color}`}>
                  <span className="material-symbols-outlined">{s.icon}</span>
                </div>
                <div className="text-4xl font-black text-on-surface mb-1">{s.value}</div>
                <div className="text-sm font-semibold text-on-surface-variant">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Inventory Table */}
          <div className="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden">
            <div className="p-6 bg-surface-container-low/30">
              <h3 className="text-xl font-bold text-on-surface">Product Inventory</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-surface-container-low text-[10px] uppercase tracking-widest font-black text-on-surface-variant">
                    <th className="px-6 py-4">Product</th>
                    <th className="px-6 py-4">Batch ID</th>
                    <th className="px-6 py-4">Organic</th>
                    <th className="px-6 py-4">Stage</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-container">
                  {products.map(p => (
                    <tr key={p.id} className="hover:bg-surface-container-low/20 transition-colors">
                      <td className="px-6 py-5 font-bold">{p.name}</td>
                      <td className="px-6 py-5 font-mono text-xs text-on-surface-variant">#{p.batchId}</td>
                      <td className="px-6 py-5">
                        {p.isOrganic
                          ? <span className="material-symbols-outlined text-emerald-600" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                          : <span className="material-symbols-outlined text-on-surface-variant/40">cancel</span>
                        }
                      </td>
                      <td className="px-6 py-5">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${p.currentStage === 'retail' ? 'bg-purple-100 text-purple-700' : p.currentStage === 'consumer' ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-600'}`}>
                          {p.currentStage}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-right space-x-2">
                        <button onClick={() => navigate(`/verify?batch=${p.batchId}`)} className="text-[10px] font-bold text-primary hover:underline">VIEW</button>
                        {p.currentStage === 'distribution' && (
                          <button onClick={() => navigate('/log-event')} className="text-[10px] font-bold text-purple-600 bg-purple-50 px-2 py-1 rounded-md">CONFIRM</button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}