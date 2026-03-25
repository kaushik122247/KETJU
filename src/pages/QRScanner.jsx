import React from 'react';

function QRScanner() {
  return (
    <div 
      className="ketju-page-wrapper w-full min-h-screen bg-surface dark:bg-slate-950 font-sans text-on-surface"
      dangerouslySetInnerHTML={{ __html: `<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .scanner-line {
            height: 2px;
            background: #4d82ff;
            box-shadow: 0 0 15px #4d82ff;
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            animation: scan 2.5s infinite linear;
        }
        @keyframes scan {
            0% { top: 0; }
            50% { top: 100%; }
            100% { top: 0; }
        }
        .pulse {
            animation: pulse 1.5s infinite;
        }
        @keyframes pulse {
            0% { opacity: 1; }
            50% { opacity: 0.3; }
            100% { opacity: 1; }
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>

<!-- TopAppBar -->
<header class="w-full top-0 sticky z-[60] bg-[#fcf8ff] dark:bg-[#1b1a25]">
<div class="flex items-center justify-between px-6 h-16 w-full">
<button class="flex items-center justify-center p-2 rounded-full active:scale-95 duration-200 hover:bg-[#f0ecfb] text-[#0254EC]">
<span class="material-symbols-outlined" data-icon="arrow_back">arrow_back</span>
</button>

<div class="w-10"></div> <!-- Spacer for symmetry -->
</div>
<div class="bg-[#f6f2ff] dark:bg-[#2d2c3d] h-[1px] w-full"></div>
</header>
<!-- Hero Scanner Section -->
<section class="relative h-[486px] flex flex-col items-center justify-center text-white overflow-hidden" style="background: linear-gradient(135deg, #01123F 0%, #0254EC 100%);">
<!-- Decorative Background Pattern -->
<div class="absolute inset-0 opacity-10 pointer-events-none" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAIEEoJO0VX4dxGx391x7w8WreTpq4u8R9T8GIx3nMcjo2Kew5jhVirf6L20rEaLQBK0O4_h1zDjGVZCrQQ2ScUM-j36kbRpNXdZI8MncchwkVK4AkYrfplyVU2MeRjU3z04VBzcFGgPMGyQVDc54yifvv0CnYivaesFJvifZXgkmCQNhLGrZ0ybD8ygwKxZQeNv5GbESNJ0TAnPLEvrri9seyn6Ct2rIOeAgJ-mvi_3fW6i2jCpT4m3EOYvmcFRBdooUw3DKXa-io');"></div>
<div class="z-10 text-center px-8 mb-8">
<h2 class="text-3xl font-black tracking-tight mb-2">Scan Product QR</h2>
<p class="text-on-primary-container text-sm opacity-90">Point your camera at the QR code to trace its journey</p>
</div>
<!-- Camera Viewfinder -->
<div class="relative z-10 w-[240px] h-[240px]">
<!-- Corner Brackets -->
<div class="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-white rounded-tl-xl"></div>
<div class="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-white rounded-tr-xl"></div>
<div class="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-white rounded-bl-xl"></div>
<div class="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-white rounded-br-xl"></div>
<!-- Scanning Area -->
<div class="absolute inset-2 bg-black/20 backdrop-blur-[2px] rounded-lg overflow-hidden flex items-center justify-center">
<img alt="Product being scanned" class="w-full h-full object-cover opacity-60" data-alt="close-up view through a smartphone camera lens focusing on a generic product label with a blurred QR code in a brightly lit grocery store" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArovTAPvCR5JMRxIWB0K9VRy3wfLOpRc-9AYUW7HPsKEEajNPMl22jXy1I66O6p_K3k2jxIAdO04vOXWKkS3UjljV7Usi-UkASaMVBXqq1tUBVCWBlIaTW_ibNeyoVeuVvoiAtt16r1z18xKQThg2e9vKvQjs2Utz12qsMaZW30EhFuC9p4YWTwFNZ3IuxrYnuCQCrg8PAqbLUkWqZuQqxwULGP54XEUfN0yFTcyaO4jWkRs2zysYrd6Ugwk6tCFk3xAdRNJB9M3Q"/>
<div class="scanner-line"></div>
</div>
</div>
<div class="z-10 mt-4 flex flex-col items-center gap-6">
<div class="flex items-center gap-2">
<div class="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 cursor-pointer" onclick="window.location.href='/'"><span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">account_tree</span> KETJU</div>
</div>
<div class="flex gap-4">
<button class="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-full border border-white/20 active:scale-90 transition-transform">
<span class="material-symbols-outlined text-white" data-icon="flash_on">flash_on</span>
</button>
<button class="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-full border border-white/20 active:scale-90 transition-transform">
<span class="material-symbols-outlined text-white" data-icon="flip_camera_ios">flip_camera_ios</span>
</button>
</div>
</div>
</section>
<!-- Bottom Sheet Content -->
<main class="relative -mt-6 z-20 bg-surface-container-lowest rounded-t-[2rem] px-6 pt-8 pb-32 min-h-[442px]">
<!-- Manual Entry Section -->
<div class="space-y-4 mb-10">
<label class="block text-center text-sm font-bold text-on-surface-variant tracking-wide">OR ENTER PRODUCT ID MANUALLY</label>
<div class="relative group">
<input class="w-full h-14 bg-surface-container-low border-none rounded-xl px-6 font-mono text-lg text-primary focus:ring-2 focus:ring-primary/40 transition-all placeholder:text-outline-variant" placeholder="#CT-2024-0871" type="text"/>
<span class="absolute right-4 top-1/2 -translate-y-1/2 text-primary">
<span class="material-symbols-outlined" data-icon="keyboard">keyboard</span>
</span>
</div>
<button class="w-full h-14 bg-primary-container text-on-primary font-bold rounded-full flex items-center justify-center gap-2 active:scale-95 transition-all shadow-lg shadow-primary/20">
                Verify Product <span class="material-symbols-outlined text-xl" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
<!-- Recent Scans -->
<section class="space-y-4">
<div class="flex justify-between items-center px-1">
<h3 class="text-lg font-bold">Recent Scans</h3>
<button class="text-sm font-bold text-primary">Clear all</button>
</div>
<div class="space-y-3">
<!-- Item 1 -->
<div class="flex items-center justify-between p-4 bg-surface-container-low rounded-2xl active:bg-surface-container transition-colors group">
<div class="flex items-center gap-4">
<a href="/" class="text-sm font-semibold text-primary border border-transparent px-4 py-1.5 rounded-full hover:bg-primary/5 transition-all">Home</a>

<div class="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#10B981]">

</div>
<div>
<p class="font-bold text-on-surface">Organic Cherry Tomatoes</p>
<p class="text-xs font-mono text-outline uppercase">#CT-2024-0912</p>
</div>
</div>
<span class="material-symbols-outlined text-outline group-hover:text-primary transition-colors" data-icon="chevron_right">chevron_right</span>
</div>
<!-- Item 2 -->
<div class="flex items-center justify-between p-4 bg-surface-container-low rounded-2xl active:bg-surface-container transition-colors group">
<div class="flex items-center gap-4">
<div class="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#10B981]">
<span class="material-symbols-outlined" data-icon="nutrition" style="font-variation-settings: 'FILL' 1;">nutrition</span>
</div>
<div>
<p class="font-bold text-on-surface">Green Spinach</p>
<p class="text-xs font-mono text-outline uppercase">#CT-2024-0844</p>
</div>
</div>
<span class="material-symbols-outlined text-outline group-hover:text-primary transition-colors" data-icon="chevron_right">chevron_right</span>
</div>
<!-- Item 3 -->
<div class="flex items-center justify-between p-4 bg-surface-container-low rounded-2xl active:bg-surface-container transition-colors group">
<div class="flex items-center gap-4">
<div class="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#10B981]">
<span class="material-symbols-outlined" data-icon="garden_cart" style="font-variation-settings: 'FILL' 1;">garden_cart</span>
</div>
<div>
<p class="font-bold text-on-surface">Organic Broccoli</p>
<p class="text-xs font-mono text-outline uppercase">#CT-2024-1002</p>
</div>
</div>
<span class="material-symbols-outlined text-outline group-hover:text-primary transition-colors" data-icon="chevron_right">chevron_right</span>
</div>
</div>
</section>
<!-- Footer Info -->
<footer class="mt-10 mb-6 text-center">
<div class="inline-flex items-center gap-2 px-4 py-2 bg-surface-container-high rounded-full">
<span class="material-symbols-outlined text-sm text-primary" data-icon="verified">verified</span>
<p class="text-[11px] font-semibold text-on-surface-variant">All verifications are free and instant. Powered by Polygon Blockchain.</p>
</div>
</footer>
</main>
<!-- BottomNavBar -->
<nav class="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-8 pt-4 bg-[#ffffff]/70 dark:bg-[#1b1a25]/70 backdrop-blur-xl z-50 rounded-t-[32px] shadow-[0_-8px_48px_rgba(27,26,37,0.06)]">
<a class="flex flex-col items-center justify-center bg-[#0254ec] text-white rounded-full px-6 py-2 active:scale-90 duration-300" href="#">
<span class="material-symbols-outlined" data-icon="qr_code_scanner" style="font-variation-settings: 'FILL' 1;">qr_code_scanner</span>
<span class="font-['Inter'] text-[12px] font-bold uppercase tracking-wider mt-1">Scanner</span>
</a>
<a class="flex flex-col items-center justify-center text-[#434655] dark:text-[#c3c5d8] px-6 py-2 hover:text-[#0254ec] transition-all active:scale-90 duration-300" href="#">
<span class="material-symbols-outlined" data-icon="keyboard">keyboard</span>
<span class="font-['Inter'] text-[12px] font-bold uppercase tracking-wider mt-1">Manual Entry</span>
</a>
<a class="flex flex-col items-center justify-center text-[#434655] dark:text-[#c3c5d8] px-6 py-2 hover:text-[#0254ec] transition-all active:scale-90 duration-300" href="#">
<span class="material-symbols-outlined" data-icon="history">history</span>
<span class="font-['Inter'] text-[12px] font-bold uppercase tracking-wider mt-1">History</span>
</a>
</nav>
<!-- Optional Success Overlay (Hidden by default, shown for UI demonstration) -->
<!-- Remove "hidden" class to see the success state mentioned in the task -->
<div class="hidden fixed inset-0 z-[100] flex flex-col">
<div class="flex-grow bg-primary flex flex-col items-center justify-center text-white px-8 text-center" style="background: linear-gradient(135deg, #0254EC 0%, #01123F 100%);">
<div class="w-24 h-24 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center mb-6">
<span class="material-symbols-outlined text-6xl text-white" data-icon="check_circle" style="font-variation-settings: 'FILL' 1;">check_circle</span>
</div>
<p class="text-on-primary-container font-bold tracking-widest uppercase mb-2">Success</p>
<h2 class="text-4xl font-black mb-4">Product Found!</h2>
<div class="bg-white/10 backdrop-blur-md p-6 rounded-3xl w-full max-w-sm space-y-4">
<div>
<p class="text-3xl font-bold">Organic Cherry Tomatoes</p>
<p class="font-mono text-sm opacity-60">Batch #CT-2024-0871</p>
</div>
<div class="flex justify-center">
<span class="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm font-bold">
🌿 Organic Certified
                    </span>
</div>
</div>
</div>
<div class="bg-surface-container-lowest rounded-t-[2rem] px-6 pt-8 pb-10 space-y-8">
<!-- Stage Progress Bar -->
<div class="space-y-4">
<div class="flex justify-between items-end">
<span class="text-xs font-bold text-outline uppercase tracking-wider">Supply Chain Progress</span>
<span class="px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed rounded-full text-[10px] font-black uppercase">Distribution</span>
</div>
<div class="relative h-2 w-full bg-surface-container-high rounded-full overflow-hidden">
<div class="absolute h-full w-[75%] bg-primary rounded-full"></div>
</div>
<div class="flex justify-between text-[10px] font-bold text-on-surface-variant/60 uppercase">
<span>Farm</span>
<span>Processing</span>
<span class="text-primary">Logistics</span>
<span>Retail</span>
</div>
</div>
<div class="space-y-3">
<button class="w-full h-14 bg-primary-container text-on-primary font-bold rounded-full flex items-center justify-center gap-2 shadow-xl shadow-primary/20">
                    View Full Product Journey <span class="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
</button>
<button class="w-full h-14 border-2 border-primary-container text-primary font-bold rounded-full flex items-center justify-center gap-2">
                    Scan Another Product
                </button>
</div>
</div>
</div>
` }}
    />
  );
}

export default QRScanner;
