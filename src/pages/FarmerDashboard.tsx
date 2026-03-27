import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout';
import QRModal from '../components/QRModal';
import { useAuth } from '../context/AuthContext';
import { useApp, Product, Stage } from '../context/AppContext';
import { 
  Sprout, 
  Settings, 
  Truck, 
  Store, 
  Smartphone,
  Box,
  BadgeCheck,
  Coins,
  Clock,
  ArrowUpRight,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Radio
} from 'lucide-react';

const STAGE_CONFIG: Record<Stage, { label: string; color: string; icon: React.ElementType; bg: string }> = {
  farm:         { label: 'Farm',         color: 'text-green-700',  bg: 'bg-green-100',  icon: Sprout },
  processing:   { label: 'Processing',   color: 'text-amber-700',  bg: 'bg-amber-100',  icon: Settings },
  distribution: { label: 'Distribution', color: 'text-orange-700', bg: 'bg-orange-100', icon: Truck },
  retail:       { label: 'Retail',       color: 'text-purple-700', bg: 'bg-purple-100', icon: Store },
  consumer:     { label: 'Consumer',     color: 'text-blue-700',   bg: 'bg-blue-100',   icon: Smartphone },
};

export default function FarmerDashboard() {
  const { user } = useAuth();
  const { products } = useApp();
  const navigate = useNavigate();

  const [qrProduct, setQrProduct] = useState<Product | null>(null);

  // Only show this farmer's products
  const myProducts = products.filter(p => p.farmerWallet === user?.walletAddress || p.farmerName === user?.name || true);
  const certified = myProducts.filter(p => p.isOrganic).length;
  const pending = myProducts.filter(p => p.currentStage === 'farm' || p.currentStage === 'processing').length;

  return (
    <DashboardLayout>
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
          { icon: Box, value: myProducts.length, label: 'Total Products', sub: '+2 this month', subColor: 'text-emerald-600', subIcon: TrendingUp },
          { icon: BadgeCheck, value: certified, label: 'Organic Certified', sub: `${Math.round((certified / myProducts.length) * 100) || 0}% of your batches`, subColor: 'text-on-surface-variant', borderL: 'border-l-4 border-[#16A34A]' },
          { icon: Coins, value: 3, label: 'NFT Certificates', sub: 'View in wallet', subColor: 'text-primary cursor-pointer hover:underline' },
          { icon: Clock, value: pending, label: 'Pending Events', sub: 'Awaiting next update', subColor: 'text-amber-600', iconBg: 'bg-amber-100 text-amber-600' },
        ].map((s, i) => (
          <div key={i} className={`bg-surface-container-lowest p-6 rounded-2xl shadow-sm group hover:translate-y-[-4px] transition-all border border-slate-100 ${s.borderL ?? ''}`}>
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${s.iconBg ?? 'bg-primary/10 text-primary'}`}>
              <s.icon className="w-6 h-6" />
            </div>
            <div className="text-4xl font-black text-on-surface mb-1">{s.value}</div>
            <div className="text-sm font-semibold text-on-surface-variant">{s.label}</div>
            <div className={`text-xs font-bold mt-2 flex items-center gap-1 ${s.subColor}`}>
              {s.subIcon && <s.subIcon className="w-3.5 h-3.5" />}
              {s.sub}
            </div>
          </div>
        ))}
      </div>

      {/* Products Table + Side Panel */}
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-8">
          <div className="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden border border-slate-100">
            <div className="p-6 flex justify-between items-center bg-surface-container-low/30">
              <h3 className="text-xl font-bold text-on-surface">My Registered Batches</h3>
              <button className="text-sm font-bold text-primary flex items-center gap-1">
                View All <ArrowRight className="w-4 h-4" />
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
                            <sc.icon className="w-3.5 h-3.5" />
                            {sc.label}
                          </span>
                        </td>
                        <td className="px-6 py-5">
                          {p.isOrganic
                            ? <BadgeCheck className="w-5 h-5 text-emerald-600" />
                            : <XCircle className="w-5 h-5 text-on-surface-variant/40" />
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
          <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-2 mb-6">
              <Radio className="w-5 h-5 text-primary" />
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

      {qrProduct && (
        <QRModal
          batchId={qrProduct.batchId}
          productName={qrProduct.name}
          onClose={() => setQrProduct(null)}
        />
      )}
    </DashboardLayout>
  );
}
