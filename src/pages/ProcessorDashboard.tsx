import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useApp, Stage } from '../context/AppContext';
import { useAuth } from '../context/AuthContext';

const STAGE_LABEL: Record<Stage, string> = {
  farm: 'Farm', processing: 'Processing', distribution: 'Distribution', retail: 'Retail', consumer: 'Consumer',
};

export default function ProcessorDashboard() {
  const { user } = useAuth();
  const { products } = useApp();
  const navigate = useNavigate();
  const [tab, setTab] = useState<'dashboard' | 'batches' | 'log'>('dashboard');

  const pending = products.filter(p => p.currentStage === 'farm');
  const processing = products.filter(p => p.currentStage === 'processing');
  const done = products.filter(p => ['distribution', 'retail', 'consumer'].includes(p.currentStage));

  const sidebarLinks = [
    { key: 'dashboard' as const, icon: 'dashboard', label: 'Dashboard' },
    { key: 'batches' as const, icon: 'inventory_2', label: 'Incoming Batches' },
    { key: 'log' as const, icon: 'history_edu', label: 'Log Event', action: () => navigate('/log-event') },
  ];

  return (
    <div className="w-full min-h-screen bg-surface font-sans text-on-surface">
      <Navbar role="processor" />
      <div className="h-[72px]" />
      <div className="flex">
        <aside className="fixed left-0 top-[72px] h-[calc(100vh-72px)] w-64 z-40 bg-[#fcf8ff] flex flex-col py-8 px-4 gap-2">
          <nav className="flex-1 flex flex-col gap-1">
            {sidebarLinks.map(l => (
              <button key={l.key} onClick={() => l.action ? l.action() : setTab(l.key)}
                className={`px-4 py-3 flex items-center gap-3 rounded-full transition-all text-left ${tab === l.key && !l.action ? 'bg-amber-500 text-white shadow-lg' : 'text-[#434655] hover:bg-[#f0ecfb]'}`}>
                <span className="material-symbols-outlined">{l.icon}</span>
                <span className="font-medium text-sm">{l.label}</span>
              </button>
            ))}
          </nav>
          <div className="p-4 bg-inverse-surface rounded-2xl">
            <p className="text-[10px] uppercase font-bold tracking-widest text-on-primary-container/60 mb-1">Connected Wallet</p>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <code className="text-xs text-on-primary font-mono">{user?.walletAddress ?? '0x...'}</code>
            </div>
            <div className="mt-3 pt-3 border-t border-white/10 flex items-center gap-1">
              <span className="material-symbols-outlined text-xs text-amber-400">verified_user</span>
              <span className="text-[10px] text-amber-400 font-bold uppercase">Processor role verified</span>
            </div>
          </div>
        </aside>

        <main className="ml-64 flex-1 p-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-4xl font-black tracking-tight text-on-surface mb-2">Welcome back, {user?.name ?? 'Processor'} 👋</h2>
              <p className="text-lg text-on-surface-variant max-w-2xl">Review incoming batches, log processing events, and advance products in the supply chain.</p>
            </div>
            <button onClick={() => navigate('/log-event')} className="bg-amber-500 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-amber-600 active:scale-95 transition-all">
              Log New Event
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: 'pending_actions', value: pending.length, label: 'Awaiting Processing', color: 'text-amber-600', bg: 'bg-amber-100' },
              { icon: 'precision_manufacturing', value: processing.length, label: 'Currently Processing', color: 'text-orange-600', bg: 'bg-orange-100' },
              { icon: 'check_circle', value: done.length, label: 'Processed & Shipped', color: 'text-green-600', bg: 'bg-green-100' },
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

          {/* Batches Table */}
          <div className="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden">
            <div className="p-6 flex justify-between items-center bg-surface-container-low/30">
              <h3 className="text-xl font-bold text-on-surface">All Product Batches</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-surface-container-low text-[10px] uppercase tracking-widest font-black text-on-surface-variant">
                    <th className="px-6 py-4">Product</th>
                    <th className="px-6 py-4">Batch ID</th>
                    <th className="px-6 py-4">Farmer</th>
                    <th className="px-6 py-4">Stage</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-container">
                  {products.map(p => (
                    <tr key={p.id} className="hover:bg-surface-container-low/20 transition-colors">
                      <td className="px-6 py-5 font-bold">{p.name}</td>
                      <td className="px-6 py-5 font-mono text-xs text-on-surface-variant">#{p.batchId}</td>
                      <td className="px-6 py-5 text-sm">{p.farmerName}</td>
                      <td className="px-6 py-5">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${p.currentStage === 'processing' ? 'bg-amber-100 text-amber-700' : p.currentStage === 'farm' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-600'}`}>
                          {STAGE_LABEL[p.currentStage]}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-right space-x-2">
                        <button onClick={() => navigate(`/verify?batch=${p.batchId}`)} className="text-[10px] font-bold text-primary hover:underline">VIEW</button>
                        {p.currentStage === 'farm' && (
                          <button onClick={() => navigate('/log-event')} className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded-md">LOG EVENT</button>
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