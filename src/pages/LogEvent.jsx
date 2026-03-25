import React from 'react';

function LogEvent() {
  return (
    <div 
      className="ketju-page-wrapper w-full min-h-screen bg-surface dark:bg-slate-950 font-sans text-on-surface"
      dangerouslySetInnerHTML={{ __html: `<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        body { font-family: 'Inter', sans-serif; background-color: #fcf8ff; color: #1b1a25; }
        .glass-panel { backdrop-filter: blur(20px); background: rgba(255, 255, 255, 0.7); }
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
    
<a class="text-slate-500 hover:text-slate-900 transition-colors duration-200" href="/farmer">Dashboard</a>
<a class="text-slate-500 hover:text-slate-900 transition-colors duration-200" href="#">My Products</a>
<a class="text-slate-500 hover:text-slate-900 transition-colors duration-200" href="/register">Add Product</a>
<a class="text-slate-500 hover:text-slate-900 transition-colors duration-200 font-bold text-primary" href="/log-event">Log Event</a>
        
  </nav>

  <!-- Right: Actions -->
  <div class="flex-1 flex justify-end items-center gap-3 md:gap-4 mt-2 md:mt-0">
    
<div class="hidden lg:flex bg-amber-100 text-amber-700 px-3 py-1.5 rounded-full text-[10px] font-bold items-center border border-amber-200 uppercase">
    Processor
</div>
<code class="hidden lg:block bg-surface-container text-on-surface-variant px-3 py-1.5 rounded-full text-[10px] font-mono border border-outline-variant/20">0x7a3b...2f90</code>
<button class="bg-primary-container text-on-primary px-6 py-1.5 rounded-full text-sm font-semibold hover:bg-primary transition-all shadow-sm">
    Disconnect
</button>
        
  </div>
</header>
<!-- Filler to prevent content overlap -->
<div class="h-[72px] w-full"></div>
</header>
<main class="max-w-[1280px] mx-auto px-8 py-12">
<!-- Breadcrumb & Header -->
<div class="mb-12">
<nav class="flex items-center gap-2 text-on-surface-variant text-sm mb-4">
<span>Dashboard</span>
<span class="material-symbols-outlined text-xs">chevron_right</span>
<span class="text-primary-container font-medium">Log Supply Chain Event</span>
</nav>
<h1 class="text-5xl font-extrabold tracking-tight mb-4 text-on-surface">Log a Supply Chain Event</h1>
<p class="text-xl text-on-surface-variant max-w-2xl leading-relaxed">
                Record your stage in the product's blockchain journey. This creates an immutable on-chain event log.
            </p>
</div>
<!-- Info Banner -->
<div class="bg-[#FFFBEB] border-l-4 border-amber-500 p-6 rounded-r-lg mb-12 flex items-start gap-4">
<span class="material-symbols-outlined text-amber-600">info</span>
<div>
<p class="text-amber-900 font-semibold mb-0.5">Role Verification Required</p>
<p class="text-amber-800 text-sm">You are logged in as a <span class="font-bold">PROCESSOR</span>. You can only log PROCESSING stage events. MetaMask will prompt you to sign the transaction upon submission.</p>
</div>
</div>
<!-- Multi-Step Form Container -->
<div class="max-w-[860px] mx-auto space-y-8">
<!-- STEP 1: Find Product -->
<section class="bg-surface-container-lowest p-8 rounded-lg shadow-sm">
<div class="flex items-center gap-3 mb-6">
<div class="w-10 h-10 rounded-full bg-primary-container/10 text-primary-container flex items-center justify-center font-bold">1</div>
<h2 class="text-2xl font-bold text-on-surface">Find Product</h2>
</div>
<div class="space-y-6">
<div>
<label class="block text-sm font-bold text-on-surface uppercase tracking-wider mb-2">Product Batch ID *</label>
<div class="flex gap-3">
<input class="flex-1 bg-surface-container-low border-0 rounded-lg p-4 font-mono text-sm focus:ring-2 focus:ring-primary-container/40" placeholder="Scan QR or enter #CT-2024-0871" type="text"/>
<button class="bg-surface-container-high text-on-surface-variant px-6 py-3 rounded-full text-sm font-semibold flex items-center gap-2 border border-outline-variant/20 hover:bg-surface-variant transition-all">
<span class="material-symbols-outlined text-lg">qr_code_scanner</span>
                                Scan QR Code
                            </button>
<button class="bg-primary-container text-on-primary px-8 py-3 rounded-full text-sm font-bold hover:bg-primary transition-all">
                                Look Up Product
                            </button>
</div>
</div>
<!-- Product Preview (Revealed) -->
<div class="bg-surface-container-low rounded-xl p-6 relative overflow-hidden">
<div class="flex items-center justify-between mb-4">
<div class="flex items-center gap-4">
<a href="/" class="text-sm font-semibold text-primary border border-transparent px-4 py-1.5 rounded-full hover:bg-primary/5 transition-all">Home</a>

<img class="w-16 h-16 rounded-lg object-cover" data-alt="close up of fresh red cherry tomatoes still on the vine in a rustic wooden crate" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOxwZ_qwBWSVcwG_ale6BGpb4sFOIO6bBs5LqdFLBmGPsayEoYlxtE_0WMPkTqTan9FE1-FjhNCZ9HvTDf7YdSkgXEINQYKpQ8N0goR2JpDzfRvoCejmSgFGJXfQvFkZDp0RhcEE8lnnCu6V-XoWANl8Ca43IWAq0vbKCSMHcCA3A6l0YW3AkBOeuPLVhjwIDMFtp_9Bv3Rkz4jYq6JNDDGZMNYpPB_p7KXTHE4CanF9cU4TMa-XvAP-NjLLmHF-NJIP9QmYajmHY"/>
<div>
<h3 class="text-lg font-bold">Organic Cherry Tomatoes</h3>
<p class="text-sm text-on-surface-variant">Rajesh Kumar · Nashik</p>
</div>
</div>
<div class="text-right">
<p class="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Harvested</p>
<p class="font-mono text-sm">Mar 12, 2024</p>
</div>
</div>
<div class="flex items-center gap-2 mb-4">
<div class="flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                                🌾 FARM (Done)
                            </div>
<span class="material-symbols-outlined text-outline-variant">trending_flat</span>
<div class="flex items-center gap-2 bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-bold border border-amber-200">
<span class="material-symbols-outlined text-xs">settings</span>
                                Your Stage: PROCESSING
                            </div>
</div>
<div class="bg-green-50 text-green-700 text-xs font-bold py-2 px-3 rounded flex items-center gap-2">
<span class="material-symbols-outlined text-sm">check_circle</span>
                            Product found and active in supply chain
                        </div>
</div>
</div>
</section>
<!-- STEP 2: Your Stage Details -->
<section class="bg-surface-container-lowest p-8 rounded-lg shadow-sm">
<div class="flex items-center gap-3 mb-6">
<div class="w-10 h-10 rounded-full bg-primary-container/10 text-primary-container flex items-center justify-center font-bold">2</div>
<h2 class="text-2xl font-bold text-on-surface">Your Stage Details</h2>
</div>
<div class="grid grid-cols-2 gap-6">
<div class="col-span-2 md:col-span-1">
<label class="block text-sm font-bold text-on-surface-variant uppercase tracking-wider mb-2">Facility Name</label>
<input class="w-full bg-surface-container-low border-0 rounded-lg p-4 font-medium text-on-surface-variant cursor-not-allowed" readonly="" type="text" value="FreshPack Foods Ltd."/>
</div>
<div class="col-span-2 md:col-span-1">
<label class="block text-sm font-bold text-on-surface uppercase tracking-wider mb-2">Location/GPS</label>
<div class="relative">
<input class="w-full bg-surface-container-low border-0 rounded-lg p-4 pr-32 focus:ring-2 focus:ring-primary-container/40" type="text" value="Pune, Maharashtra"/>
<button class="absolute right-3 top-1/2 -translate-y-1/2 text-primary-container text-xs font-bold hover:underline flex items-center gap-1">
<span class="material-symbols-outlined text-sm">location_on</span>
                                Use My Location
                            </button>
</div>
</div>
<div class="col-span-2 md:col-span-1">
<label class="block text-sm font-bold text-on-surface uppercase tracking-wider mb-2">Date/Time</label>
<input class="w-full bg-surface-container-low border-0 rounded-lg p-4 focus:ring-2 focus:ring-primary-container/40" type="text" value="2024-03-15 14:30"/>
</div>
<div class="col-span-2 md:col-span-1">
<label class="block text-sm font-bold text-on-surface-variant uppercase tracking-wider mb-2">Current Role</label>
<div class="bg-amber-100 text-amber-700 px-4 py-3 rounded-lg text-sm font-bold flex items-center gap-2 border border-amber-200">
<span class="material-symbols-outlined text-sm">precision_manufacturing</span>
                            PROCESSING
                        </div>
</div>
<div class="col-span-2">
<label class="block text-sm font-bold text-on-surface uppercase tracking-wider mb-2">Stage Notes</label>
<textarea class="w-full bg-surface-container-low border-0 rounded-lg p-4 focus:ring-2 focus:ring-primary-container/40" placeholder="Enter details about temperature, sorting, or cleaning procedures..." rows="3"></textarea>
</div>
</div>
</section>
<!-- STEP 3: Attach Evidence -->
<section class="bg-surface-container-lowest p-8 rounded-lg shadow-sm">
<div class="flex items-center gap-3 mb-6">
<div class="w-10 h-10 rounded-full bg-primary-container/10 text-primary-container flex items-center justify-center font-bold">3</div>
<h2 class="text-2xl font-bold text-on-surface">Attach Evidence</h2>
</div>
<div class="border-2 border-dashed border-outline-variant rounded-xl p-8 flex flex-col items-center justify-center text-center hover:border-primary-container/50 transition-colors bg-surface-container-low/30 mb-6">
<span class="material-symbols-outlined text-5xl text-on-surface-variant mb-4">cloud_upload</span>
<p class="text-lg font-medium mb-1">Drag &amp; drop files or click to browse</p>
<p class="text-sm text-on-surface-variant">PDF, JPG, PNG — stored permanently on IPFS</p>
</div>
<div class="flex flex-wrap gap-3 mb-6">
<div class="flex items-center gap-2 bg-surface-container-high px-4 py-2 rounded-full border border-outline-variant/30">
<span class="material-symbols-outlined text-lg text-on-surface-variant">description</span>
<span class="text-sm font-medium">pesticide_report.pdf</span>
<button class="material-symbols-outlined text-lg text-error hover:scale-110 transition-transform">close</button>
</div>
<div class="flex items-center gap-2 bg-surface-container-high px-4 py-2 rounded-full border border-outline-variant/30">
<span class="material-symbols-outlined text-lg text-on-surface-variant">image</span>
<span class="text-sm font-medium">facility_photo.jpg</span>
<button class="material-symbols-outlined text-lg text-error hover:scale-110 transition-transform">close</button>
</div>
</div>
<div>
<label class="block text-sm font-bold text-on-surface uppercase tracking-wider mb-2">Additional Metadata (Optional)</label>
<input class="w-full bg-surface-container-low border-0 rounded-lg p-4 font-mono text-sm focus:ring-2 focus:ring-primary-container/40" placeholder='{"batch_temp": "4°C", "humidity": "65%"}' type="text"/>
</div>
</section>
<!-- STEP 4: Review & Submit -->
<section class="bg-surface-container-lowest p-8 rounded-lg shadow-sm">
<div class="flex items-center gap-3 mb-6">
<div class="w-10 h-10 rounded-full bg-primary-container/10 text-primary-container flex items-center justify-center font-bold">4</div>
<h2 class="text-2xl font-bold text-on-surface">Review &amp; Submit</h2>
</div>
<div class="bg-[#EFF6FF] rounded-xl p-6 mb-8 grid grid-cols-2 gap-y-4">
<div>
<p class="text-[10px] font-bold text-primary/60 uppercase tracking-widest mb-1">Product Batch</p>
<p class="font-mono text-sm text-primary font-bold">#CT-2024-0871</p>
</div>
<div>
<p class="text-[10px] font-bold text-primary/60 uppercase tracking-widest mb-1">Stage Action</p>
<p class="font-bold text-primary">PROCESSING</p>
</div>
<div>
<p class="text-[10px] font-bold text-primary/60 uppercase tracking-widest mb-1">Authorized Actor</p>
<p class="font-bold text-primary">FreshPack Foods Ltd.</p>
</div>
<div>
<p class="text-[10px] font-bold text-primary/60 uppercase tracking-widest mb-1">IPFS Storage Root</p>
<p class="font-mono text-[11px] text-primary truncate">Qm...8f2a773d91b</p>
</div>
</div>
<div class="flex items-center justify-between">
<div class="flex items-center gap-2 text-error font-bold text-sm">
<span class="material-symbols-outlined text-lg">warning</span>
                        MetaMask signature required
                    </div>
<div class="flex gap-4">
<button class="px-8 py-3 rounded-full text-sm font-bold border-2 border-primary-container text-primary-container hover:bg-primary-container/5 transition-all">
                            Back
                        </button>
<button class="bg-primary-container text-on-primary px-10 py-3 rounded-full text-sm font-bold shadow-lg hover:shadow-xl hover:bg-primary active:scale-95 transition-all flex items-center gap-2">
                            Submit to Blockchain
                            <span class="material-symbols-outlined text-lg">link</span>
</button>
</div>
</div>
</section>
</div>
</main>
<!-- Success Modal Mockup (Hidden by Default, can be toggled by JS in real app) -->
<div class="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-surface-container-highest/60 backdrop-blur-sm pointer-events-none opacity-0 transition-opacity">
<div class="bg-surface-container-lowest p-12 rounded-lg max-w-md w-full text-center shadow-2xl">
<div class="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
<span class="material-symbols-outlined text-5xl" style="font-variation-settings: 'FILL' 1;">check_circle</span>
</div>
<h3 class="text-3xl font-extrabold mb-2">Event Logged!</h3>
<p class="text-on-surface-variant mb-8 leading-relaxed">The processing event for batch #CT-2024-0871 has been immutably written to the blockchain.</p>
<div class="bg-surface-container-low rounded-lg p-4 mb-8">
<p class="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">Transaction Hash</p>
<p class="font-mono text-xs break-all text-primary-container">0x2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u9f01</p>
</div>
<button class="w-full bg-on-surface text-surface py-4 rounded-full font-bold">
                View on Explorer
            </button>
</div>
</div>
<!-- Decorative Bottom Gradient -->
<div class="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-tertiary to-primary-container opacity-50"></div>
` }}
    />
  );
}

export default LogEvent;
