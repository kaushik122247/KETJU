const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'stitch_assets');
const outputDir = path.join(__dirname, 'src', 'pages');

const filesToConvert = [
  { name: '1_landing_page.html', comp: 'Home' },
  { name: '2_register_new_product.html', comp: 'RegisterProduct' },
  { name: '3_farmer_dashboard.html', comp: 'FarmerDashboard' },
  { name: '4_admin_panel.html', comp: 'AdminPanel' },
  { name: '5_product_verification.html', comp: 'VerifyProduct' },
  { name: '6_log_supply_chain_event.html', comp: 'LogEvent' },
  { name: '7_qr_scanner.html', comp: 'QRScanner' }
];

filesToConvert.forEach(f => {
  const htmlPath = path.join(inputDir, f.name);
  if (!fs.existsSync(htmlPath)) {
    console.log("Missing", htmlPath);
    return;
  }
  let html = fs.readFileSync(htmlPath, 'utf8');
  
  // Extract body content. The Stitch HTML generally has the visual content wrapped in a top div or body.
  // Actually, we can just take the whole HTML string and inject it. It's safe since it's just static HTML.
  // Wait, html, head, style, body tags won't work well inside a React <div>, so let's extract styles and body.
  
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  let bodyContent = bodyMatch ? bodyMatch[1] : html;
  
  // Also extract <style> blocks from head to ensure they remain
  let styleBlocks = '';
  const headMatch = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
  if (headMatch) {
     const styles = headMatch[1].match(/<style[^>]*>[\s\S]*?<\/style>/ig);
     if (styles) {
       styleBlocks = styles.join('\n');
     }
  }

  // we can just put both into the dangerouslySetInnerHTML
  const finalHtml = styleBlocks + '\n' + bodyContent;

  const jsxDoc = `import React from 'react';

function ${f.comp}() {
  return (
    <div 
      className="ketju-page-wrapper w-full min-h-screen bg-surface dark:bg-slate-950 font-sans text-on-surface"
      dangerouslySetInnerHTML={{ __html: \`${finalHtml.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\` }}
    />
  );
}

export default ${f.comp};
`;

  fs.writeFileSync(path.join(outputDir, `${f.comp}.jsx`), jsxDoc);
  console.log(`Converted ${f.comp}.jsx`);
});
