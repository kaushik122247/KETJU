const fs = require('fs');
let content = fs.readFileSync('src/App.jsx', 'utf8');

content = content.replace(/<a([^>]+)href=\"#how-it-works\"([^>]*)>(.*?)<\/a>/g, '<Link$1to=\"/#how-it-works\"$2>$3</Link>');
content = content.replace(/<a([^>]+)href=\"#verify\"([^>]*)>(.*?)<\/a>/g, '<Link$1to=\"/verify\"$2>$3</Link>');
content = content.replace(/<a([^>]+)href=\"#farmers\"([^>]*)>(.*?)<\/a>/g, '<Link$1to=\"/farmer\"$2>$3</Link>');
content = content.replace(/<a([^>]+)href=\"#dashboard\"([^>]*)>(.*?)<\/a>/g, '<Link$1to=\"/admin\"$2>$3</Link>');

content = content.replace(/<button\s*(className=\"[^\"]*bg-blue-600[^\"]*\")>(.*?)<\/button>/s, '<Link to=\"/register\" $1>$2</Link>');

// Inject imports if not present
if (!content.includes('react-router-dom')) {
  content = `import { Routes, Route, Link } from 'react-router-dom';
import RegisterProduct from './pages/RegisterProduct';
import FarmerDashboard from './pages/FarmerDashboard';
import AdminPanel from './pages/AdminPanel';
import VerifyProduct from './pages/VerifyProduct';
import LogEvent from './pages/LogEvent';
import QRScanner from './pages/QRScanner';

` + content;
}

// Replace main content with Routes if not already
const mainSectionRegex = /<main>([\s\S]*?)<\/main>/;
const match = content.match(mainSectionRegex);
if(match && !match[1].includes('<Routes>')) {
  const landingMain = match[1];
  const newMain = `<main>
        <Routes>
          <Route path="/" element={<>
            ${landingMain}
          </>} />
          <Route path="/register" element={<RegisterProduct />} />
          <Route path="/farmer" element={<FarmerDashboard />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/verify" element={<VerifyProduct />} />
          <Route path="/log-event" element={<LogEvent />} />
          <Route path="/scanner" element={<QRScanner />} />
        </Routes>
      </main>`;
  content = content.replace(mainSectionRegex, newMain);
}

fs.writeFileSync('src/App.jsx', content);
console.log('App.jsx updated!');
