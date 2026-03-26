import React from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout';
import { useApp, Stage } from '../context/AppContext';
import { useAuth } from '../context/AuthContext';

const STAGE_LABEL: Record<Stage, string> = {
  farm: 'Farm', processing: 'Processing', distribution: 'Distribution', retail: 'Retail', consumer: 'Consumer',
};

export default function ProcessorDashboard() {
  const { user } = useAuth();
  const { products } = useApp();
  const navigate = useNavigate();

  const pending = products.filter(p => p.currentStage === 'farm');
  const processing = products.filter(p => p.currentStage === 'processing');
  const done = products.filter(p => ['distribution', 'retail', 'consumer'].includes(p.currentStage));

  return (
    <DashboardLayout>
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
          <div key={i} className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm group hover:translate-y-[-4px] transition-all border border-slate-100">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${s.bg} ${s.color}`}>
              <span className="material-symbols-outlined">{s.icon}</span>
            </div>
            <div className="text-4xl font-black text-on-surface mb-1">{s.value}</div>
            <div className="text-sm font-semibold text-on-surface-variant">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Batches Table */}
      <div className="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden border border-slate-100">
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
    </DashboardLayout>
  );
}