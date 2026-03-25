const fs = require('fs');
const path = require('path');

const srcFile = path.join(__dirname, 'stitch_assets', '1_landing_page.html');
const targetFile = path.join(__dirname, 'src', 'pages', 'Home.jsx');

let htmlContent = fs.readFileSync(srcFile, 'utf8');

// The original file is a full HTML page. We need to extract the styles and body content.
// Basically, we can extract from <style> to </style> and from <body> to </body>.
const styleMatch = htmlContent.match(/<style>([\s\S]*?)<\/style>/);
const bodyMatch = htmlContent.match(/<body[^>]*>([\s\S]*?)<\/body>/);

let innerHTML = '';
if (styleMatch) {
    // Add custom material-symbols-outlined overriding to fix weights
    innerHTML += `<style>\n${styleMatch[1]}\n.material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }\n</style>\n`;
}
if (bodyMatch) {
    let bodyContent = bodyMatch[1];
    
    // Convert class to className is NOT needed for dangerouslySetInnerHTML, it runs raw HTML!
    // Just inject the body content
    innerHTML += bodyContent;
}

// NOW safely replace links:
innerHTML = innerHTML.replace(/href="#"([^>]*)>How It Works/g, 'href="#how-it-works"$1>How It Works');
innerHTML = innerHTML.replace(/href="#"([^>]*)>Verify/g, 'href="/verify"$1>Verify');
innerHTML = innerHTML.replace(/href="#"([^>]*)>For Farmers/g, 'href="/farmer"$1>For Farmers');
innerHTML = innerHTML.replace(/href="#"([^>]*)>Dashboard/g, 'href="/admin"$1>Dashboard');

// Specific Buttons (replace exact string matches to avoid regex greed)
innerHTML = innerHTML.replace(
    '<button class="hidden lg:block px-5 py-2 rounded-full text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">Connect Wallet</button>',
    '<a href="/farmer" class="hidden lg:block"><button class="px-5 py-2 rounded-full text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors w-full cursor-pointer">Connect Wallet</button></a>'
);

innerHTML = innerHTML.replace(
    '<button class="bg-primary-container text-on-primary px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-primary/20 scale-95 hover:scale-100 active:scale-90 transition-all">Get Started</button>',
    '<a href="/register" class="inline-block"><button class="bg-primary-container text-on-primary px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-primary/20 scale-95 hover:scale-100 active:scale-95 transition-all w-full cursor-pointer">Get Started</button></a>'
);
// Also for "Get Started" without hover:scale-100 (if it varied)
innerHTML = innerHTML.replace(
    '<button class="bg-primary-container text-on-primary px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-primary/20 scale-95 active:scale-90 transition-transform">Get Started</button>',
    '<a href="/register" class="inline-block"><button class="bg-primary-container text-on-primary px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-primary/20 scale-95 active:scale-90 transition-transform cursor-pointer">Get Started</button></a>'
);

innerHTML = innerHTML.replace(
    '<button class="bg-primary-container text-on-primary px-8 py-4 rounded-full font-bold flex items-center gap-2 shadow-xl shadow-primary/20 hover:-translate-y-1 transition-all">',
    '<a href="/scanner" class="inline-block"><button class="bg-primary-container text-on-primary px-8 py-4 rounded-full font-bold flex items-center gap-2 shadow-xl shadow-primary/20 hover:-translate-y-1 transition-all cursor-pointer">'
).replace(
    'Scan a QR Code\n                        </button>',
    'Scan a QR Code\n                        </button></a>'
);

innerHTML = innerHTML.replace(
    '<button class="border-2 border-primary-container text-primary-container px-8 py-4 rounded-full font-bold hover:bg-primary-container/5 transition-all">',
    '<a href="/register" class="inline-block"><button class="border-2 border-primary-container text-primary-container px-8 py-4 rounded-full font-bold hover:bg-primary-container/5 transition-all cursor-pointer">'
).replace(
    'Register Your Farm\n                        </button>',
    'Register Your Farm\n                        </button></a>'
);

innerHTML = innerHTML.replace(
    '<button class="bg-white text-primary px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-white/10 transition-all active:scale-95">',
    '<a href="/verify" class="inline-block"><button class="bg-white text-primary px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-white/10 transition-all active:scale-95 cursor-pointer">'
).replace(
    'Try the Verifier\n                    </button>',
    'Try the Verifier\n                    </button></a>'
);

// Footer links
innerHTML = innerHTML.replace(/>Traceability<\/a>/, ' href="/log-event">Traceability</a>').replace(/href="#" href="/g, 'href="');
innerHTML = innerHTML.replace(/>Verification<\/a>/, ' href="/verify">Verification</a>').replace(/href="#" href="/g, 'href="');
innerHTML = innerHTML.replace(/>Farmers Portal<\/a>/, ' href="/farmer">Farmers Portal</a>').replace(/href="#" href="/g, 'href="');

// Fix global double Ketju in Home (just ensure KETJU text is present)
innerHTML = innerHTML.replace(
    '<span class="material-symbols-outlined text-[#003fb7] text-2xl" style="font-variation-settings: \'FILL\' 1;">eco</span>',
    '<div class="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2"><span class="material-symbols-outlined text-primary" style="font-variation-settings: \'FILL\' 1;">account_tree</span> KETJU</div>'
);
// Remove the older text-based KETJU if nearby
innerHTML = innerHTML.replace(
    /<div class="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">[\s\S]*?account_tree<\/span> KETJU<\/div>\s*<div class="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">KETJU<\/div>/,
    '<div class="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2"><span class="material-symbols-outlined text-primary" style="font-variation-settings: \'FILL\' 1;">account_tree</span> KETJU</div>'
);

const jsxContent = `import React from 'react';

function Home() {
  return (
    <div 
      className="ketju-page-wrapper w-full min-h-screen bg-surface dark:bg-slate-950 font-sans text-on-surface"
      dangerouslySetInnerHTML={{ __html: \`${innerHTML.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\` }}
    />
  );
}

export default Home;
`;

fs.writeFileSync(targetFile, jsxContent);
console.log('Restored Home.jsx safely.');
