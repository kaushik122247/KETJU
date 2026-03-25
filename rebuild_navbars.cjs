const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
const pages = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx'));

pages.forEach(page => {
    if (page === 'Home.jsx') return; // Home has a different style landing nav, but user said "all the navbar... should be similar". Actually wait, they might mean all dashboard navbars. I will leave Home alone since it's a landing page.
    
    let content = fs.readFileSync(path.join(pagesDir, page), 'utf8');

    // Find the header or nav that acts as the top bar
    let topBarRegex = /<header[^>]*>([\s\S]*?)<\/header>/;
    let match = content.match(topBarRegex);
    if (!match) {
        topBarRegex = /<nav class="fixed top-0[^>]*>([\s\S]*?)<\/nav>/;
        match = content.match(topBarRegex);
    }
    // Also log event uses `<header ...><nav ...> ...</nav></header>`
    if (page === 'LogEvent.jsx') {
        topBarRegex = /<header class="bg-\[#fcf8ff\] sticky top-\[72px\] z-50">([\s\S]*?)<\/header>/;
        match = content.match(topBarRegex);
    }

    if (match) {
        const fullHeader = match[0];
        const innerHeader = match[1];

        // Extract center links. They are usually inside a `<nav class="hidden md:flex...` or `<div class="hidden md:flex...`
        let centerLinks = '';
        let linksMatch = innerHeader.match(/(?:<nav|<div)[^>]*hidden md:flex[^>]*>([\s\S]*?)(?:<\/nav>|<\/div>)/);
        if (linksMatch) {
            centerLinks = linksMatch[1];
            // Remove the home link from center links since we will standardize it
            centerLinks = centerLinks.replace(/<a href="\/"[^>]*>[\s\S]*?Home<\/a>/gi, '');
            
            // Standardize text size and styling of all extracted links
            // e.g. `<a class="text-blue-600 font-semibold border-b-2" href="#">Trace</a>` -> Ensure it has `text-sm font-semibold`
            // Instead of parsing, we can just apply a wrapper class that forces typography, or append classes.
            centerLinks = centerLinks.replace(/<a class="([^"]*)"/g, (m, c) => {
                // remove existing text-* size classes
                let newC = c.replace(/text-\w+/g, '');
                return `<a class="${newC} text-sm hover:opacity-80 transition-opacity"`;
            });
        }

        // Extract right actions. Usually inside `<div class="flex items-center gap-...` or `<button...`
        // Finding the right-side actions is tricky because of different DOM.
        // Let's grab everything that looks like a button or badge that isn't the logo or center links.
        let rightActions = '';
        if (page === 'VerifyProduct.jsx') {
            let btnMatch = innerHeader.match(/<button[^>]*>[\s\S]*?Verify Another Product[\s\S]*?<\/button>/);
            if (btnMatch) rightActions = btnMatch[0];
        } else if (page === 'AdminPanel.jsx') {
            let actMatch = innerHeader.match(/<div class="flex items-center gap-3">([\s\S]*?)<\/div>\s*<\/nav>/);
            // but AdminPanel header is huge. 
            // Actually, let's just use exact regexes for known pages
        } else if (page === 'FarmerDashboard.jsx' || page === 'RegisterProduct.jsx' || page === 'QRScanner.jsx') {
            let actMatch = innerHeader.match(/<div class="flex items-center gap-4">([\s\S]*?)<\/div>/);
            if (actMatch) rightActions = actMatch[1];
        } else if (page === 'LogEvent.jsx') {
            let actMatch = innerHeader.match(/<div class="flex items-center gap-3">([\s\S]*?)<\/div>/);
            if (actMatch) rightActions = actMatch[1];
        }

        // Cleanup Right Actions: Remove Home links if they are stuck in actions
        rightActions = rightActions.replace(/<a href="\/"[^>]*>[\s\S]*?Home<\/a>/gi, '');

        if (page === 'AdminPanel.jsx') { // custom action grab
            rightActions = `
            <div class="flex items-center gap-2 px-3 py-1 bg-error-container text-on-error-container rounded-full text-sm font-bold">
                <span class="material-symbols-outlined text-sm">lock</span>
                🔐 Admin
            </div>
            <button class="px-4 py-1.5 border-1.5 border-primary-container text-primary-container rounded-full text-sm font-semibold hover:bg-primary-container/5 transition-all">Disconnect</button>
            `;
        }

        const unifiedHeader = `
<!-- Unified TopNavBar -->
<header class="fixed top-0 w-full z-[100] bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 flex justify-between items-center h-[72px] px-8 shadow-sm">
  <!-- Left: Logo -->
  <div class="flex-1 flex justify-start">
      <div class="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity" onclick="window.location.href='/'">
        <span class="material-symbols-outlined text-primary text-2xl" style="font-variation-settings: 'FILL' 1;">account_tree</span> KETJU
      </div>
  </div>

  <!-- Center: Nav Items -->
  <nav class="hidden md:flex flex-1 justify-center items-center gap-8 text-sm font-semibold">
    <a href="/" class="text-sm font-bold text-primary flex items-center gap-1 hover:opacity-80 transition-opacity"><span class="material-symbols-outlined text-sm">home</span> Home</a>
    ${centerLinks}
  </nav>

  <!-- Right: Actions -->
  <div class="flex-1 flex justify-end items-center gap-4 text-sm font-semibold">
    ${rightActions}
  </div>
</header>
`;

        content = content.replace(fullHeader, unifiedHeader);
        
        fs.writeFileSync(path.join(pagesDir, page), content);
    }
});

console.log('Unified navbars applied.');
