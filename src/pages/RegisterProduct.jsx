import React from 'react';

function RegisterProduct() {
  return (
    <div 
      className="ketju-page-wrapper w-full min-h-screen bg-surface dark:bg-slate-950 font-sans text-on-surface"
      dangerouslySetInnerHTML={{ __html: `<style>
        body { font-family: 'Inter', sans-serif; }
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
        .glass-nav { backdrop-filter: blur(20px); }
        input:focus, select:focus, textarea:focus { 
            outline: none; 
            border-color: rgba(2, 84, 236, 0.4) !important; 
            ring: 2px;
            ring-color: rgba(2, 84, 236, 0.1);
        }
        .custom-shadow { box-shadow: 0 48px 0 rgba(27, 26, 37, 0.06); }
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
    
<a class="text-slate-500 hover:text-slate-900 transition-colors flex items-center" href="/farmer">Dashboard</a>
<a class="text-slate-500 hover:text-slate-900 transition-colors flex items-center" href="#">My Products</a>
<a class="text-slate-500 hover:text-slate-900 transition-colors flex items-center" href="/register">Add Product</a>
<a class="text-slate-500 hover:text-slate-900 transition-colors flex items-center" href="/log-event">Log Event</a>
        
  </nav>

  <!-- Right: Actions -->
  <div class="flex-1 flex justify-end items-center gap-3 md:gap-4 mt-2 md:mt-0">
    
<div class="hidden lg:flex items-center bg-[#16A34A]/10 text-[#16A34A] px-3 py-1.5 rounded-full text-[10px] font-bold tracking-wide uppercase">
    Farmer Role
</div>
<code class="hidden lg:block text-xs font-medium text-on-surface-variant bg-surface-container-low px-2 py-1.5 rounded border border-outline-variant/20">0x71C...4e21</code>
<button class="text-sm font-semibold text-primary border border-primary px-4 py-1.5 rounded-full hover:bg-primary-container/5 transition-all">Disconnect</button>
        
  </div>
</header>
<!-- Filler to prevent content overlap -->
<div class="h-[72px] w-full"></div>
<!-- Page Header -->
<header class="pt-32 pb-20 bg-white border-none">
<div class="max-w-[800px] mx-auto px-6">
<nav class="mb-6 flex items-center gap-2 text-sm text-on-surface-variant">
<span class="hover:text-primary cursor-pointer transition-colors">Dashboard</span>
<span class="material-symbols-outlined text-sm">chevron_right</span>
<span class="font-medium text-on-surface">Register New Product</span>
</nav>
<h1 class="text-5xl font-extrabold tracking-tight text-on-surface mb-4 leading-tight">Register a New Product Batch</h1>
<p class="text-lg text-on-surface-variant leading-relaxed mb-10 max-w-2xl">
                Fill in the product details. An immutable blockchain record will be created and an NFT certificate will be minted to your wallet.
            </p>
<div class="flex items-start gap-4 p-5 bg-primary/5 border-l-4 border-primary rounded-r-xl">
<span class="material-symbols-outlined text-primary" data-icon="info">info</span>
<p class="text-sm text-on-surface-variant font-medium">
                    Your MetaMask wallet will be prompted to sign a transaction after submission. A small gas fee on Polygon will apply.
                </p>
</div>
</div>
</header>
<!-- Main Content Canvas -->
<main class="max-w-[1280px] mx-auto px-6">
<div class="max-w-[800px] mx-auto bg-surface-container-lowest rounded-lg custom-shadow p-10 mb-20">
<form class="space-y-12">
<!-- Section A: Product Information -->
<section>
<div class="flex items-center gap-3 mb-8">
<span class="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg" data-icon="inventory_2">inventory_2</span>
<h2 class="text-2xl font-bold text-on-surface">Product Information</h2>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
<div class="col-span-2">
<label class="block text-sm font-bold text-on-surface-variant mb-2 uppercase tracking-wide">Product Name*</label>
<input class="w-full bg-surface-container-low border-none rounded-lg p-4 text-on-surface placeholder:text-outline/60 transition-all" placeholder="e.g. Organic Cherry Tomatoes" type="text"/>
</div>
<div>
<label class="block text-sm font-bold text-on-surface-variant mb-2 uppercase tracking-wide">Product Category*</label>
<select class="w-full bg-surface-container-low border-none rounded-lg p-4 text-on-surface appearance-none focus:ring-0">
<option>Vegetables</option>
<option>Fruits</option>
<option>Grains</option>
<option>Dairy</option>
<option>Herbs</option>
</select>
</div>
<div>
<label class="block text-sm font-bold text-on-surface-variant mb-2 uppercase tracking-wide">Harvest Date*</label>
<input class="w-full bg-surface-container-low border-none rounded-lg p-4 text-on-surface transition-all" type="date"/>
</div>
<div class="flex items-center justify-between col-span-2 bg-surface-container p-6 rounded-lg">
<div class="flex flex-col gap-4 w-full">
<div class="flex items-center justify-between">
<div>
<p class="font-bold text-on-surface">Is this product Organic?</p>
<p class="text-xs text-on-surface-variant">Verified by organic farming standards</p>
</div>
<button class="w-12 h-6 bg-primary rounded-full relative transition-colors" type="button">
<div class="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
</button>
</div>
<div class="w-full h-px bg-outline-variant/20"></div>
<div class="flex items-center justify-between">
<div>
<p class="font-bold text-on-surface">Is this product Certified?</p>
<p class="text-xs text-on-surface-variant">Requires valid certificate upload below</p>
</div>
<button class="w-12 h-6 bg-primary rounded-full relative transition-colors" type="button">
<div class="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
</button>
</div>
</div>
</div>
<div class="col-span-2">
<label class="block text-sm font-bold text-on-surface-variant mb-2 uppercase tracking-wide">Product Description</label>
<textarea class="w-full bg-surface-container-low border-none rounded-lg p-4 text-on-surface placeholder:text-outline/60 transition-all" placeholder="Describe growing conditions, farming methods..." rows="3"></textarea>
</div>
</div>
</section>
<div class="h-px bg-surface-container-high w-full"></div>
<!-- Section B: Certification & Documentation -->
<section>
<div class="flex items-center gap-3 mb-8">
<span class="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg" data-icon="verified">verified</span>
<h2 class="text-2xl font-bold text-on-surface">Certification &amp; Documentation</h2>
</div>
<div class="mb-8">
<div class="border-2 border-dashed border-outline-variant/30 rounded-lg p-10 flex flex-col items-center justify-center text-center bg-surface-container-low hover:bg-surface-container-high transition-colors cursor-pointer group">
<span class="material-symbols-outlined text-5xl text-primary mb-4" data-icon="cloud_upload">cloud_upload</span>
<p class="text-lg font-bold text-on-surface mb-1">Drag &amp; drop your organic certification PDF or click to browse</p>
<p class="text-sm text-on-surface-variant mb-6">Supported: PDF, JPG, PNG (max 10MB). Files stored on IPFS via Web3.Storage.</p>
<button class="px-8 py-3 bg-white border border-outline-variant rounded-full text-sm font-bold text-primary hover:shadow-md transition-all active:scale-95" type="button">Browse Files</button>
</div>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
<div>
<label class="block text-sm font-bold text-on-surface-variant mb-2 uppercase tracking-wide">FSSAI License Number</label>
<input class="w-full bg-surface-container-low border-none rounded-lg p-4 text-on-surface transition-all" placeholder="12-digit FSSAI license number" type="text"/>
</div>
<div>
<label class="block text-sm font-bold text-on-surface-variant mb-2 uppercase tracking-wide">Certification Issuing Body</label>
<input class="w-full bg-surface-container-low border-none rounded-lg p-4 text-on-surface transition-all" placeholder="e.g. India Organic, USDA Organic" type="text"/>
</div>
<div class="col-span-2">
<label class="block text-sm font-bold text-on-surface-variant mb-2 uppercase tracking-wide">Certification Valid Until</label>
<input class="w-full bg-surface-container-low border-none rounded-lg p-4 text-on-surface transition-all" type="date"/>
</div>
</div>
</section>
<div class="h-px bg-surface-container-high w-full"></div>
<!-- Section C: Location Details -->
<section>
<div class="flex items-center justify-between mb-8">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg" data-icon="location_on">location_on</span>
<h2 class="text-2xl font-bold text-on-surface">Location Details</h2>
</div>
<button class="text-primary font-bold text-sm flex items-center gap-1 hover:underline transition-all" type="button">
<span class="material-symbols-outlined text-lg" data-icon="near_me">near_me</span>
                            Use My Current Location
                        </button>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
<div class="col-span-2">
<label class="block text-sm font-bold text-on-surface-variant mb-2 uppercase tracking-wide">Farm Name</label>
<input class="w-full bg-surface-container-low border-none rounded-lg p-4 text-on-surface transition-all" placeholder="e.g. Sunrise Organic Farm" type="text"/>
</div>
<div>
<label class="block text-sm font-bold text-on-surface-variant mb-2 uppercase tracking-wide">City/District</label>
<input class="w-full bg-surface-container-low border-none rounded-lg p-4 text-on-surface transition-all" placeholder="e.g. Nashik" type="text"/>
</div>
<div>
<label class="block text-sm font-bold text-on-surface-variant mb-2 uppercase tracking-wide">State</label>
<select class="w-full bg-surface-container-low border-none rounded-lg p-4 text-on-surface appearance-none focus:ring-0">
<option>Maharashtra</option>
<option>Punjab</option>
<option>Haryana</option>
<option>Karnataka</option>
</select>
</div>
<div class="col-span-2">
<label class="block text-sm font-bold text-on-surface-variant mb-2 uppercase tracking-wide">GPS Coordinates</label>
<input class="w-full bg-surface-container-low border-none rounded-lg p-4 text-on-surface transition-all" placeholder="19.9975° N, 73.7898° E — or leave blank to auto-detect" type="text"/>
</div>
</div>
</section>
<div class="h-px bg-surface-container-high w-full"></div>
<!-- Section D: Additional Photos -->
<section>
<div class="flex items-center gap-3 mb-8">
<span class="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg" data-icon="photo_camera">photo_camera</span>
<h2 class="text-2xl font-bold text-on-surface">Additional Photos</h2>
</div>
<div class="grid grid-cols-2 gap-6">
<div class="aspect-square bg-surface-container-low rounded-lg border-2 border-dashed border-outline-variant/30 flex flex-col items-center justify-center group cursor-pointer hover:bg-surface-container-high transition-all">
<div class="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-primary" data-icon="add_a_photo">add_a_photo</span>
</div>
<span class="font-bold text-on-surface">Product Photo</span>
<span class="text-xs text-on-surface-variant mt-1">High resolution, clear lighting</span>
</div>
<div class="aspect-square bg-surface-container-low rounded-lg border-2 border-dashed border-outline-variant/30 flex flex-col items-center justify-center group cursor-pointer hover:bg-surface-container-high transition-all">
<div class="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-primary" data-icon="agriculture">agriculture</span>
</div>
<span class="font-bold text-on-surface">Farm Photo</span>
<span class="text-xs text-on-surface-variant mt-1">Wide view of cultivation area</span>
</div>
</div>
</section>
</form>
</div>
</main>
<!-- BottomNavBar -->
<footer class="fixed bottom-0 w-full z-50 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 shadow-[0_-8px_30px_rgb(0,0,0,0.04)]">
<div class="flex justify-between items-center px-10 py-6 w-full max-w-[1440px] mx-auto">
<div class="flex items-center gap-2">
<div class="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 cursor-pointer" onclick="window.location.href='/'"><span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">account_tree</span> KETJU</div>
</div>
<div class="flex items-center gap-4">
<button class="text-slate-500 dark:text-slate-400 flex items-center gap-2 px-6 label-md font-bold uppercase tracking-wider hover:opacity-90 transition-opacity active:translate-y-0.5">
                    Cancel
                </button>
<button class="bg-blue-600 text-white rounded-full px-8 py-3 flex items-center gap-2 label-md font-bold uppercase tracking-wider hover:opacity-90 transition-opacity active:translate-y-0.5">
<span class="material-symbols-outlined text-lg" data-icon="verified_user">verified_user</span>
                    Register on Blockchain
                </button>
</div>
</div>
</footer>
` }}
    />
  );
}

export default RegisterProduct;
