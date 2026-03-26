import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface RecentScan {
  batchId: string;
  name: string;
  timestamp: string;
}

const STORAGE_KEY = 'ketju_recent_scans';

export default function QRScanner() {
  const navigate = useNavigate();
  const [input, setInput] = useState('');
  const [recentScans, setRecentScans] = useState<RecentScan[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try { setRecentScans(JSON.parse(stored)); } catch { /* ignore */ }
    }
  }, []);

  const saveAndNavigate = (batchId: string) => {
    const cleaned = batchId.replace('#', '').trim();
    if (!cleaned) return;
    const scan: RecentScan = { batchId: cleaned, name: cleaned, timestamp: new Date().toISOString() };
    const updated = [scan, ...recentScans.filter(s => s.batchId !== cleaned)].slice(0, 10);
    setRecentScans(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    navigate(`/verify?batch=${cleaned}`);
  };

  const clearAll = () => {
    setRecentScans([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <div className="w-full min-h-screen bg-surface font-sans text-on-surface">
      {/* Top App Bar */}
      <header className="w-full top-0 sticky z-[60] bg-[#fcf8ff]">
        <div className="flex items-center justify-between px-6 h-16 w-full">
          <button onClick={() => navigate(-1)} className="flex items-center justify-center p-2 rounded-full hover:bg-[#f0ecfb] text-primary transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <span className="font-bold text-on-surface">QR Scanner</span>
          <a href="/" className="text-sm font-semibold text-primary border border-transparent px-3 py-1.5 rounded-full hover:bg-primary/5 transition-all">Home</a>
        </div>
        <div className="bg-[#f6f2ff] h-[1px] w-full" />
      </header>

      {/* Hero Scanner */}
      <section className="relative h-[480px] flex flex-col items-center justify-center text-white overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #01123F 0%, #0254EC 100%)' }}>
        <div className="z-10 text-center px-8 mb-8">
          <h2 className="text-3xl font-black tracking-tight mb-2">Scan Product QR</h2>
          <p className="text-on-primary-container text-sm opacity-90">Point your camera at the QR code to trace its journey</p>
        </div>

        {/* Viewfinder */}
        <div className="relative z-10 w-[240px] h-[240px]">
          <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-white rounded-tl-xl" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-white rounded-tr-xl" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-white rounded-bl-xl" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-white rounded-br-xl" />
          <div className="absolute inset-2 bg-black/20 backdrop-blur-[2px] rounded-lg overflow-hidden flex items-center justify-center">
            <span className="material-symbols-outlined text-white/40 text-6xl">qr_code_2</span>
            {/* Scanner line */}
            <div className="scanner-line absolute" style={{ animation: 'scan 2.5s infinite linear' }} />
          </div>
        </div>

        <div className="z-10 mt-6 flex gap-4">
          <button className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <span className="material-symbols-outlined text-white">flash_on</span>
          </button>
          <button className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <span className="material-symbols-outlined text-white">flip_camera_ios</span>
          </button>
        </div>
      </section>

      {/* Scanner animation CSS */}
      <style>{`
        .scanner-line { height: 2px; background: #4d82ff; box-shadow: 0 0 15px #4d82ff; width: 100%; position: absolute; top: 0; left: 0; }
        @keyframes scan { 0% { top: 0; } 50% { top: 100%; } 100% { top: 0; } }
      `}</style>

      {/* Bottom Sheet */}
      <main className="relative -mt-6 z-20 bg-surface-container-lowest rounded-t-[2rem] px-6 pt-8 pb-32 min-h-[400px]">
        {/* Manual Entry */}
        <div className="space-y-4 mb-10">
          <label className="block text-center text-sm font-bold text-on-surface-variant tracking-wide">OR ENTER PRODUCT ID MANUALLY</label>
          <div className="relative">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && saveAndNavigate(input)}
              className="w-full h-14 bg-surface-container-low border-none rounded-xl px-6 font-mono text-lg text-primary focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all placeholder:text-outline-variant"
              placeholder="#CT-2024-0871"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-primary">
              <span className="material-symbols-outlined">keyboard</span>
            </span>
          </div>
          <button
            onClick={() => saveAndNavigate(input)}
            className="w-full h-14 bg-primary-container text-on-primary font-bold rounded-full flex items-center justify-center gap-2 active:scale-95 transition-all shadow-lg shadow-primary/20"
          >
            Verify Product <span className="material-symbols-outlined text-xl">arrow_forward</span>
          </button>
        </div>

        {/* Recent Scans */}
        <section className="space-y-4">
          <div className="flex justify-between items-center px-1">
            <h3 className="text-lg font-bold">Recent Scans</h3>
            {recentScans.length > 0 && (
              <button onClick={clearAll} className="text-sm font-bold text-primary">Clear all</button>
            )}
          </div>
          <div className="space-y-3">
            {recentScans.length === 0 ? (
              <p className="text-center text-on-surface-variant text-sm py-6">No recent scans yet.</p>
            ) : (
              recentScans.map(s => (
                <button
                  key={s.batchId}
                  onClick={() => saveAndNavigate(s.batchId)}
                  className="w-full flex items-center justify-between p-4 bg-surface-container-low rounded-2xl hover:bg-surface-container transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-emerald-600">
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>inventory_2</span>
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-on-surface">Batch #{s.batchId}</p>
                      <p className="text-xs font-mono text-outline">{new Date(s.timestamp).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">chevron_right</span>
                </button>
              ))
            )}
          </div>
        </section>

        <footer className="mt-10 mb-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-container-high rounded-full">
            <span className="material-symbols-outlined text-sm text-primary">verified</span>
            <p className="text-[11px] font-semibold text-on-surface-variant">All verifications are free and instant. Powered by Polygon Blockchain.</p>
          </div>
        </footer>
      </main>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-8 pt-4 bg-white/70 backdrop-blur-xl z-50 rounded-t-[32px] shadow-[0_-8px_48px_rgba(27,26,37,0.06)]">
        <button onClick={() => navigate('/scanner')} className="flex flex-col items-center justify-center bg-primary text-white rounded-full px-6 py-2 transition-all">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>qr_code_scanner</span>
          <span className="text-[12px] font-bold uppercase tracking-wider mt-1">Scanner</span>
        </button>
        <button className="flex flex-col items-center justify-center text-[#434655] px-6 py-2 hover:text-primary transition-all">
          <span className="material-symbols-outlined">keyboard</span>
          <span className="text-[12px] font-bold uppercase tracking-wider mt-1">Manual</span>
        </button>
        <button className="flex flex-col items-center justify-center text-[#434655] px-6 py-2 hover:text-primary transition-all">
          <span className="material-symbols-outlined">history</span>
          <span className="text-[12px] font-bold uppercase tracking-wider mt-1">History</span>
        </button>
      </nav>
    </div>
  );
}
