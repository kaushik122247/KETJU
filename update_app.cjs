const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
const pages = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx'));

// 1. Fix Home.jsx links
let homePath = path.join(pagesDir, 'Home.jsx');
let homeContent = fs.readFileSync(homePath, 'utf8');

// Replace "Verify Product" href
homeContent = homeContent.replace(/>Verify Product<\/a>/g, ' href="/verify">Verify Product</a>').replace(/href="#" href="/g, 'href="');

// Replace "For Farmers" href
homeContent = homeContent.replace(/>For Farmers<\/a>/g, ' href="/farmer">For Farmers</a>').replace(/href="#" href="/g, 'href="');

// Replace "Dashboard" href
homeContent = homeContent.replace(/>Dashboard<\/a>/g, ' href="/admin">Dashboard</a>').replace(/href="#" href="/g, 'href="');

// Update buttons with standard anchors or onclicks so App bounds catch them (buttons don't get caught by <a> click interceptor unless wrapped in <a>)
// Wait, my interceptor only checks a.getAttribute('href'). Let's just wrap buttons involving navigation in <a>:
// "Scan a QR Code" -> /scanner
homeContent = homeContent.replace(/<button[^>]*>[\s\S]*?Scan a QR Code[\s\S]*?<\/button>/, `<a href="/scanner" class="inline-block"><button class="bg-primary-container text-on-primary px-8 py-4 rounded-full font-bold flex items-center gap-2 shadow-xl shadow-primary/20 hover:-translate-y-1 transition-all"><span class="material-symbols-outlined">qr_code_scanner</span> Scan a QR Code</button></a>`);

// "Register Your Farm" -> /register
homeContent = homeContent.replace(/<button[^>]*>[\s\S]*?Register Your Farm[\s\S]*?<\/button>/, `<a href="/register" class="inline-block"><button class="border-2 border-primary-container text-primary-container px-8 py-4 rounded-full font-bold hover:bg-primary-container/5 transition-all">Register Your Farm</button></a>`);

// "Connect Wallet" -> /farmer
homeContent = homeContent.replace(/<button class="hidden lg:block px-5 py-2 rounded-full text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">Connect Wallet<\/button>/, `<a href="/farmer" class="hidden lg:block px-5 py-2 rounded-full text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">Connect Wallet</a>`);

// "Get Started" -> /register
homeContent = homeContent.replace(/<button class="bg-primary-container text-on-primary px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-primary\/20 scale-95 active:scale-90 transition-transform">Get Started<\/button>/, `<a href="/register" class="bg-primary-container text-on-primary px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-primary/20 scale-95 hover:scale-100 active:scale-95 transition-all inline-flex items-center justify-center">Get Started</a>`);

// "Try the Verifier" -> /verify
homeContent = homeContent.replace(/<button class="bg-white text-primary px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-white\/10 transition-all active:scale-95">[\s\S]*?Try the Verifier[\s\S]*?<\/button>/, `<a href="/verify" class="inline-flex bg-white text-primary px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-white/10 transition-all active:scale-95">Try the Verifier</a>`);

fs.writeFileSync(homePath, homeContent);

// 2. Fix Dashboards (move Home to the left-most side of navbar items)
// We already have Home next to Disconnect. We need to find that Home link, REMOVE it, 
// and place a Home link at the very start of the center <nav> or flex container.
const homeLinkTargetToRemove = /<a href="\/" class="text-sm font-semibold text-primary mr-4 hover:underline flex items-center gap-1"><span class="material-symbols-outlined text-sm">home<\/span> Home<\/a>/g;

pages.forEach(page => {
    if (page === 'Home.jsx') return; // skipping landing page

    let content = fs.readFileSync(path.join(pagesDir, page), 'utf8');

    // Remove the old right-sided home link
    content = content.replace(homeLinkTargetToRemove, '');

    // Now insert Home at the beginning of the center navigation block.
    // In FarmerDashboard, RegisterProduct, etc., the center navigation looks like:
    // <nav class="hidden md:flex items-center gap-8 h-full">
    // OR <nav class="hidden md:flex items-center gap-8 font-['Inter'] ...>
    // OR <div class="hidden md:flex gap-6 items-center">
    
    const newLeftHomeLink = `<a href="/" class="text-sm font-bold text-primary flex items-center gap-1 mr-4"><span class="material-symbols-outlined text-sm">home</span> Home</a>`;

    // Try finding the center nav container
    // Variation 1
    content = content.replace(/(class="hidden md:flex[^>]*>)/, `$1\n${newLeftHomeLink}`);
    
    // Variation 2 (if there's a nav without 'hidden')
    // let just make sure it's inserted.

    fs.writeFileSync(path.join(pagesDir, page), content);
});

console.log('Update Complete.');
