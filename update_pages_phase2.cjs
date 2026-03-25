const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
const pages = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx'));

const logoStr = `<div class="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 cursor-pointer" onclick="window.location.href='/'"><span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">account_tree</span> KETJU</div>`;
const homeLinkStr = `<a href="/" class="text-sm font-semibold text-primary mr-4 hover:underline flex items-center gap-1"><span class="material-symbols-outlined text-sm">home</span> Home</a>`;

pages.forEach(page => {
    let content = fs.readFileSync(path.join(pagesDir, page), 'utf8');

    // Remove "KETJU Pro" blocks:
    content = content.replace(/<div class="mb-6 px-4">[\s\S]*?<h3[^>]*>KETJU Pro<\/h3>[\s\S]*?Edition<\/p>[\s\S]*?<\/div>/g, '');
    
    // Add KETJU logo at the top left header if it's missing (where the eco icon was):
    // Our previous script left: `<header ...><div class="flex items-center gap-2">\n\n</div>`
    content = content.replace(/(<header[^>]*>[\s\S]*?<div class="flex items-center gap-2">)[\s\S]*?(<\/div>)/, `$1\n${logoStr}\n$2`);

    // Add Home link before Disconnect button
    content = content.replace(/(<button[^>]*>[\s\n]*Disconnect[\s\n]*<\/button>)/, `${homeLinkStr} $1`);
    
    fs.writeFileSync(path.join(pagesDir, page), content);
});

console.log('Finished updating phase 2');
