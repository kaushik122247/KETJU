const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
const pages = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx'));

const logoStr = `<div class="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 cursor-pointer" onclick="window.location.href='/'"><span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">account_tree</span> KETJU</div>`;

pages.forEach(page => {
    let content = fs.readFileSync(path.join(pagesDir, page), 'utf8');

    // 1. Remove duplicate Home links
    // Find my newly injected home link:
    const myHomeLink = `<a href="/" class="text-sm font-semibold text-primary mr-4 hover:underline flex items-center gap-1"><span class="material-symbols-outlined text-sm">home</span> Home</a>`;
    
    // There was an old Home link like: <a href="/" class="text-sm font-semibold text-primary border border-transparent px-4 py-1.5 rounded-full hover:bg-primary/5 transition-all">Home</a>
    // Let's remove ANY home link that comes right before our `myHomeLink` or right near it.
    // Actually, let's just do a regex to delete `<a href="/">Home</a>` variations if they are right before our `myHomeLink`.
    content = content.replace(/<a[^>]*href="\/"[^>]*>\s*Home\s*<\/a>\s*(?=<a href="\/" class="text-sm font-semibold text-primary)/g, '');

    // 2. Fix the missing KETJU Logo on other pages.
    // In my previous script I did: `content.replace(/(<header[^>]*>[\s\S]*?<div class="flex items-center gap-2">)[\s\S]*?(<\/div>)/, ...)`
    // But AdminPanel or others might have had an empty header or different div.
    // Let's specifically check if the page has `logoStr` replacing old KETJU. 
    // Wait, earlier I did `fix_logos.cjs` which put `account_tree KETJU` into standard navbar.
    // Then `fix_double_ketju.cjs` REMOVED it from the secondary navbar.
    // Does AdminPanel have a `<header class="docked full-width"`?
    // Let's force replace the first flex container in the header with our logo.
    
    // Let's search for `<header ...>` and replace the first flex div stuff...
    // Actually, instead of guessing, let's just make sure there is a logo.
    if (!content.includes('account_tree</span> KETJU</div>') && content.includes('<header')) {
        // If there's a header but no logo, find the first empty-ish div inside header
        content = content.replace(/(<header[^>]*>\s*<div[^>]*>)\s*(?:<\/div>)/, `$1\n${logoStr}\n</div>`);
    }

    // Replace the Leaf "potted_plant" icon in the Farmer Role chip if the user wants no leaf? "this image icon of leaf that i gave the second image".
    // 

    fs.writeFileSync(path.join(pagesDir, page), content);
});

console.log('Finished cleanup phase 3');
