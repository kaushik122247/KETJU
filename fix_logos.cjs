const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');

const replacement = `<div class="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2"><span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">account_tree</span> KETJU</div>`;

const replacements = [
  {
    file: 'LogEvent.jsx',
    find: /<div class="text-xl font-bold tracking-tighter text-\[#1b1a25\] flex items-center gap-2"><span class="material-symbols-outlined text-primary-container" style="font-variation-settings: 'FILL' 1;">dataset<\/span> KETJU<\/div>/,
    replace: replacement
  },
  {
    file: 'VerifyProduct.jsx',
    find: /<span class="text-xl font-bold tracking-tighter text-slate-900 dark:text-white">KETJU<\/span>/,
    replace: replacement
  },
  {
    file: 'AdminPanel.jsx',
    find: /<span class="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-50">KETJU<\/span>/,
    replace: replacement
  },
  {
    file: 'FarmerDashboard.jsx',
    find: /<span class="text-xl font-black tracking-tighter text-\[#003fb7\] dark:text-\[#4d8eff\]">KETJU<\/span>/,
    replace: replacement
  },
  {
    file: 'RegisterProduct.jsx',
    find: /<span class="text-2xl font-bold tracking-tight text-blue-700 dark:text-blue-500">KETJU<\/span>/,
    replace: replacement
  },
  {
    file: 'QRScanner.jsx',
    // In QRScanner it was h1 
    find: /<h1 class="font-\['Inter'\] font-bold tracking-tight text-xl font-black text-\[#003fb7\] dark:text-\[#0254ec\]">KETJU<\/h1>/,
    replace: replacement
  }
];

let replacedCount = 0;

replacements.forEach(({ file, find, replace }) => {
  const filePath = path.join(pagesDir, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    if (find.test(content)) {
      content = content.replace(find, replace);
      fs.writeFileSync(filePath, content);
      console.log(`Updated logo in ${file}`);
      replacedCount++;
    } else {
      console.log(`Could not find target string in ${file}`);
    }
  } else {
    console.log(`File not found: ${file}`);
  }
});

console.log(`Finished replacing ${replacedCount} files.`);
