import React from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout';
import { useApp } from '../context/AppContext';
import { useAuth } from '../context/AuthContext';
import { 
  Truck, 
  Store, 
  ShoppingCart, 
  BadgeCheck, 
  XCircle 
} from 'lucide-react';

export default function RetailerDashboard() {
  const { user } = useAuth();
  const { products } = useApp();
  const navigate = useNavigate();

  const onShelf = products.filter(p => p.currentStage === 'retail');
  const incoming = products.filter(p => p.currentStage === 'distribution');
  const sold = products.filter(p => p.currentStage === 'consumer');

  return (
    <DashboardLayout>
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
          { icon: Truck, value: incoming.length, label: 'Incoming Shipments', color: 'text-orange-600', bg: 'bg-orange-100' },
          { icon: Store, value: onShelf.length, label: 'On Shelf', color: 'text-purple-600', bg: 'bg-purple-100' },
          { icon: ShoppingCart, value: sold.length, label: 'Sold / Verified', color: 'text-green-600', bg: 'bg-green-100' },
        ].map((s, i) => (
          <div key={i} className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm group hover:translate-y-[-4px] transition-all border border-slate-100">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${s.bg} ${s.color}`}>
              <s.icon className="w-6 h-6" />
            </div>
            <div className="text-4xl font-black text-on-surface mb-1">{s.value}</div>
            <div className="text-sm font-semibold text-on-surface-variant">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Inventory Table */}
      <div className="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden border border-slate-100">
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
                      ? <BadgeCheck className="w-5 h-5 text-emerald-600" />
                      : <XCircle className="w-5 h-5 text-on-surface-variant/40" />
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
    </DashboardLayout>
  );
}