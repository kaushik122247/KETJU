import React from 'react';

function AdminPanel() {
  return (
    <div 
      className="ketju-page-wrapper w-full min-h-screen bg-surface dark:bg-slate-950 font-sans text-on-surface"
      dangerouslySetInnerHTML={{ __html: `<style>
        body { font-family: 'Inter', sans-serif; }
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
        .glass-panel { backdrop-filter: blur(20px); }
    </style>

<!-- TopNavBar -->
<nav class="fixed top-0 w-full z-50 flex items-center justify-between px-6 h-16 w-full bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-sm shadow-slate-200/50 dark:shadow-none font-inter antialiased">
<div class="flex items-center gap-8">
<div class="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2"><span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">account_tree</span> KETJU</div>
<div class="hidden md:flex gap-6 items-center">
<a class="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors duration-200" href="#">Dashboard</a>
<a class="text-blue-700 dark:text-blue-400 font-semibold border-b-2 border-blue-700" href="#">Governance</a>
<a class="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors duration-200" href="#">Audit Logs</a>
</div>
</div>
<div class="flex items-center gap-3">
<div class="flex items-center gap-2 px-3 py-1 bg-error-container text-on-error-container rounded-full text-sm font-bold">
<span class="material-symbols-outlined text-sm">lock</span>
                🔐 Admin
            </div>
<div class="hidden lg:flex flex-col items-end mr-2">
<span class="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Connected Wallet</span>
<span class="text-xs font-mono font-medium text-primary">0x123...456</span>
</div>
<button class="px-4 py-1.5 border-1.5 border-primary-container text-primary-container rounded-full text-sm font-semibold hover:bg-primary-container/5 transition-all active:scale-95">Disconnect</button>
<div class="flex items-center gap-2 ml-4">
<button class="p-2 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition-colors duration-200 rounded-full active:scale-95"><span class="material-symbols-outlined">notifications</span></button>
<button class="p-2 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition-colors duration-200 rounded-full active:scale-95"><span class="material-symbols-outlined">settings</span></button>
</div>
</div>
</nav>
<!-- SideNavBar -->
<aside class="fixed left-0 top-0 h-full w-64 z-40 bg-slate-50 dark:bg-slate-950 flex flex-col gap-y-2 p-4 pt-20 no-border bg-slate-100 dark:bg-slate-900 text-sm font-medium font-inter">
<div class="px-4 mb-6">
<h2 class="text-lg font-black text-blue-700 dark:text-blue-500">System Admin</h2>
<p class="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Enterprise Ledger</p>
</div>
<nav class="space-y-1">
<a class="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 rounded-xl hover:translate-x-1 transition-all duration-200" href="#">
<span class="material-symbols-outlined">dashboard</span>
                Overview
            </a>
<a class="flex items-center gap-3 px-4 py-3 bg-white dark:bg-slate-800 text-blue-700 dark:text-blue-300 shadow-sm rounded-xl hover:translate-x-1 transition-all duration-200" href="#">
<span class="material-symbols-outlined">group</span>
                User Management
            </a>
<a class="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 rounded-xl hover:translate-x-1 transition-all duration-200" href="#">
<span class="material-symbols-outlined">admin_panel_settings</span>
                Role Management
            </a>
<a class="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 rounded-xl hover:translate-x-1 transition-all duration-200" href="#">
<span class="material-symbols-outlined">inventory_2</span>
                Product Tracking
            </a>
<a class="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 rounded-xl hover:translate-x-1 transition-all duration-200" href="#">
<span class="material-symbols-outlined">receipt_long</span>
                Event Logs
            </a>
<a class="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 rounded-xl hover:translate-x-1 transition-all duration-200" href="#">
<span class="material-symbols-outlined">gavel</span>
                Contract Settings
            </a>
</nav>
<div class="mt-auto p-4 bg-surface-container-low rounded-2xl">
<div class="flex items-center gap-3 mb-2">
<div class="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-white font-bold text-xs">AD</div>
<div>
<p class="text-xs font-bold">Admin Active</p>
<p class="text-[10px] text-on-surface-variant">Global Privileges</p>
</div>
</div>
</div>
</aside>
<!-- Main Content -->
<main class="pl-64 pt-16 min-h-screen">
<div class="max-w-[1440px] mx-auto p-8">
<!-- Header Section -->
<div class="flex justify-between items-end mb-10">
<div>
<h2 class="text-3xl font-bold tracking-tight text-on-surface mb-2">Role Management &amp; User Administration</h2>
<p class="text-on-surface-variant max-w-2xl">Assign and revoke blockchain roles for registered stakeholders. Maintain integrity across the supply chain ledger.</p>
</div>
<button class="px-8 py-3 bg-primary-container text-on-primary rounded-full font-bold flex items-center gap-2 hover:shadow-lg transition-all active:scale-95">
<span class="material-symbols-outlined">person_add</span>
                    Grant New Role
                </button>
</div>
<div class="grid grid-cols-12 gap-8">
<!-- Left/Center Column -->
<div class="col-span-12 lg:col-span-9 space-y-8">
<!-- System Stats Bento Grid -->
<div class="grid grid-cols-5 gap-4">
<div class="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border-l-4 border-primary">
<span class="material-symbols-outlined text-primary mb-3">group</span>
<div class="text-2xl font-black">48</div>
<div class="text-xs font-bold text-on-surface-variant uppercase tracking-tighter">Total Users</div>
</div>
<div class="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border-l-4 border-green-500">
<span class="material-symbols-outlined text-green-500 mb-3">agriculture</span>
<div class="text-2xl font-black">12</div>
<div class="text-xs font-bold text-on-surface-variant uppercase tracking-tighter">Farmers</div>
</div>
<div class="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border-l-4 border-amber-500">
<span class="material-symbols-outlined text-amber-500 mb-3">factory</span>
<div class="text-2xl font-black">8</div>
<div class="text-xs font-bold text-on-surface-variant uppercase tracking-tighter">Processors</div>
</div>
<div class="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border-l-4 border-orange-500">
<span class="material-symbols-outlined text-orange-500 mb-3">local_shipping</span>
<div class="text-2xl font-black">15</div>
<div class="text-xs font-bold text-on-surface-variant uppercase tracking-tighter">Distributors</div>
</div>
<div class="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border-l-4 border-purple-500">
<span class="material-symbols-outlined text-purple-500 mb-3">storefront</span>
<div class="text-2xl font-black">13</div>
<div class="text-xs font-bold text-on-surface-variant uppercase tracking-tighter">Retailers</div>
</div>
</div>
<!-- Grant Role Panel -->
<section class="bg-surface-container-lowest p-8 rounded-2xl shadow-sm relative overflow-hidden">
<div class="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-16 -mt-16"></div>
<h3 class="text-xl font-bold mb-1">Assign Blockchain Role</h3>
<p class="text-sm text-on-surface-variant mb-8 max-w-xl">Grant a registered wallet address a supply chain role. This calls <code class="bg-surface-container p-1 rounded font-mono text-xs">grantRole()</code> on the RoleManager contract.</p>
<div class="flex flex-col md:flex-row gap-4 mb-6">
<div class="flex-1">
<label class="block text-[10px] font-bold uppercase text-on-surface-variant mb-2 ml-1">Wallet Address</label>
<input class="w-full bg-surface-container-low border-none rounded-lg font-mono text-sm focus:ring-primary/40 focus:bg-white transition-all h-12 px-4" placeholder="0x..." type="text" value="0x"/>
</div>
<div class="w-full md:w-64">
<label class="block text-[10px] font-bold uppercase text-on-surface-variant mb-2 ml-1">Role Type</label>
<select class="w-full bg-surface-container-low border-none rounded-lg text-sm font-medium focus:ring-primary/40 h-12 px-4">
<option>FARMER</option>
<option>PROCESSOR</option>
<option>DISTRIBUTOR</option>
<option>RETAILER</option>
</select>
</div>
<div class="flex items-end">
<button class="bg-primary-container text-on-primary font-bold px-8 h-12 rounded-lg hover:shadow-lg transition-all active:scale-95 whitespace-nowrap">Grant Role</button>
</div>
</div>
<div class="flex items-center gap-3 p-4 bg-error-container/20 rounded-xl">
<span class="material-symbols-outlined text-error text-xl">warning</span>
<p class="text-xs text-on-error-container/80 font-medium">This will trigger an on-chain transaction from the Admin wallet. Gas fees apply and the change is immutable on the ledger once confirmed.</p>
</div>
</section>
<!-- Users Table -->
<section class="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden">
<div class="p-8 pb-4 flex justify-between items-center">
<h3 class="text-xl font-bold">Registered Stakeholders</h3>
<div class="flex gap-3">
<div class="relative">
<span class="material-symbols-outlined absolute left-3 top-2.5 text-on-surface-variant text-sm">search</span>
<input class="bg-surface-container-low border-none rounded-full text-xs pl-10 pr-4 h-9 w-64 focus:ring-primary/40" placeholder="Search users..." type="text"/>
</div>
<select class="bg-surface-container-low border-none rounded-full text-xs h-9 px-4 focus:ring-primary/40">
<option>All Roles</option>
<option>Farmers</option>
</select>
</div>
</div>
<div class="overflow-x-auto">
<table class="w-full text-left">
<thead class="bg-surface-container-low/50 border-b border-surface-variant">
<tr>
<th class="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Name / Email</th>
<th class="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Role</th>
<th class="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Wallet</th>
<th class="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Status</th>
<th class="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Joined</th>
<th class="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant text-right">Actions</th>
</tr>
</thead>
<tbody class="divide-y divide-surface-variant/50">
<tr class="hover:bg-surface-container-low/30 transition-colors">
<td class="px-8 py-5">
<div class="font-bold text-sm">Rajesh Kumar</div>
<div class="text-xs text-on-surface-variant">rajesh@farm.in</div>
</td>
<td class="px-6 py-5">
<span class="flex items-center gap-1 text-sm font-medium">🌾 Farmer</span>
</td>
<td class="px-6 py-5">
<code class="text-[10px] font-mono text-primary bg-primary/5 px-2 py-1 rounded">0x4f2c...8b1d</code>
</td>
<td class="px-6 py-5">
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-green-100 text-green-700">✅ Active</span>
</td>
<td class="px-6 py-5 text-xs">Mar 2024</td>
<td class="px-8 py-5 text-right space-x-2">
<button class="px-3 py-1 text-[10px] font-bold border border-error/30 text-error rounded-full hover:bg-error/5 transition-all">Revoke Role</button>
<button class="px-3 py-1 text-[10px] font-bold bg-surface-container-low text-on-surface-variant rounded-full hover:bg-surface-container transition-all">View</button>
</td>
</tr>
<tr class="hover:bg-surface-container-low/30 transition-colors">
<td class="px-8 py-5">
<div class="font-bold text-sm">FreshPack Foods</div>
<div class="text-xs text-on-surface-variant">admin@freshpack.com</div>
</td>
<td class="px-6 py-5">
<span class="flex items-center gap-1 text-sm font-medium">⚙️ Processor</span>
</td>
<td class="px-6 py-5">
<code class="text-[10px] font-mono text-primary bg-primary/5 px-2 py-1 rounded">0x7a3b...2f90</code>
</td>
<td class="px-6 py-5">
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-green-100 text-green-700">✅ Active</span>
</td>
<td class="px-6 py-5 text-xs">Mar 2024</td>
<td class="px-8 py-5 text-right space-x-2">
<button class="px-3 py-1 text-[10px] font-bold border border-error/30 text-error rounded-full hover:bg-error/5 transition-all">Revoke Role</button>
<button class="px-3 py-1 text-[10px] font-bold bg-surface-container-low text-on-surface-variant rounded-full hover:bg-surface-container transition-all">View</button>
</td>
</tr>
<tr class="hover:bg-surface-container-low/30 transition-colors">
<td class="px-8 py-5">
<div class="font-bold text-sm">Priya Sharma</div>
<div class="text-xs text-on-surface-variant">priya@organic.in</div>
</td>
<td class="px-6 py-5">
<span class="flex items-center gap-1 text-sm font-medium">🌾 Farmer</span>
</td>
<td class="px-6 py-5">
<code class="text-[10px] font-mono text-primary bg-primary/5 px-2 py-1 rounded">0x2c1a...7d34</code>
</td>
<td class="px-6 py-5">
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-green-100 text-green-700">✅ Active</span>
</td>
<td class="px-6 py-5 text-xs">Feb 2024</td>
<td class="px-8 py-5 text-right space-x-2">
<button class="px-3 py-1 text-[10px] font-bold border border-error/30 text-error rounded-full hover:bg-error/5 transition-all">Revoke Role</button>
<button class="px-3 py-1 text-[10px] font-bold bg-surface-container-low text-on-surface-variant rounded-full hover:bg-surface-container transition-all">View</button>
</td>
</tr>
<tr class="hover:bg-surface-container-low/30 transition-colors">
<td class="px-8 py-5">
<div class="font-bold text-sm">QuickMesh Logistics</div>
<div class="text-xs text-on-surface-variant">ops@quickmesh.in</div>
</td>
<td class="px-6 py-5">
<span class="flex items-center gap-1 text-sm font-medium">🚛 Distributor</span>
</td>
<td class="px-6 py-5">
<code class="text-[10px] font-mono text-primary bg-primary/5 px-2 py-1 rounded">0x9b4c...3e12</code>
</td>
<td class="px-6 py-5">
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-green-100 text-green-700">✅ Active</span>
</td>
<td class="px-6 py-5 text-xs">Feb 2024</td>
<td class="px-8 py-5 text-right space-x-2">
<button class="px-3 py-1 text-[10px] font-bold border border-error/30 text-error rounded-full hover:bg-error/5 transition-all">Revoke Role</button>
<button class="px-3 py-1 text-[10px] font-bold bg-surface-container-low text-on-surface-variant rounded-full hover:bg-surface-container transition-all">View</button>
</td>
</tr>
<tr class="hover:bg-surface-container-low/30 transition-colors">
<td class="px-8 py-5">
<div class="font-bold text-sm">RetailMax Organic</div>
<div class="text-xs text-on-surface-variant">store@retailmax.in</div>
</td>
<td class="px-6 py-5">
<span class="flex items-center gap-1 text-sm font-medium">🏪 Retailer</span>
</td>
<td class="px-6 py-5">
<code class="text-[10px] font-mono text-primary bg-primary/5 px-2 py-1 rounded">0x5d7f...9c21</code>
</td>
<td class="px-6 py-5">
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-green-100 text-green-700">✅ Active</span>
</td>
<td class="px-6 py-5 text-xs">Jan 2024</td>
<td class="px-8 py-5 text-right space-x-2">
<button class="px-3 py-1 text-[10px] font-bold border border-error/30 text-error rounded-full hover:bg-error/5 transition-all">Revoke Role</button>
<button class="px-3 py-1 text-[10px] font-bold bg-surface-container-low text-on-surface-variant rounded-full hover:bg-surface-container transition-all">View</button>
</td>
</tr>
<tr class="hover:bg-surface-container-low/30 transition-colors">
<td class="px-8 py-5">
<div class="font-bold text-sm">GreenGrove Farm</div>
<div class="text-xs text-on-surface-variant">info@greengrove.com</div>
</td>
<td class="px-6 py-5">
<span class="flex items-center gap-1 text-sm font-medium">🌾 Farmer</span>
</td>
<td class="px-6 py-5">
<code class="text-[10px] font-mono text-primary bg-primary/5 px-2 py-1 rounded">0x3e8b...1a89</code>
</td>
<td class="px-6 py-5">
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-700">⏳ Pending</span>
</td>
<td class="px-6 py-5 text-xs">Jan 2024</td>
<td class="px-8 py-5 text-right space-x-2">
<button class="px-3 py-1 text-[10px] font-bold bg-primary-container text-on-primary rounded-full hover:shadow-md transition-all">Grant Role</button>
<button class="px-3 py-1 text-[10px] font-bold bg-surface-container-low text-on-surface-variant rounded-full hover:bg-surface-container transition-all">View</button>
</td>
</tr>
<tr class="hover:bg-surface-container-low/30 transition-colors">
<td class="px-8 py-5">
<div class="font-bold text-sm">ColdChain Partners</div>
<div class="text-xs text-on-surface-variant">partner@coldchain.in</div>
</td>
<td class="px-6 py-5">
<span class="flex items-center gap-1 text-sm font-medium">🚛 Distributor</span>
</td>
<td class="px-6 py-5">
<code class="text-[10px] font-mono text-primary bg-primary/5 px-2 py-1 rounded">0x6c2d...4f17</code>
</td>
<td class="px-6 py-5">
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-green-100 text-green-700">✅ Active</span>
</td>
<td class="px-6 py-5 text-xs">Dec 2023</td>
<td class="px-8 py-5 text-right space-x-2">
<button class="px-3 py-1 text-[10px] font-bold border border-error/30 text-error rounded-full hover:bg-error/5 transition-all">Revoke Role</button>
<button class="px-3 py-1 text-[10px] font-bold bg-surface-container-low text-on-surface-variant rounded-full hover:bg-surface-container transition-all">View</button>
</td>
</tr>
<tr class="hover:bg-surface-container-low/30 transition-colors">
<td class="px-8 py-5">
<div class="font-bold text-sm">NatureMart</div>
<div class="text-xs text-on-surface-variant">admin@naturemart.in</div>
</td>
<td class="px-6 py-5">
<span class="flex items-center gap-1 text-sm font-medium">🏪 Retailer</span>
</td>
<td class="px-6 py-5">
<code class="text-[10px] font-mono text-primary bg-primary/5 px-2 py-1 rounded">0x1f9e...8b3a</code>
</td>
<td class="px-6 py-5">
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-500">🚫 Revoked</span>
</td>
<td class="px-6 py-5 text-xs">Jan 2024</td>
<td class="px-8 py-5 text-right space-x-2">
<button class="px-3 py-1 text-[10px] font-bold border border-primary-container text-primary-container rounded-full hover:bg-primary/5 transition-all">Reinstate</button>
</td>
</tr>
</tbody>
</table>
</div>
</section>
</div>
<!-- Right Sidebar Column -->
<div class="col-span-12 lg:col-span-3 space-y-8">
<!-- System Status -->
<section class="bg-surface-container-lowest p-6 rounded-2xl shadow-sm">
<h3 class="text-lg font-bold mb-6 flex items-center gap-2">
<span class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                            System Status
                        </h3>
<div class="space-y-4">
<div class="flex items-center justify-between text-xs font-bold">
<span class="text-on-surface-variant">Polygon Node</span>
<span class="text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Connected</span>
</div>
<div class="flex items-center justify-between text-xs font-bold">
<span class="text-on-surface-variant">MongoDB</span>
<span class="text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Connected</span>
</div>
<div class="flex items-center justify-between text-xs font-bold">
<span class="text-on-surface-variant">Redis Cache</span>
<span class="text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Connected</span>
</div>
<div class="flex items-center justify-between text-xs font-bold">
<span class="text-on-surface-variant">IPFS Gateway</span>
<span class="text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Connected</span>
</div>
<div class="flex items-center justify-between text-xs font-bold">
<span class="text-on-surface-variant">Event Indexer</span>
<span class="text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Running</span>
</div>
</div>
<div class="mt-8 pt-6 border-t border-surface-variant">
<div class="flex items-center gap-2 text-[10px] font-mono text-on-surface-variant">
<span class="material-symbols-outlined text-xs">database</span>
                                Last block synced: #45,123,847
                            </div>
</div>
</section>
<!-- Recent Actions -->
<section class="bg-surface-container-lowest p-6 rounded-2xl shadow-sm">
<h3 class="text-lg font-bold mb-6 flex items-center gap-2">
<span class="material-symbols-outlined">history</span>
                            Recent Admin Actions
                        </h3>
<div class="space-y-6">
<div class="relative pl-6 border-l-2 border-primary-fixed">
<div class="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-primary"></div>
<p class="text-xs font-bold">Granted FARMER role to 0x2c1a...</p>
<p class="text-[10px] text-on-surface-variant mt-1">3h ago • Block #45,122,901</p>
</div>
<div class="relative pl-6 border-l-2 border-primary-fixed">
<div class="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-error"></div>
<p class="text-xs font-bold">Revoked RETAILER role: NatureMart</p>
<p class="text-[10px] text-on-surface-variant mt-1">2d ago • Block #45,098,122</p>
</div>
<div class="relative pl-6 border-l-2 border-primary-fixed">
<div class="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-tertiary"></div>
<p class="text-xs font-bold">Contract deployed: CertificateNFT</p>
<p class="text-[10px] text-on-surface-variant mt-1">Jan 2024 • Mainnet V2.4</p>
</div>
</div>
<button class="w-full mt-6 py-2 text-xs font-bold text-primary bg-primary/5 rounded-full hover:bg-primary/10 transition-all">View All Activity</button>
</section>
<!-- Blockchain Context (Extra decorative but useful) -->
<div class="p-6 rounded-2xl bg-gradient-to-br from-primary to-primary-container text-white">
<div class="flex justify-between items-start mb-4">
<span class="material-symbols-outlined">hub</span>
<span class="text-[10px] font-bold uppercase tracking-widest bg-white/20 px-2 py-0.5 rounded">Mainnet</span>
</div>
<p class="text-xs font-bold mb-1">Contract: RoleManager.sol</p>
<p class="text-[10px] font-mono text-white/70 break-all mb-4">0xc0de...4f8b2d1</p>
<div class="h-1 bg-white/20 rounded-full overflow-hidden">
<div class="h-full bg-white w-2/3"></div>
</div>
</div>
</div>
</div>
</div>
</main>
` }}
    />
  );
}

export default AdminPanel;
