import React from 'react';

function FarmerDashboard() {
  return (
    <div 
      className="ketju-page-wrapper w-full min-h-screen bg-surface dark:bg-slate-950 font-sans text-on-surface"
      dangerouslySetInnerHTML={{ __html: `<style>
        body { font-family: 'Inter', sans-serif; }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
    </style>

<!-- TopNavBar -->
<header class="docked full-width top-0 sticky z-50 bg-[#fcf8ff]/70 dark:bg-[#1b1a25]/70 backdrop-blur-xl shadow-[0_48px_48px_0_rgba(27,26,37,0.06)] h-16 flex justify-between items-center w-full px-8">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-[#003fb7] text-2xl" style="font-variation-settings: 'FILL' 1;">eco</span>
<div class="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2"><span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">account_tree</span> KETJU</div>
</div>
<nav class="hidden md:flex items-center gap-8 h-full">
<a class="font-semibold text-sm tracking-tight text-[#003fb7] dark:border-[#4d8eff] border-b-2 border-[#003fb7] pb-1 h-full flex items-center" href="#">Dashboard</a>
<a class="font-semibold text-sm tracking-tight text-[#434655] dark:text-[#c3c5d8] hover:text-[#003fb7] transition-colors h-full flex items-center" href="#">My Products</a>
<a class="font-semibold text-sm tracking-tight text-[#434655] dark:text-[#c3c5d8] hover:text-[#003fb7] transition-colors h-full flex items-center" href="#">Add Product</a>
<a class="font-semibold text-sm tracking-tight text-[#434655] dark:text-[#c3c5d8] hover:text-[#003fb7] transition-colors h-full flex items-center" href="#">Log Event</a>
</nav>
<div class="flex items-center gap-4">
<div class="flex items-center bg-[#16A34A]/10 text-[#16A34A] px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase">
<span class="material-symbols-outlined text-sm mr-1">potted_plant</span>
                Farmer Role
            </div>
<code class="text-xs font-medium text-on-surface-variant bg-surface-container-low px-2 py-1 rounded border border-outline-variant/20">0x71C...4e21</code>
<button class="text-sm font-semibold text-primary border border-primary px-4 py-1.5 rounded-full hover:bg-primary-container/5 transition-all active:scale-95">Disconnect</button>
</div>
<div class="bg-[#f6f2ff] dark:bg-[#2b2938] h-[1px] w-full absolute bottom-0 left-0"></div>
</header>
<div class="flex">
<!-- SideNavBar -->
<aside class="fixed left-0 top-16 h-[calc(100vh-64px)] w-64 z-40 bg-[#fcf8ff] dark:bg-[#1b1a25] flex flex-col py-8 px-4 gap-2">
<div class="mb-6 px-4">
<h3 class="text-lg font-bold text-[#1b1a25] dark:text-[#ffffff]">KETJU Pro</h3>
<p class="text-xs text-on-surface-variant">Farmer Edition</p>
</div>
<nav class="flex-1 flex flex-col gap-1">
<a class="bg-[#0254ec] text-white rounded-full shadow-lg shadow-[#0254ec]/20 px-4 py-3 flex items-center gap-3 transition-all active:translate-x-1" href="#">
<span class="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span class="font-medium text-sm">Dashboard</span>
</a>
<a class="text-[#434655] dark:text-[#c3c5d8] px-4 py-3 flex items-center gap-3 hover:bg-[#f0ecfb] dark:hover:bg-[#2b2938] rounded-full transition-all active:translate-x-1" href="#">
<span class="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
<span class="font-medium text-sm">My Products</span>
</a>
<a class="text-[#434655] dark:text-[#c3c5d8] px-4 py-3 flex items-center gap-3 hover:bg-[#f0ecfb] dark:hover:bg-[#2b2938] rounded-full transition-all active:translate-x-1" href="#">
<span class="material-symbols-outlined" data-icon="add_box">add_box</span>
<span class="font-medium text-sm">Register Product</span>
</a>
<a class="text-[#434655] dark:text-[#c3c5d8] px-4 py-3 flex items-center gap-3 hover:bg-[#f0ecfb] dark:hover:bg-[#2b2938] rounded-full transition-all active:translate-x-1" href="#">
<span class="material-symbols-outlined" data-icon="history_edu">history_edu</span>
<span class="font-medium text-sm">Event Log</span>
</a>
<a class="text-[#434655] dark:text-[#c3c5d8] px-4 py-3 flex items-center gap-3 hover:bg-[#f0ecfb] dark:hover:bg-[#2b2938] rounded-full transition-all active:translate-x-1" href="#">
<span class="material-symbols-outlined" data-icon="verified">verified</span>
<span class="font-medium text-sm">My NFT Certificates</span>
</a>
<a class="text-[#434655] dark:text-[#c3c5d8] px-4 py-3 flex items-center gap-3 hover:bg-[#f0ecfb] dark:hover:bg-[#2b2938] rounded-full transition-all active:translate-x-1" href="#">
<span class="material-symbols-outlined" data-icon="settings">settings</span>
<span class="font-medium text-sm">Settings</span>
</a>
</nav>
<button class="bg-primary text-on-primary py-3 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-95 mb-4">
                Verify Batch
            </button>
<div class="mt-auto p-4 bg-inverse-surface rounded-2xl">
<p class="text-[10px] uppercase font-bold tracking-widest text-on-primary-container/60 mb-1">Connected Wallet</p>
<div class="flex items-center gap-2 mb-2">
<div class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
<code class="text-xs text-on-primary font-mono">0x4f2c...8b1d</code>
</div>
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-xs text-primary-fixed" data-icon="account_balance_wallet">account_balance_wallet</span>
<span class="text-[11px] text-white/80">Polygon Mumbai</span>
</div>
<div class="mt-3 pt-3 border-t border-white/10 flex items-center gap-1">
<span class="material-symbols-outlined text-xs text-emerald-400">verified_user</span>
<span class="text-[10px] text-emerald-400 font-bold uppercase">Farmer role verified</span>
</div>
</div>
</aside>
<!-- Main Content Canvas -->
<main class="ml-64 flex-1 p-8">
<!-- Header Row -->
<div class="flex justify-between items-end mb-10">
<div>
<h2 class="text-4xl font-black tracking-tight text-on-surface mb-2">Welcome back, Rajesh Kumar 👋</h2>
<p class="text-lg text-on-surface-variant max-w-2xl leading-relaxed">Manage your registered product batches and track their blockchain journey through the supply chain.</p>
</div>
<button class="bg-primary-container text-on-primary px-8 py-3 rounded-full font-bold shadow-lg shadow-primary-container/20 hover:scale-[1.02] active:scale-95 transition-all">
                    Register New Product
                </button>
</div>
<!-- Stats Row -->
<div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
<div class="bg-surface-container-lowest p-6 rounded-2xl shadow-[0_24px_48px_-12px_rgba(27,26,37,0.06)] group hover:translate-y-[-4px] transition-all">
<div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined">inventory_2</span>
</div>
<div class="text-4xl font-black text-on-surface mb-1">12</div>
<div class="text-sm font-semibold text-on-surface-variant">Total Products</div>
<div class="text-xs font-bold text-emerald-600 mt-2 flex items-center gap-1">
<span class="material-symbols-outlined text-sm">trending_up</span> +2 this month
                    </div>
</div>
<div class="bg-surface-container-lowest p-6 rounded-2xl shadow-[0_24px_48px_-12px_rgba(27,26,37,0.06)] group hover:translate-y-[-4px] transition-all border-l-4 border-[#16A34A]">
<div class="w-12 h-12 bg-[#16A34A]/10 rounded-xl flex items-center justify-center text-[#16A34A] mb-4 group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined">verified</span>
</div>
<div class="text-4xl font-black text-on-surface mb-1">9</div>
<div class="text-sm font-semibold text-on-surface-variant">Organic Certified</div>
<div class="text-xs font-bold text-on-surface-variant mt-2">75% of your batches</div>
</div>
<div class="bg-surface-container-lowest p-6 rounded-2xl shadow-[0_24px_48px_-12px_rgba(27,26,37,0.06)] group hover:translate-y-[-4px] transition-all">
<div class="w-12 h-12 bg-tertiary/10 rounded-xl flex items-center justify-center text-tertiary mb-4 group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined">token</span>
</div>
<div class="text-4xl font-black text-on-surface mb-1">3</div>
<div class="text-sm font-semibold text-on-surface-variant">NFT Certificates</div>
<div class="text-xs font-bold text-primary mt-2 cursor-pointer hover:underline">View in wallet</div>
</div>
<div class="bg-surface-container-lowest p-6 rounded-2xl shadow-[0_24px_48px_-12px_rgba(27,26,37,0.06)] group hover:translate-y-[-4px] transition-all">
<div class="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 mb-4 group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined">pending_actions</span>
</div>
<div class="text-4xl font-black text-on-surface mb-1">2</div>
<div class="text-sm font-semibold text-on-surface-variant">Pending Events</div>
<div class="text-xs font-bold text-amber-600 mt-2">Awaiting processor update</div>
</div>
</div>
<div class="grid grid-cols-12 gap-8">
<!-- My Products Table -->
<div class="col-span-12 lg:col-span-8">
<div class="bg-surface-container-lowest rounded-2xl shadow-[0_48px_48px_-24px_rgba(27,26,37,0.04)] overflow-hidden">
<div class="p-6 flex justify-between items-center bg-surface-container-low/30">
<h3 class="text-xl font-bold text-on-surface">My Registered Batches</h3>
<a class="text-sm font-bold text-primary hover:gap-2 transition-all flex items-center gap-1" href="#">View All <span class="material-symbols-outlined text-sm">arrow_forward</span></a>
</div>
<div class="overflow-x-auto">
<table class="w-full text-left border-collapse">
<thead>
<tr class="bg-surface-container-low text-[10px] uppercase tracking-widest font-black text-on-surface-variant">
<th class="px-6 py-4">Product Name</th>
<th class="px-6 py-4">Batch ID</th>
<th class="px-6 py-4">Harvest Date</th>
<th class="px-6 py-4">Current Stage</th>
<th class="px-6 py-4">Organic</th>
<th class="px-6 py-4 text-right">Actions</th>
</tr>
</thead>
<tbody class="divide-y divide-surface-container">
<tr class="hover:bg-surface-container-low/20 transition-colors">
<td class="px-6 py-5 font-bold text-on-surface">Organic Cherry Tomatoes</td>
<td class="px-6 py-5 font-mono text-xs text-on-surface-variant">#CT-2024-0871</td>
<td class="px-6 py-5 text-sm text-on-surface-variant">Mar 10, 2024</td>
<td class="px-6 py-5">
<span class="px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-[10px] font-black uppercase flex items-center w-fit">
<span class="material-symbols-outlined text-[14px] mr-1">local_shipping</span> Distribution
                                            </span>
</td>
<td class="px-6 py-5 text-emerald-600"><span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">check_circle</span></td>
<td class="px-6 py-5 text-right space-x-2">
<button class="text-[10px] font-bold text-primary hover:underline">VIEW</button>
<button class="text-[10px] font-bold text-primary bg-primary/5 px-2 py-1 rounded-md">SHARE QR</button>
</td>
</tr>
<tr class="hover:bg-surface-container-low/20 transition-colors">
<td class="px-6 py-5 font-bold text-on-surface">Green Spinach Batch A</td>
<td class="px-6 py-5 font-mono text-xs text-on-surface-variant">#CT-2024-0654</td>
<td class="px-6 py-5 text-sm text-on-surface-variant">Feb 28, 2024</td>
<td class="px-6 py-5">
<span class="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-[10px] font-black uppercase flex items-center w-fit">
<span class="material-symbols-outlined text-[14px] mr-1">store</span> Retail
                                            </span>
</td>
<td class="px-6 py-5 text-emerald-600"><span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">check_circle</span></td>
<td class="px-6 py-5 text-right space-x-2">
<button class="text-[10px] font-bold text-primary hover:underline">VIEW</button>
<button class="text-[10px] font-bold text-primary bg-primary/5 px-2 py-1 rounded-md">SHARE QR</button>
</td>
</tr>
<tr class="hover:bg-surface-container-low/20 transition-colors">
<td class="px-6 py-5 font-bold text-on-surface">Cucumber Batch Spring</td>
<td class="px-6 py-5 font-mono text-xs text-on-surface-variant">#CT-2024-0432</td>
<td class="px-6 py-5 text-sm text-on-surface-variant">Feb 15, 2024</td>
<td class="px-6 py-5">
<span class="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-[10px] font-black uppercase flex items-center w-fit">
<span class="material-symbols-outlined text-[14px] mr-1">smartphone</span> Consumer
                                            </span>
</td>
<td class="px-6 py-5 text-emerald-600"><span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">check_circle</span></td>
<td class="px-6 py-5 text-right">
<button class="text-[10px] font-bold text-primary hover:underline">VIEW</button>
</td>
</tr>
<tr class="hover:bg-surface-container-low/20 transition-colors">
<td class="px-6 py-5 font-bold text-on-surface">Bell Peppers Red</td>
<td class="px-6 py-5 font-mono text-xs text-on-surface-variant">#CT-2024-0321</td>
<td class="px-6 py-5 text-sm text-on-surface-variant">Jan 30, 2024</td>
<td class="px-6 py-5">
<span class="px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-[10px] font-black uppercase flex items-center w-fit">
<span class="material-symbols-outlined text-[14px] mr-1">settings</span> Processing
                                            </span>
</td>
<td class="px-6 py-5 text-on-surface-variant/40"><span class="material-symbols-outlined">cancel</span></td>
<td class="px-6 py-5 text-right">
<button class="text-[10px] font-bold text-primary hover:underline">VIEW</button>
</td>
</tr>
<tr class="hover:bg-surface-container-low/20 transition-colors">
<td class="px-6 py-5 font-bold text-on-surface">Organic Broccoli</td>
<td class="px-6 py-5 font-mono text-xs text-on-surface-variant">#CT-2024-0198</td>
<td class="px-6 py-5 text-sm text-on-surface-variant">Jan 12, 2024</td>
<td class="px-6 py-5">
<span class="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-[10px] font-black uppercase flex items-center w-fit">
<span class="material-symbols-outlined text-[14px] mr-1">smartphone</span> Consumer
                                            </span>
</td>
<td class="px-6 py-5 text-emerald-600"><span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">check_circle</span></td>
<td class="px-6 py-5 text-right">
<button class="text-[10px] font-bold text-primary hover:underline">VIEW</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
<!-- Side Panel -->
<div class="col-span-12 lg:col-span-4 space-y-8">
<!-- NFT Panel -->
<div class="bg-surface-container-lowest p-6 rounded-2xl shadow-[0_48px_48px_-24px_rgba(27,26,37,0.04)]">
<div class="flex items-center gap-2 mb-6">
<span class="material-symbols-outlined text-tertiary">workspace_premium</span>
<h3 class="text-xl font-bold text-on-surface">My NFT Certificates</h3>
</div>
<div class="space-y-4 mb-6">
<div class="p-4 bg-surface-container-low/50 rounded-xl border border-outline-variant/10 hover:border-tertiary/30 transition-all cursor-pointer group">
<div class="flex justify-between items-start mb-2">
<span class="text-[10px] font-black text-tertiary uppercase tracking-widest">NFT #4821</span>
<span class="bg-[#8247E5]/10 text-[#8247E5] text-[9px] font-bold px-2 py-0.5 rounded uppercase">Polygon</span>
</div>
<h4 class="font-bold text-on-surface text-sm group-hover:text-primary transition-colors">Organic Cherry Tomatoes</h4>
<div class="flex justify-between items-center mt-2">
<span class="text-[10px] text-on-surface-variant">Minted Mar 12</span>
<span class="text-[10px] font-bold text-primary flex items-center">VIEW <span class="material-symbols-outlined text-[12px] ml-0.5">north_east</span></span>
</div>
</div>
<div class="p-4 bg-surface-container-low/50 rounded-xl border border-outline-variant/10 hover:border-tertiary/30 transition-all cursor-pointer group">
<div class="flex justify-between items-start mb-2">
<span class="text-[10px] font-black text-tertiary uppercase tracking-widest">NFT #3654</span>
<span class="bg-[#8247E5]/10 text-[#8247E5] text-[9px] font-bold px-2 py-0.5 rounded uppercase">Polygon</span>
</div>
<h4 class="font-bold text-on-surface text-sm group-hover:text-primary transition-colors">Green Spinach Batch A</h4>
<div class="flex justify-between items-center mt-2">
<span class="text-[10px] text-on-surface-variant">Minted Mar 1</span>
<span class="text-[10px] font-bold text-primary flex items-center">VIEW <span class="material-symbols-outlined text-[12px] ml-0.5">north_east</span></span>
</div>
</div>
<div class="p-4 bg-surface-container-low/50 rounded-xl border border-outline-variant/10 hover:border-tertiary/30 transition-all cursor-pointer group">
<div class="flex justify-between items-start mb-2">
<span class="text-[10px] font-black text-tertiary uppercase tracking-widest">NFT #2109</span>
<span class="bg-[#8247E5]/10 text-[#8247E5] text-[9px] font-bold px-2 py-0.5 rounded uppercase">Polygon</span>
</div>
<h4 class="font-bold text-on-surface text-sm group-hover:text-primary transition-colors">Organic Broccoli</h4>
<div class="flex justify-between items-center mt-2">
<span class="text-[10px] text-on-surface-variant">Minted Jan 14</span>
<span class="text-[10px] font-bold text-primary flex items-center">VIEW <span class="material-symbols-outlined text-[12px] ml-0.5">north_east</span></span>
</div>
</div>
</div>
<button class="w-full py-3 rounded-full border-2 border-primary text-primary font-bold text-sm hover:bg-primary/5 active:scale-[0.98] transition-all">
                            View All in Wallet
                        </button>
</div>
<!-- Activity Feed -->
<div class="bg-surface-container-lowest p-6 rounded-2xl shadow-[0_48px_48px_-24px_rgba(27,26,37,0.04)]">
<div class="flex items-center gap-2 mb-6">
<span class="material-symbols-outlined text-primary">sensors</span>
<h3 class="text-xl font-bold text-on-surface">Recent Activity</h3>
</div>
<div class="space-y-6 relative before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-[2px] before:bg-surface-container">
<div class="flex gap-4 relative">
<div class="w-4 h-4 rounded-full bg-emerald-500 border-4 border-white z-10"></div>
<div>
<p class="text-xs font-semibold text-on-surface leading-tight">Product CT-2024-0871 entered Distribution stage</p>
<span class="text-[10px] text-on-surface-variant">2 hours ago</span>
</div>
</div>
<div class="flex gap-4 relative">
<div class="w-4 h-4 rounded-full bg-amber-500 border-4 border-white z-10"></div>
<div>
<p class="text-xs font-semibold text-on-surface leading-tight">New event logged by FreshPack Foods</p>
<span class="text-[10px] text-on-surface-variant">1 day ago</span>
</div>
</div>
<div class="flex gap-4 relative">
<div class="w-4 h-4 rounded-full bg-purple-500 border-4 border-white z-10"></div>
<div>
<p class="text-xs font-semibold text-on-surface leading-tight">CT-2024-0654 reached Retail stage</p>
<span class="text-[10px] text-on-surface-variant">3 days ago</span>
</div>
</div>
<div class="flex gap-4 relative">
<div class="w-4 h-4 rounded-full bg-blue-500 border-4 border-white z-10"></div>
<div>
<p class="text-xs font-semibold text-on-surface leading-tight">Consumer verified CT-2024-0432</p>
<span class="text-[10px] text-on-surface-variant">5 days ago</span>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
</div>
` }}
    />
  );
}

export default FarmerDashboard;
