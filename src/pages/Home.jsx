import React from 'react';

function Home() {
  return (
    <div 
      className="ketju-page-wrapper w-full min-h-screen bg-surface dark:bg-slate-950 font-sans text-on-surface"
      dangerouslySetInnerHTML={{ __html: `<style>

      body { font-family: 'Inter', sans-serif; background-color: #fcf8ff; }
      .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
      .glass-panel { backdrop-filter: blur(20px); background: rgba(255, 255, 255, 0.7); }
      .no-scrollbar::-webkit-scrollbar { display: none; }
      .step-line { background: repeating-linear-gradient(90deg, #c3c5d8, #c3c5d8 4px, transparent 4px, transparent 8px); }
    
.material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
</style>

<!-- Top Navigation Bar -->
<header class="fixed top-0 w-full z-[100] bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 flex flex-col md:flex-row justify-between items-center h-[72px] px-8 shadow-sm">
  <!-- Left: Logo -->
  <div class="flex-1 flex justify-start w-full md:w-auto mt-2 md:mt-0">
      <div class="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity" onclick="window.location.href='/'">
        <span class="material-symbols-outlined text-primary text-2xl" style="font-variation-settings: 'FILL' 1;">account_tree</span> KETJU
      </div>
  </div>

  <!-- Center: Nav Items -->
  <nav class="hidden md:flex flex-1 justify-center items-center gap-8 text-sm font-semibold">
    <a class="text-blue-600 dark:text-blue-400 font-semibold border-b-2 border-blue-600 pb-1 font-sans text-sm tracking-tight" href="#how-it-works">How It Works</a>
    <a class="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 font-sans text-sm font-medium tracking-tight transition-colors" href="/verify">Verify Product</a>
    <a class="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 font-sans text-sm font-medium tracking-tight transition-colors" href="/farmer">For Farmers</a>
    <a class="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 font-sans text-sm font-medium tracking-tight transition-colors" href="/admin">Dashboard</a>
  </nav>

  <!-- Right: Actions -->
  <div class="flex-1 flex justify-end items-center gap-3 md:gap-4 mt-2 md:mt-0">
    <a href="/farmer" class="hidden lg:block"><button class="px-5 py-2 rounded-full text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer">Connect Wallet</button></a>
    <a href="/register" class="inline-block"><button class="bg-primary-container text-on-primary px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-primary/20 scale-95 hover:scale-[0.98] transition-transform cursor-pointer">Get Started</button></a>
  </div>
</header>
<!-- Filler to prevent content overlap -->
<div class="h-[72px] w-full"></div>
<main>
<!-- Section 1: Hero Section -->
<section class="relative bg-white pt-8 pb-24 md:pt-12 md:pb-40 overflow-hidden">
<div class="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">
<!-- Left Content -->
<div class="w-full md:w-[55%]">
<div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-sm font-bold mb-8">
<span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">eco</span>
                        Blockchain Verified Supply Chain
                    </div>
<h1 class="text-[40px] md:text-[56px] leading-[1.1] font-extrabold text-[#393F49] tracking-tight mb-6">
                        From Farm to Consumer, Every Step Verified
                    </h1>
<p class="text-[18px] text-[#25242F] leading-relaxed mb-10 max-w-xl opacity-80">KETJU uses Polygon blockchain to create an immutable, tamper-proof record of your food's journey. Scan any QR code on packaging to instantly verify organic certification and supply chain authenticity.</p>
<div class="flex flex-wrap gap-4 mb-16">
<a href="/scanner" class="inline-block"><button class="bg-primary-container text-on-primary px-8 py-4 rounded-full font-bold flex items-center gap-2 shadow-xl shadow-primary/20 hover:-translate-y-1 transition-all cursor-pointer">
<span class="material-symbols-outlined">qr_code_scanner</span>
                            Scan a QR Code
                        </button></a>
<a href="/register" class="inline-block"><button class="border-2 border-primary-container text-primary-container px-8 py-4 rounded-full font-bold hover:bg-primary-container/5 transition-all cursor-pointer">
                            Register Your Farm
                        </button></a>
</div>
<div class="flex flex-wrap items-center gap-x-12 gap-y-6 pt-10 border-t border-slate-100">
<div class="flex flex-col">
<span class="text-2xl font-bold text-primary">2,400+</span>
<span class="text-sm text-on-surface-variant font-medium uppercase tracking-wider">Products Tracked</span>
</div>
<div class="w-px h-10 bg-slate-200 hidden md:block"></div>
<div class="flex flex-col">
<span class="text-2xl font-bold text-primary">98.7%</span>
<span class="text-sm text-on-surface-variant font-medium uppercase tracking-wider">Verification Rate</span>
</div>
<div class="w-px h-10 bg-slate-200 hidden md:block"></div>
<div class="flex flex-col">
<span class="text-2xl font-bold text-primary">12</span>
<span class="text-sm text-on-surface-variant font-medium uppercase tracking-wider">Countries</span>
</div>
</div>
</div>
<!-- Right Visual: Technical Diagram -->
<div class="w-full md:w-[45%] relative">
<div class="aspect-square w-full rounded-3xl bg-surface-container-low flex items-center justify-center p-8 relative overflow-hidden">
<!-- Abstract Mesh Background -->
<div class="absolute inset-0 opacity-20 pointer-events-none" style="background-image: radial-gradient(#0254ec 0.5px, transparent 0.5px); background-size: 24px 24px;"></div>
<!-- Blockchain Visual -->
<div class="relative w-full h-full flex flex-col justify-between py-12">
<!-- SVG Connections -->
<svg class="absolute inset-0 w-full h-full pointer-events-none" preserveaspectratio="none">
<path d="M 50% 15% L 20% 40% L 50% 65% L 80% 40% Z" fill="none" stroke="url(#grad-hero)" stroke-dasharray="8,4" stroke-width="2"></path>
<defs>
<lineargradient id="grad-hero" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" style="stop-color:#16A34A;stop-opacity:1"></stop>
<stop offset="50%" style="stop-color:#0254ec;stop-opacity:1"></stop>
<stop offset="100%" style="stop-color:#673c65;stop-opacity:1"></stop>
</lineargradient>
</defs>
</svg>
<!-- Node: Farm -->
<div class="flex flex-col items-center gap-2 z-10 self-center">
<div class="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center border-2 border-emerald-500">
<span class="material-symbols-outlined text-emerald-600 text-3xl">agriculture</span>
</div>
<span class="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">Farm</span>
</div>
<div class="flex justify-between w-full px-4">
<!-- Node: Processor -->
<div class="flex flex-col items-center gap-2 z-10">
<div class="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center border-2 border-amber-500">
<span class="material-symbols-outlined text-amber-600 text-3xl">precision_manufacturing</span>
</div>
<span class="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-50 px-2 py-0.5 rounded">Processor</span>
</div>
<!-- Node: Retailer -->
<div class="flex flex-col items-center gap-2 z-10">
<div class="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center border-2 border-purple-500">
<span class="material-symbols-outlined text-purple-600 text-3xl">storefront</span>
</div>
<span class="text-xs font-bold uppercase tracking-widest text-purple-700 bg-purple-50 px-2 py-0.5 rounded">Retailer</span>
</div>
</div>
<!-- Node: Consumer -->
<div class="flex flex-col items-center gap-2 z-10 self-center">
<div class="w-20 h-20 rounded-full bg-primary-container shadow-xl flex items-center justify-center border-4 border-white">
<span class="material-symbols-outlined text-white text-4xl">person_check</span>
</div>
<span class="text-xs font-bold uppercase tracking-widest text-primary bg-primary-fixed px-3 py-1 rounded-full">Consumer</span>
</div>
<!-- Center: The Chain -->
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-inner flex items-center justify-center text-primary-container border border-slate-100">
<span class="material-symbols-outlined animate-pulse">link</span>
</div>
</div>
</div>
<!-- Floating Badge -->
<div class="absolute -bottom-6 -left-6 glass-panel p-4 rounded-2xl shadow-2xl flex items-center gap-3 border border-white/40">
<div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">shield</span>
</div>
<div>
<p class="text-[10px] uppercase font-bold text-blue-800 tracking-widest">Security Protocol</p>
<p class="text-xs font-medium text-slate-700">Polygon Mainnet Active</p>
</div>
</div>
</div>
</div>
</section>
<!-- Section 2: How It Works Section -->
<section class="bg-surface-container-low py-24 md:py-32">
<div class="max-w-7xl mx-auto px-6 md:px-12">
<div class="text-center max-w-2xl mx-auto mb-20">
<h2 class="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Transparent Trust, Every Step of the Way</h2>
<p class="text-on-surface-variant text-lg leading-relaxed">Each product event is recorded as an immutable transaction on the Polygon blockchain</p>
</div>
<!-- 5-Column Layout -->
<div class="relative">
<!-- Connecting Line -->
<div class="absolute top-5 left-0 w-full h-1 step-line hidden md:block opacity-30"></div>
<div class="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
<!-- Step 1 -->
<div class="flex flex-col items-center text-center group">
<div class="w-10 h-10 rounded-full bg-[#16A34A] text-white flex items-center justify-center mb-6 z-10 shadow-lg group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-xl">grain</span>
</div>
<div class="bg-surface-container-lowest p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow h-full">
<h3 class="font-bold text-slate-900 mb-3">Farm Registration</h3>
<p class="text-sm text-on-surface-variant leading-relaxed">Farmer registers product batch with organic certifications on IPFS</p>
</div>
</div>
<!-- Step 2 -->
<div class="flex flex-col items-center text-center group">
<div class="w-10 h-10 rounded-full bg-[#D97706] text-white flex items-center justify-center mb-6 z-10 shadow-lg group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-xl">settings</span>
</div>
<div class="bg-surface-container-lowest p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow h-full">
<h3 class="font-bold text-slate-900 mb-3">Processing</h3>
<p class="text-sm text-on-surface-variant leading-relaxed">Processor logs transformation events with lab reports and photos</p>
</div>
</div>
<!-- Step 3 -->
<div class="flex flex-col items-center text-center group">
<div class="w-10 h-10 rounded-full bg-[#EA580C] text-white flex items-center justify-center mb-6 z-10 shadow-lg group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-xl">local_shipping</span>
</div>
<div class="bg-surface-container-lowest p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow h-full">
<h3 class="font-bold text-slate-900 mb-3">Distribution</h3>
<p class="text-sm text-on-surface-variant leading-relaxed">Distributor records transit with GPS locations and timestamps</p>
</div>
</div>
<!-- Step 4 -->
<div class="flex flex-col items-center text-center group">
<div class="w-10 h-10 rounded-full bg-[#7C3AED] text-white flex items-center justify-center mb-6 z-10 shadow-lg group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-xl">store</span>
</div>
<div class="bg-surface-container-lowest p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow h-full">
<h3 class="font-bold text-slate-900 mb-3">Retail</h3>
<p class="text-sm text-on-surface-variant leading-relaxed">Retailer confirms product receipt and shelf placement</p>
</div>
</div>
<!-- Step 5 -->
<div class="flex flex-col items-center text-center group">
<div class="w-10 h-10 rounded-full bg-[#0254EC] text-white flex items-center justify-center mb-6 z-10 shadow-lg group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-xl">smartphone</span>
</div>
<div class="bg-surface-container-lowest p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow h-full">
<h3 class="font-bold text-slate-900 mb-3">Consumer</h3>
<p class="text-sm text-on-surface-variant leading-relaxed">Consumer scans QR code to view complete verified journey</p>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- Section 3: Features Section -->
<section class="bg-white py-24 md:py-40">
<div class="max-w-7xl mx-auto px-6 md:px-12">
<div class="text-center mb-20">
<h2 class="text-3xl md:text-5xl font-extrabold text-[#1b1a25] tracking-tight">Built on Blockchain, Designed for Trust</h2>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-12">
<!-- Feature 1 -->
<div class="group">
<div class="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
<span class="material-symbols-outlined text-3xl">security</span>
</div>
<h3 class="text-2xl font-bold mb-4">Immutable Records</h3>
<p class="text-on-surface-variant leading-relaxed text-lg">Every supply chain event is permanently recorded on Polygon blockchain. No tampering, no fraud, just pure transparency.</p>
</div>
<!-- Feature 2 -->
<div class="group">
<div class="w-16 h-16 rounded-2xl bg-slate-100 text-slate-900 flex items-center justify-center mb-8 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
<span class="material-symbols-outlined text-3xl">qr_code_2</span>
</div>
<h3 class="text-2xl font-bold mb-4">Instant Verification</h3>
<p class="text-on-surface-variant leading-relaxed text-lg">Consumers scan QR code on packaging to access complete product history in seconds. No apps required.</p>
</div>
<!-- Feature 3 -->
<div class="group">
<div class="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
<span class="material-symbols-outlined text-3xl">workspace_premium</span>
</div>
<h3 class="text-2xl font-bold mb-4">Organic Certification NFTs</h3>
<p class="text-on-surface-variant leading-relaxed text-lg">Farmers receive soulbound NFT certificates verifiable on-chain when they register organic products, ensuring high-value authenticity.</p>
</div>
</div>
</div>
</section>
<!-- Section 4: Consumer Trust Section -->
<section class="bg-[#01123F] text-white py-24 md:py-40 overflow-hidden relative">
<!-- Decorative Glow -->
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
<div class="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-20 relative z-10">
<div class="w-full lg:w-1/2">
<h2 class="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight">Know Exactly What You're Eating</h2>
<p class="text-xl text-slate-300 leading-relaxed mb-12">Scan the QR code on any KETJU-verified product to see the full journey — from the farm where it was grown to the store where you bought it.</p>
<a href="/verify" class="inline-block"><button class="bg-white text-primary px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-white/10 transition-all active:scale-95 cursor-pointer">
                        Try the Verifier
                    </button></a>
</div>
<!-- Verification Card Mockup -->
<div class="w-full lg:w-1/2">
<div class="bg-white text-slate-900 rounded-3xl p-8 shadow-2xl overflow-hidden max-w-lg mx-auto transform hover:rotate-2 transition-transform duration-500">
<!-- Card Header -->
<div class="flex items-start justify-between mb-8">
<div>
<h4 class="text-2xl font-extrabold mb-1">Organic Tomatoes</h4>
<p class="text-slate-500 font-mono text-xs tracking-wider uppercase">Batch #CT-2024-001</p>
</div>
<div class="flex flex-col items-end">
<span class="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-1 rounded-full mb-2">VERIFIED SAFE</span>
<span class="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-1 rounded-full">BLOCKCHAIN PROOF</span>
</div>
</div>
<!-- Mini Timeline -->
<div class="space-y-6 mb-8 relative">
<div class="absolute left-3 top-3 bottom-3 w-0.5 bg-slate-100"></div>
<!-- Timeline Point 1 -->
<div class="flex items-center gap-4 relative">
<div class="w-6 h-6 rounded-full bg-emerald-500 ring-4 ring-emerald-50 z-10 flex items-center justify-center">
<span class="material-symbols-outlined text-[14px] text-white" style="font-variation-settings: 'FILL' 1;">check</span>
</div>
<div>
<p class="text-sm font-bold">Harvested</p>
<p class="text-xs text-slate-500">Green Valley Farm • Sept 12, 2024</p>
</div>
</div>
<!-- Timeline Point 2 -->
<div class="flex items-center gap-4 relative opacity-60">
<div class="w-6 h-6 rounded-full bg-slate-200 z-10"></div>
<div>
<p class="text-sm font-bold">Processed</p>
<p class="text-xs text-slate-500">Central Packaging • Sept 14, 2024</p>
</div>
</div>
<!-- Etc Points -->
<div class="flex items-center gap-4 relative opacity-40">
<div class="w-6 h-6 rounded-full bg-slate-100 z-10"></div>
<p class="text-xs font-bold text-slate-400">+ 3 More Stages Logged</p>
</div>
</div>
<!-- Product Footer Info -->
<div class="grid grid-cols-2 gap-4 py-6 border-t border-slate-100 mb-6">
<div>
<p class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Farmer</p>
<p class="text-sm font-bold">Antonio Morales</p>
</div>
<div>
<p class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Method</p>
<p class="text-sm font-bold">100% Hydroponic</p>
</div>
</div>
<!-- Link -->
<a class="flex items-center justify-between bg-slate-50 p-4 rounded-xl group" href="#">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-blue-600">visibility</span>
<span class="text-sm font-bold">View Full Chain on Polygon</span>
</div>
<span class="material-symbols-outlined text-slate-400 group-hover:translate-x-1 transition-transform">arrow_forward</span>
</a>
</div>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="bg-slate-950 text-white w-full pt-24 pb-12">
<div class="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div class="md:col-span-1">
<div class="text-2xl font-bold text-white mb-4 flex items-center gap-2"><span class="material-symbols-outlined text-primary-container">account_tree</span> KETJU</div>
<p class="text-slate-400 text-sm font-light leading-relaxed max-w-xs">Building the world's most transparent and secure food tracking network, one block at a time.</p>
</div>
<div>
<h5 class="text-white font-bold mb-6">Product</h5>
<ul class="space-y-4">
<li><a class="text-slate-400 hover:text-white transition-colors text-sm font-light" href="/log-event">Traceability</a></li>
<li><a class="text-slate-400 hover:text-white transition-colors text-sm font-light" href="/verify">Verification</a></li>
<li><a class="text-slate-400 hover:text-white transition-colors text-sm font-light" href="/farmer">Farmers Portal</a></li>
</ul>
</div>
<div>
<h5 class="text-white font-bold mb-6">Company</h5>
<ul class="space-y-4">
<li><a class="text-slate-400 hover:text-white transition-colors text-sm font-light" href="#">About Us</a></li>
<li><a class="text-slate-400 hover:text-white transition-colors text-sm font-light" href="#">Our Mission</a></li>
<li><a class="text-slate-400 hover:text-white transition-colors text-sm font-light" href="#">Contact</a></li>
</ul>
</div>
<div>
<h5 class="text-white font-bold mb-6">Subscribe to Updates</h5>
<div class="flex gap-2">
<input class="bg-slate-900 border-none rounded-full px-4 py-2 text-sm w-full focus:ring-1 focus:ring-primary-container" placeholder="Email address" type="email"/>
<button class="bg-primary-container text-white p-2 rounded-full flex items-center justify-center">
<span class="material-symbols-outlined">send</span>
</button>
</div>
</div>
</div>
<div class="max-w-7xl mx-auto px-8 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
<p class="text-slate-500 text-xs font-light">© 2024 KETJU. Built on Polygon Blockchain.</p>
<div class="flex gap-8">
<a class="text-slate-500 hover:text-white text-xs transition-colors" href="#">Privacy Policy</a>
<a class="text-slate-500 hover:text-white text-xs transition-colors" href="#">Terms of Service</a>
<a class="text-slate-500 hover:text-white text-xs transition-colors" href="#">Cookies</a>
</div>
</div>
</footer>
` }}
    />
  );
}

export default Home;
