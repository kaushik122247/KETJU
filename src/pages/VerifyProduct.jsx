import React from 'react';

function VerifyProduct() {
  return (
    <div 
      className="ketju-page-wrapper w-full min-h-screen bg-surface dark:bg-slate-950 font-sans text-on-surface"
      dangerouslySetInnerHTML={{ __html: `<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            vertical-align: middle;
        }
        body { font-family: 'Inter', sans-serif; }
    </style>

<!-- Unified TopNavBar -->
<header class="fixed top-0 w-full z-[100] bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 flex flex-col md:flex-row justify-between items-center h-[72px] px-8 shadow-sm">
  <!-- Left: Logo -->
  <div class="flex-1 flex justify-start w-full md:w-auto mt-2 md:mt-0">
      <div class="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity" onclick="window.location.href='/'">
        <span class="material-symbols-outlined text-primary text-2xl" style="font-variation-settings: 'FILL' 1;">account_tree</span> KETJU
      </div>
  </div>

  <!-- Center: Nav Items -->
  <nav class="hidden md:flex flex-1 justify-center items-center gap-8 text-sm font-semibold">
    <a href="/" class="text-slate-500 hover:text-slate-900 flex items-center gap-1 transition-colors"><span class="material-symbols-outlined text-sm">home</span> Home</a>
    
<a class="text-slate-500 hover:text-slate-900 transition-colors" href="/verify">Trace</a>
<a class="text-slate-500 hover:text-slate-900 transition-colors" href="#">Provenance</a>
<a class="text-slate-500 hover:text-slate-900 transition-colors" href="#">Insight</a>
<a class="text-slate-500 hover:text-slate-900 transition-colors" href="#">Network</a>
        
  </nav>

  <!-- Right: Actions -->
  <div class="flex-1 flex justify-end items-center gap-3 md:gap-4 mt-2 md:mt-0">
    
<button class="bg-white border-1.5 border-primary-container text-primary-container px-5 py-2 rounded-full text-sm font-semibold hover:bg-surface-container transition-all flex items-center gap-2" onclick="window.location.reload()">
    <span class="material-symbols-outlined text-sm">search</span>
    Verify Another Product
</button>
        
  </div>
</header>
<!-- Filler to prevent content overlap -->
<div class="h-[72px] w-full"></div>
<button class="bg-white border-1.5 border-primary-container text-primary-container px-5 py-2 rounded-full text-sm font-semibold hover:bg-surface-container transition-all flex items-center gap-2">
<span class="material-symbols-outlined text-sm">search</span>
                Verify Another Product
            </button>
</div>
</header>
<main class="pt-24 pb-32">
<!-- Product Hero Header -->
<section class="max-w-screen-2xl mx-auto px-6 mb-20">
<div class="grid lg:grid-cols-12 gap-12 items-start">
<!-- Left Content -->
<div class="lg:col-span-8">
<nav class="flex items-center gap-2 text-on-surface-variant text-sm font-medium mb-6">
<span>Home</span>
<span class="material-symbols-outlined text-xs">chevron_right</span>
<span>Verify Product</span>
<span class="material-symbols-outlined text-xs">chevron_right</span>
<span class="text-primary font-bold">CT-2024-0871</span>
</nav>
<h1 class="text-5xl lg:text-6xl font-extrabold tracking-tight text-on-surface mb-4">Organic Cherry Tomatoes</h1>
<p class="text-xl text-on-surface-variant mb-8">Batch #CT-2024-0871 · Registered March 12, 2024</p>
<div class="flex flex-wrap gap-3 mb-12">
<span class="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-sm font-bold">
Organic Certified
                        </span>
<span class="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-on-secondary-fixed text-white text-sm font-bold">
Blockchain Verified
                        </span>
<span class="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant text-sm font-bold">
<span class="material-symbols-outlined text-sm">lab_research</span>
                            Lab Tested
                        </span>
</div>
<!-- Farmer Section -->
<div class="bg-surface-container p-8 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all hover:bg-surface-container-high">
<div class="flex items-center gap-4">
<a href="/" class="text-sm font-semibold text-primary border border-transparent px-4 py-1.5 rounded-full hover:bg-primary/5 transition-all">Home</a>

<div class="w-16 h-16 rounded-full bg-primary-container flex items-center justify-center text-white text-xl font-bold border-4 border-white shadow-sm overflow-hidden">
<img alt="RK" class="w-full h-full object-cover" data-alt="portrait of a happy Indian farmer in traditional attire smiling with a blurred tomato farm in background soft daylight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYmzr_VajyOgj619n2E_AC_8sqdWQLDstbQfsUF_P4K4gAcZgErRBKFSUEdzM7YPVohKRNyRXOrqg3-A8GFxCf2gGCDupnLt45Zs7IQUhvcC5qhpd7OYcaiBe3ltd5_toa7KjO_x46m3vTrbKWTEIFEobeVg4jkY132DXvMzSI6vwrw3XQ6f4A_RsnN9_1PmD-ybyv_zRkrR0RG93e_pjOCUIaJXZJoIT1BSGP2ZSDSCdlKB0ok-JEqjBgKcbWivtcDpJHFpCZk8I"/>
</div>
<div>
<h3 class="text-lg font-bold text-on-surface">Rajesh Kumar</h3>
<p class="text-on-surface-variant flex items-center gap-1">
<span class="material-symbols-outlined text-sm">location_on</span>
                                    Nashik Farm, Maharashtra
                                </p>
<p class="text-xs font-bold text-primary mt-1 uppercase tracking-wider">Harvest Date: March 10, 2024</p>
</div>
</div>
<button class="bg-surface-container-lowest text-primary px-6 py-2.5 rounded-full text-sm font-bold shadow-sm flex items-center gap-2 hover:bg-primary hover:text-white transition-all">
                            View IPFS Certificate
                            <span class="material-symbols-outlined text-sm">north_east</span>
</button>
</div>
</div>
<!-- Right QR Code Section -->
<div class="lg:col-span-4">
<div class="bg-surface-container-lowest p-8 rounded-3xl shadow-[0_48px_48px_rgba(27,26,37,0.06)] flex flex-col items-center text-center">
<div class="bg-surface-container-low p-6 rounded-2xl mb-6">
<img alt="Product QR Code" class="w-48 h-48 mix-blend-multiply" data-alt="high quality minimalist QR code on white clean background with subtle tech patterns around it editorial style" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbLeC94_jFFciH6Fw5v1yW6YZN_CWnc_OgGCw9R44XXaQkALiqUHMVdzqZdNbengQND0S-nJcyBweQe3FF3qq_s8WiS2h5C6uSVcfXNNZ3h3bdsdiLSqBdXSCnr0w-XSoaMIYCZkPU0eVr9LaSzAue4Q4D0eqv4oLUSNa1Rt5yxK_w9K5-mDQ39URq5mehDIps4hgBMwATP8-Gn5UuWHLH1zML9WcDhzS5miuWCUIHmyInzEWJM52MkjMKGJH6J7fIY0H0H8roDCw"/>
</div>
<h4 class="text-lg font-bold text-on-surface mb-2">Scan to share journey</h4>
<div class="bg-surface-container-low px-4 py-2 rounded-lg font-mono text-sm text-on-surface-variant flex items-center gap-2">
                            0x7f3b…a9c2
                            <span class="material-symbols-outlined text-xs cursor-pointer hover:text-primary transition-colors">content_copy</span>
</div>
</div>
</div>
</div>
</section>
<!-- Supply Chain Timeline -->
<section class="max-w-screen-2xl mx-auto px-6 mb-32">
<div class="text-center mb-16">
<h2 class="text-3xl font-bold text-on-surface mb-4">Complete Journey from Farm to Consumer</h2>
<div class="w-24 h-1.5 bg-primary-container mx-auto rounded-full"></div>
</div>
<div class="relative max-w-5xl mx-auto pl-12 md:pl-0">
<!-- Vertical Line -->
<div class="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-surface-container-highest -translate-x-1/2"></div>
<!-- Step 1: Farm -->
<div class="relative mb-16 md:flex items-center justify-between w-full">
<div class="md:w-[45%] mb-4 md:mb-0">
<div class="bg-surface-container-lowest p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border-l-4 border-emerald-500">
<div class="flex justify-between items-start mb-4">
<h4 class="font-bold text-lg text-on-surface">Product Registered</h4>
<span class="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">FARM</span>
</div>
<div class="space-y-3 text-sm text-on-surface-variant">
<p class="flex items-center gap-2"><span class="material-symbols-outlined text-sm">person</span> Rajesh Kumar</p>
<p class="flex items-center gap-2"><span class="material-symbols-outlined text-sm">location_on</span> Nashik, Maharashtra</p>
<p class="flex items-center gap-2"><span class="material-symbols-outlined text-sm">calendar_today</span> March 12, 2024 · 09:14 AM IST</p>
</div>
<div class="mt-4 pt-4 border-t border-outline-variant/20 flex gap-3">
<span class="text-[10px] font-bold uppercase tracking-widest text-primary cursor-pointer hover:underline">Polygon Tx</span>
<span class="text-[10px] font-bold uppercase tracking-widest text-primary cursor-pointer hover:underline">IPFS Metadata</span>
</div>
</div>
</div>
<div class="absolute left-6 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-emerald-500 border-4 border-white shadow-sm flex items-center justify-center z-10">
</div>
<div class="hidden md:block md:w-[45%]"></div>
</div>
<!-- Step 2: Processing -->
<div class="relative mb-16 md:flex items-center justify-between w-full flex-row-reverse">
<div class="md:w-[45%] mb-4 md:mb-0">
<div class="bg-surface-container-lowest p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border-r-4 border-amber-500 text-right">
<div class="flex justify-between md:justify-end items-start gap-4 mb-4">
<span class="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded">PROCESSING</span>
<h4 class="font-bold text-lg text-on-surface">Processed at FreshPack</h4>
</div>
<div class="space-y-3 text-sm text-on-surface-variant">
<p class="flex items-center justify-end gap-2">Pune, Maharashtra <span class="material-symbols-outlined text-sm">factory</span></p>
<p class="flex items-center justify-end gap-2">March 15, 2024 · 02:30 PM <span class="material-symbols-outlined text-sm">schedule</span></p>
<p class="bg-amber-50 text-amber-800 p-2 rounded text-xs inline-block mt-2">Quality Grade: A+ | Pesticide residue: 0.0%</p>
</div>
</div>
</div>
<div class="absolute left-6 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-amber-500 border-4 border-white shadow-sm flex items-center justify-center z-10">
<span class="material-symbols-outlined text-white text-xl">settings</span>
</div>
<div class="hidden md:block md:w-[45%]"></div>
</div>
<!-- Step 3: Distribution -->
<div class="relative mb-16 md:flex items-center justify-between w-full">
<div class="md:w-[45%] mb-4 md:mb-0">
<div class="bg-surface-container-lowest p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border-l-4 border-orange-500">
<div class="flex justify-between items-start mb-4">
<h4 class="font-bold text-lg text-on-surface">Dispatched to Warehouse</h4>
<span class="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded">DISTRIBUTION</span>
</div>
<div class="space-y-3 text-sm text-on-surface-variant">
<p class="flex items-center gap-2"><span class="material-symbols-outlined text-sm">local_shipping</span> QuickMesh Logistics</p>
<p class="flex items-center gap-2"><span class="material-symbols-outlined text-sm">ac_unit</span> Temp: 4°C (Consistent)</p>
<p class="flex items-center gap-2"><span class="material-symbols-outlined text-sm">calendar_today</span> March 17, 2024 · 06:00 AM</p>
</div>
</div>
</div>
<div class="absolute left-6 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-orange-500 border-4 border-white shadow-sm flex items-center justify-center z-10">
<span class="material-symbols-outlined text-white text-xl">local_shipping</span>
</div>
<div class="hidden md:block md:w-[45%]"></div>
</div>
<!-- Step 4: Retail -->
<div class="relative mb-16 md:flex items-center justify-between w-full flex-row-reverse">
<div class="md:w-[45%] mb-4 md:mb-0">
<div class="bg-surface-container-lowest p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border-r-4 border-purple-500 text-right">
<div class="flex justify-between md:justify-end items-start gap-4 mb-4">
<span class="text-xs font-bold text-purple-600 bg-purple-50 px-2 py-1 rounded">RETAIL</span>
<h4 class="font-bold text-lg text-on-surface">Received at RetailMax</h4>
</div>
<div class="space-y-3 text-sm text-on-surface-variant">
<p class="flex items-center justify-end gap-2">Andheri West, Mumbai <span class="material-symbols-outlined text-sm">store</span></p>
<p class="flex items-center justify-end gap-2">March 18, 2024 · 10:20 AM <span class="material-symbols-outlined text-sm">event_available</span></p>
<p class="text-xs font-bold text-on-surface-variant">SKU: RT-7821</p>
</div>
</div>
</div>
<div class="absolute left-6 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-purple-500 border-4 border-white shadow-sm flex items-center justify-center z-10">
<span class="material-symbols-outlined text-white text-xl">store</span>
</div>
<div class="hidden md:block md:w-[45%]"></div>
</div>
<!-- Step 5: Consumer -->
<div class="relative md:flex items-center justify-between w-full">
<div class="md:w-[45%] mb-4 md:mb-0">
<div class="bg-primary-container p-6 rounded-2xl shadow-xl text-white">
<div class="flex justify-between items-start mb-4">
<h4 class="font-bold text-lg">Product Reached Consumer</h4>
<span class="text-xs font-bold bg-white/20 px-2 py-1 rounded uppercase">Verified</span>
</div>
<p class="text-white/90 text-sm mb-4">You successfully verified this product today through our tamper-proof tracing system.</p>
<div class="flex items-center gap-2 text-xs font-bold bg-black/10 p-2 rounded">
<span class="material-symbols-outlined text-sm">verified</span>
                                AUTHENTICITY CONFIRMED
                            </div>
</div>
</div>
<div class="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary-container border-4 border-white shadow-lg flex items-center justify-center z-10">
<span class="material-symbols-outlined text-white text-2xl">smartphone</span>
</div>
<div class="hidden md:block md:w-[45%]"></div>
</div>
</div>
</section>
<!-- Blockchain Proof Section -->
<section class="bg-on-primary-fixed py-24 px-6 relative overflow-hidden">
<!-- Decorative Background Element -->
<div class="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
<img alt="Decorative Mesh" class="object-cover w-full h-full" data-alt="abstract digital mesh of connected nodes and blockchain architecture deep navy and electric blue futuristic design" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9-39HN7xZsyzNsULK7old_KyZlQsraX7jnM9ee6oIxNXrZ5n8aeTPAxjLYPmS9aaRSIs5HEND-GLFG06W0v1xLMD3gF0PdMlYKKuuSqvudT3ApOSuk1ukOCx45H5H1oiUTtO_WfxIo41avF6LmUYNskK9xQtLWkK4iEp4-Q1x7Jpc1u_3a6eslrykLydIT-C3Z5iQl9KIZF4u2Ql7Y2VtMLAQdCgKW8WseOTmdKZads_SmPsl91zozxuLs3M7xhf_HMkVtvbVVrA"/>
</div>
<div class="max-w-screen-2xl mx-auto relative z-10">
<div class="max-w-2xl mb-16">
<h2 class="text-4xl font-extrabold tracking-tight text-white mb-4">Blockchain Transparency Record</h2>
<p class="text-white/70 text-lg">Our decentralized ledger ensures that every step of the supply chain is immutable, timestamped, and verifiable by anyone, anywhere.</p>
</div>
<div class="grid md:grid-cols-3 gap-8 mb-16">
<!-- Stat Card 1 -->
<div class="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl">
<p class="text-white/50 text-xs font-bold uppercase tracking-widest mb-2">Network Events</p>
<h3 class="text-5xl font-bold text-white mb-1">5</h3>
<p class="text-blue-300 text-sm font-medium">Verified Ledger Entries</p>
</div>
<!-- Stat Card 2 -->
<div class="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl">
<p class="text-white/50 text-xs font-bold uppercase tracking-widest mb-2">Transit Time</p>
<h3 class="text-5xl font-bold text-white mb-1">21</h3>
<p class="text-blue-300 text-sm font-medium">Days Farm to Shelf</p>
</div>
<!-- Stat Card 3 -->
<div class="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl">
<p class="text-white/50 text-xs font-bold uppercase tracking-widest mb-2">Blockchain</p>
<h3 class="text-5xl font-bold text-white mb-1">POS</h3>
<p class="text-blue-300 text-sm font-medium">Polygon Mumbai Testnet</p>
</div>
</div>
<div class="flex justify-center">
<button class="border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-on-primary-fixed transition-all flex items-center gap-3 group">
                        View Full Contract on PolygonScan
                        <span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
</button>
</div>
</div>
</section>
<!-- Related Certifications -->
<section class="bg-white py-24 px-6">
<div class="max-w-screen-2xl mx-auto">
<div class="flex items-center justify-between mb-12">
<h2 class="text-3xl font-bold text-on-surface">Verified Certifications</h2>
<button class="text-primary font-bold flex items-center gap-1 hover:gap-2 transition-all">
                        Download All Records
                        <span class="material-symbols-outlined">download</span>
</button>
</div>
<div class="grid md:grid-cols-3 gap-8">
<!-- Cert Card 1 -->
<div class="group bg-surface-container-low p-6 rounded-2xl flex items-center gap-4 hover:bg-surface-container transition-all cursor-pointer">
<div class="w-16 h-16 bg-white rounded-xl flex items-center justify-center text-emerald-600 shadow-sm group-hover:scale-105 transition-transform">
<span class="material-symbols-outlined text-3xl">description</span>
</div>
<div>
<h4 class="font-bold text-on-surface">KETJU NFT</h4>
<p class="text-on-surface-variant text-sm">PDF Document · 2.4 MB</p>
</div>
</div>
<!-- Cert Card 2 -->
<div class="group bg-surface-container-low p-6 rounded-2xl flex items-center gap-4 hover:bg-surface-container transition-all cursor-pointer">
<div class="w-16 h-16 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm group-hover:scale-105 transition-transform">
<span class="material-symbols-outlined text-3xl">science</span>
</div>
<div>
<h4 class="font-bold text-on-surface">KETJU NFT</h4>
<p class="text-on-surface-variant text-sm">PDF Document · 1.1 MB</p>
</div>
</div>
<!-- Cert Card 3 -->
<div class="group bg-surface-container-low p-6 rounded-2xl flex items-center gap-4 hover:bg-surface-container transition-all cursor-pointer">
<div class="w-16 h-16 bg-white rounded-xl flex items-center justify-center text-purple-600 shadow-sm group-hover:scale-105 transition-transform">
<span class="material-symbols-outlined text-3xl">token</span>
</div>
<div>
<h4 class="font-bold text-on-surface">KETJU NFT</h4>
<p class="text-on-surface-variant text-sm">Proof of Ownership · On-chain</p>
</div>
</div>
</div>
</div>
</section>
</main>
<!-- Bottom Navigation Bar (Mobile only) -->
<nav class="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-2 bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl border-t border-slate-100/20 shadow-[0_-4px_24px_rgba(0,0,0,0.04)] z-50 rounded-t-3xl">
<a class="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 px-5 py-2" href="#">
<span class="material-symbols-outlined">home</span>
<span class="text-[10px] font-bold uppercase tracking-widest mt-1">Home</span>
</a>
<a class="flex flex-col items-center justify-center bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-2xl px-5 py-2" href="#">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">qr_code_scanner</span>
<span class="text-[10px] font-bold uppercase tracking-widest mt-1">Verify</span>
</a>
<a class="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 px-5 py-2" href="#">
<span class="material-symbols-outlined">history</span>
<span class="text-[10px] font-bold uppercase tracking-widest mt-1">History</span>
</a>
<a class="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 px-5 py-2" href="#">
<span class="material-symbols-outlined">settings</span>
<span class="text-[10px] font-bold uppercase tracking-widest mt-1">Settings</span>
</a>
</nav>
` }}
    />
  );
}

export default VerifyProduct;
