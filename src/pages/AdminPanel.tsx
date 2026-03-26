import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { useAuth } from '../context/AuthContext';
import { useApp } from '../context/AppContext';

export default function AdminPanel() {
  const { user } = useAuth();
  const { products } = useApp();

  return (
    <DashboardLayout>
      <div className="max-w-[1440px] mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-4xl font-black tracking-tight text-on-surface mb-2">Role Management & User Administration</h2>
            <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">Assign and revoke blockchain roles for registered stakeholders. Maintain integrity across the supply chain ledger.</p>
          </div>
          <button className="px-8 py-3 bg-primary-container text-on-primary rounded-full font-bold flex items-center gap-2 hover:shadow-lg transition-all active:scale-95 shadow-lg shadow-primary-container/20">
            <span className="material-symbols-outlined">person_add</span>
            Grant New Role
          </button>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* Left/Center Column */}
          <div className="col-span-12 lg:col-span-9 space-y-8">
            
            {/* System Stats Bento Grid */}
            <div className="grid grid-cols-5 gap-4">
              {[
                { label: 'Total Users', value: 48, icon: 'group', color: 'border-primary' },
                { label: 'Farmers', value: 12, icon: 'agriculture', color: 'border-green-500' },
                { label: 'Processors', value: 8, icon: 'factory', color: 'border-amber-500' },
                { label: 'Distributors', value: 15, icon: 'local_shipping', color: 'border-orange-500' },
                { label: 'Retailers', value: 13, icon: 'storefront', color: 'border-purple-500' },
              ].map(s => (
                <div key={s.label} className={`bg-surface-container-lowest p-6 rounded-2xl shadow-sm border-l-4 ${s.color} hover:translate-y-[-2px] transition-all`}>
                  <span className="material-symbols-outlined text-on-surface-variant mb-3">{s.icon}</span>
                  <div className="text-2xl font-black text-on-surface">{s.value}</div>
                  <div className="text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Grant Role Panel */}
            <section className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm relative overflow-hidden border border-slate-100">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-16 -mt-16"></div>
              <h3 className="text-xl font-bold mb-1 text-on-surface">Assign Blockchain Role</h3>
              <p className="text-sm text-on-surface-variant mb-8 max-w-xl">
                Grant a registered wallet address a supply chain role. This calls <code className="bg-surface-container p-1 rounded font-mono text-xs">grantRole()</code> on the RoleManager contract.
              </p>
              
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <label className="block text-[10px] font-bold uppercase text-on-surface-variant mb-2 ml-1 tracking-widest">Wallet Address</label>
                  <input className="w-full bg-surface-container-low border-none rounded-xl font-mono text-sm focus:ring-primary/40 focus:bg-white transition-all h-12 px-4 shadow-sm" placeholder="0x..." type="text" defaultValue="0x" />
                </div>
                <div className="w-full md:w-64">
                  <label className="block text-[10px] font-bold uppercase text-on-surface-variant mb-2 ml-1 tracking-widest">Role Type</label>
                  <select className="w-full bg-surface-container-low border-none rounded-xl text-sm font-medium focus:ring-primary/40 h-12 px-4 shadow-sm appearance-none">
                    <option>FARMER</option>
                    <option>PROCESSOR</option>
                    <option>DISTRIBUTOR</option>
                    <option>RETAILER</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <button className="bg-primary-container text-on-primary font-bold px-8 h-12 rounded-xl hover:shadow-lg transition-all active:scale-95 whitespace-nowrap shadow-md">Grant Role</button>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-amber-50 rounded-xl border border-amber-100">
                <span className="material-symbols-outlined text-amber-600 text-xl">warning</span>
                <p className="text-xs text-amber-800/80 font-medium">This will trigger an on-chain transaction from the Admin wallet. Gas fees apply and the change is immutable on the ledger once confirmed.</p>
              </div>
            </section>

            {/* Users Table */}
            <section className="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden border border-slate-100">
              <div className="p-8 pb-4 flex justify-between items-center">
                <h3 className="text-xl font-bold text-on-surface">Registered Stakeholders</h3>
                <div className="flex gap-3">
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-2.5 text-on-surface-variant text-sm">search</span>
                    <input className="bg-surface-container-low border-none rounded-full text-xs pl-10 pr-4 h-9 w-64 focus:ring-primary/40 focus:bg-white transition-all shadow-sm" placeholder="Search users..." type="text" />
                  </div>
                  <select className="bg-surface-container-low border-none rounded-full text-xs h-9 px-4 focus:ring-primary/40 shadow-sm">
                    <option>All Roles</option>
                    <option>Farmers</option>
                  </select>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-surface-container-low/50 border-b border-surface-variant">
                    <tr>
                      <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Name / Email</th>
                      <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Role</th>
                      <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Wallet</th>
                      <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Status</th>
                      <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface-variant/50">
                    <tr className="hover:bg-surface-container-low/30 transition-colors">
                      <td className="px-8 py-5">
                        <div className="font-bold text-sm text-on-surface">Rajesh Kumar</div>
                        <div className="text-xs text-on-surface-variant font-medium">rajesh@farm.in</div>
                      </td>
                      <td className="px-6 py-5">
                        <span className="flex items-center gap-1 text-[10px] font-black uppercase tracking-widest px-2 py-1 bg-green-50 text-green-700 rounded-full w-fit">🌾 Farmer</span>
                      </td>
                      <td className="px-6 py-5">
                        <code className="text-[10px] font-mono text-primary bg-primary/5 px-2 py-1 rounded">0x4f2c...8b1d</code>
                      </td>
                      <td className="px-6 py-5">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-green-100 text-green-700">ACTIVE</span>
                      </td>
                      <td className="px-8 py-5 text-right space-x-2">
                        <button className="px-4 py-2 text-[10px] font-bold border border-red-200 text-red-600 rounded-full hover:bg-red-50 transition-all uppercase tracking-widest">Revoke</button>
                        <button className="px-4 py-2 text-[10px] font-bold bg-surface-container-low text-on-surface-variant rounded-full hover:bg-surface-container transition-all uppercase tracking-widest">View</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
          
          {/* Right Sidebar Column */}
          <div className="col-span-12 lg:col-span-3 space-y-8">
            {/* System Status */}
            <section className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-on-surface">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                System Status
              </h3>
              <div className="space-y-4">
                {[
                  { label: 'Polygon Node', status: 'Connected' },
                  { label: 'Blockchain Indexer', status: 'Connected' },
                  { label: 'IPFS Gateway', status: 'Connected' },
                  { label: 'DB Cluster', status: 'Healthy' },
                ].map(s => (
                  <div key={s.label} className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider">
                    <span className="text-on-surface-variant">{s.label}</span>
                    <span className="text-green-600 bg-green-50 px-2 py-0.5 rounded-full">{s.status}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-surface-variant">
                <div className="flex items-center gap-2 text-[10px] font-mono text-on-surface-variant">
                  <span className="material-symbols-outlined text-xs">database</span>
                  Block Synced: #45,123,847
                </div>
              </div>
            </section>
            
            {/* Recent Actions */}
            <section className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-on-surface">
                <span className="material-symbols-outlined text-primary">history</span>
                Audit Log
              </h3>
              <div className="space-y-6 relative before:absolute before:left-[5px] before:top-2 before:bottom-2 before:w-[2px] before:bg-surface-container">
                <div className="relative pl-6">
                  <div className="absolute left-0 top-1 w-2.5 h-2.5 rounded-full bg-primary border-2 border-white"></div>
                  <p className="text-xs font-bold text-on-surface leading-tight">Granted FARMER role to 0x2c1a...</p>
                  <p className="text-[10px] text-on-surface-variant mt-1">3 hours ago</p>
                </div>
                <div className="relative pl-6">
                  <div className="absolute left-0 top-1 w-2.5 h-2.5 rounded-full bg-red-500 border-2 border-white"></div>
                  <p className="text-xs font-bold text-on-surface leading-tight">Revoked RETAILER role: NatureMart</p>
                  <p className="text-[10px] text-on-surface-variant mt-1">2 days ago</p>
                </div>
              </div>
              <button className="w-full mt-6 py-3 text-[10px] font-black uppercase tracking-widest text-primary bg-primary/5 rounded-full hover:bg-primary/10 transition-all">Full Audit Log</button>
            </section>
            
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#01123F] to-primary text-white shadow-lg overflow-hidden relative shadow-primary/30">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -mr-16 -mt-16 rotate-12"></div>
              <div className="flex justify-between items-start mb-4 relative z-10">
                <span className="material-symbols-outlined">hub</span>
                <span className="text-[10px] font-bold uppercase tracking-widest bg-white/20 px-2 py-0.5 rounded backdrop-blur-md">Mainnet Node</span>
              </div>
              <p className="text-xs font-bold mb-1 relative z-10">RoleManager.sol</p>
              <p className="text-[10px] font-mono text-white/70 break-all mb-4 relative z-10">0xc0de...4f8b2d1</p>
              <div className="h-1 bg-white/20 rounded-full overflow-hidden relative z-10 shadow-inner">
                <div className="h-full bg-white w-2/3 shadow-[0_0_8px_white]"></div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
