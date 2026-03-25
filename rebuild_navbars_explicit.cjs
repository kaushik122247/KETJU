const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
const pages = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx'));

pages.forEach(page => {
    if (page === 'Home.jsx') return;
    
    let content = fs.readFileSync(path.join(pagesDir, page), 'utf8');

    // Remove the old header/nav completely and replace with unified one.
    // Instead of parsing perfectly, let's just define them per-page since there are only 6 pages!
    
    let centerLinks = '';
    let rightActions = '';

    if (page === 'AdminPanel.jsx') {
        centerLinks = `
<a class="text-slate-500 hover:text-slate-900 transition-colors duration-200" href="/admin">Dashboard</a>
<a class="text-slate-500 hover:text-slate-900 transition-colors duration-200" href="#">Governance</a>
<a class="text-slate-500 hover:text-slate-900 transition-colors duration-200" href="#">Audit Logs</a>
        `;
        rightActions = `
<div class="hidden lg:flex items-center gap-2 px-3 py-1 bg-error-container text-on-error-container rounded-full text-xs font-bold">
    <span class="material-symbols-outlined text-sm">lock</span>
    Admin
</div>
<button class="px-4 py-1.5 border-1.5 border-primary-container text-primary-container rounded-full text-sm font-semibold hover:bg-primary-container/5 transition-all">Disconnect</button>
        `;
    } 
    else if (page === 'VerifyProduct.jsx') {
        centerLinks = `
<a class="text-slate-500 hover:text-slate-900 transition-colors" href="/verify">Trace</a>
<a class="text-slate-500 hover:text-slate-900 transition-colors" href="#">Provenance</a>
<a class="text-slate-500 hover:text-slate-900 transition-colors" href="#">Insight</a>
<a class="text-slate-500 hover:text-slate-900 transition-colors" href="#">Network</a>
        `;
        rightActions = `
<button class="bg-white border-1.5 border-primary-container text-primary-container px-5 py-2 rounded-full text-sm font-semibold hover:bg-surface-container transition-all flex items-center gap-2" onclick="window.location.reload()">
    <span class="material-symbols-outlined text-sm">search</span>
    Verify Another Product
</button>
        `;
    }
    else if (page === 'FarmerDashboard.jsx' || page === 'RegisterProduct.jsx' || page === 'QRScanner.jsx') {
        centerLinks = `
<a class="text-slate-500 hover:text-slate-900 transition-colors flex items-center" href="/farmer">Dashboard</a>
<a class="text-slate-500 hover:text-slate-900 transition-colors flex items-center" href="#">My Products</a>
<a class="text-slate-500 hover:text-slate-900 transition-colors flex items-center" href="/register">Add Product</a>
<a class="text-slate-500 hover:text-slate-900 transition-colors flex items-center" href="/log-event">Log Event</a>
        `;
        rightActions = `
<div class="hidden lg:flex items-center bg-[#16A34A]/10 text-[#16A34A] px-3 py-1.5 rounded-full text-[10px] font-bold tracking-wide uppercase">
    Farmer Role
</div>
<code class="hidden lg:block text-xs font-medium text-on-surface-variant bg-surface-container-low px-2 py-1.5 rounded border border-outline-variant/20">0x71C...4e21</code>
<button class="text-sm font-semibold text-primary border border-primary px-4 py-1.5 rounded-full hover:bg-primary-container/5 transition-all">Disconnect</button>
        `;
    }
    else if (page === 'LogEvent.jsx') {
        centerLinks = `
<a class="text-slate-500 hover:text-slate-900 transition-colors duration-200" href="/farmer">Dashboard</a>
<a class="text-slate-500 hover:text-slate-900 transition-colors duration-200" href="#">My Products</a>
<a class="text-slate-500 hover:text-slate-900 transition-colors duration-200" href="/register">Add Product</a>
<a class="text-slate-500 hover:text-slate-900 transition-colors duration-200 font-bold text-primary" href="/log-event">Log Event</a>
        `;
        rightActions = `
<div class="hidden lg:flex bg-amber-100 text-amber-700 px-3 py-1.5 rounded-full text-[10px] font-bold items-center border border-amber-200 uppercase">
    Processor
</div>
<code class="hidden lg:block bg-surface-container text-on-surface-variant px-3 py-1.5 rounded-full text-[10px] font-mono border border-outline-variant/20">0x7a3b...2f90</code>
<button class="bg-primary-container text-on-primary px-6 py-1.5 rounded-full text-sm font-semibold hover:bg-primary transition-all shadow-sm">
    Disconnect
</button>
        `;
    }

    const unifiedHeader = `<!-- Unified TopNavBar -->
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
    ${centerLinks}
  </nav>

  <!-- Right: Actions -->
  <div class="flex-1 flex justify-end items-center gap-3 md:gap-4 mt-2 md:mt-0">
    ${rightActions}
  </div>
</header>
<!-- Filler to prevent content overlap -->
<div class="h-[72px] w-full"></div>`;

    // Strip out the old header entirely
    // FarmerDashboard, RegisterProduct, QRScanner, VerifyProduct: `<header ...> ... </header>`
    // AdminPanel: `<nav class="fixed top-0 ...> ... </nav>`
    // LogEvent: `<header ...><nav>...</nav></header>`

    if (content.includes('<!-- TopNavBar -->')) {
        content = content.replace(/<!-- TopNavBar -->[\s\S]*?(?:<\/header>|<\/nav>)/, unifiedHeader);
    } else if (content.includes('<!-- Top Navigation Bar -->')) {
        content = content.replace(/<!-- Top Navigation Bar -->[\s\S]*?(?:<\/header>|<\/nav>)/, unifiedHeader);
    } else {
        // Fallback for VerifyProduct which might have lost its <!-- TopNavBar --> tag?
        content = content.replace(/<header class="fixed top-0[^>]*>[\s\S]*?(?:<\/header>)/, unifiedHeader);
    }

    fs.writeFileSync(path.join(pagesDir, page), content);
});

console.log('Explicit Unified Navbars Done.');
