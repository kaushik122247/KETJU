import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="ketju-page-wrapper w-full min-h-screen bg-surface dark:bg-slate-950 font-sans text-on-surface">
      <Navbar />
      
      <main>
        {/* Section 1: Hero Section */}
        <section className="relative bg-white pt-8 pb-24 md:pt-12 md:pb-40 overflow-hidden mt-[72px]">
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">
            
            {/* Left Content */}
            <div className="w-full md:w-[55%]">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-sm font-bold mb-8">
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
                Blockchain Verified Supply Chain
              </div>
              
              <h1 className="text-[40px] md:text-[56px] leading-[1.1] font-extrabold text-[#393F49] tracking-tight mb-6">
                From Farm to Consumer, Every Step Verified
              </h1>
              
              <p className="text-[18px] text-[#25242F] leading-relaxed mb-10 max-w-xl opacity-80">
                KETJU uses Polygon blockchain to create an immutable, tamper-proof record of your food's journey. Scan any QR code on packaging to instantly verify organic certification and supply chain authenticity.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-16">
                <Link to="/scanner" className="inline-block">
                  <button className="bg-primary-container text-on-primary px-8 py-4 rounded-full font-bold flex items-center gap-2 shadow-xl shadow-primary/20 hover:-translate-y-1 transition-all cursor-pointer border-none">
                    <span className="material-symbols-outlined">qr_code_scanner</span>
                    Scan a QR Code
                  </button>
                </Link>
                <Link to="/register" className="inline-block">
                  <button className="border-2 border-primary-container text-primary-container px-8 py-4 rounded-full font-bold hover:bg-primary-container/5 transition-all cursor-pointer bg-transparent">
                    Register Your Farm
                  </button>
                </Link>
              </div>
              
              <div className="flex flex-wrap items-center gap-x-12 gap-y-6 pt-10 border-t border-slate-100">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-primary">2,400+</span>
                  <span className="text-sm text-on-surface-variant font-medium uppercase tracking-wider">Products Tracked</span>
                </div>
                <div className="w-px h-10 bg-slate-200 hidden md:block"></div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-primary">98.7%</span>
                  <span className="text-sm text-on-surface-variant font-medium uppercase tracking-wider">Verification Rate</span>
                </div>
                <div className="w-px h-10 bg-slate-200 hidden md:block"></div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-primary">12</span>
                  <span className="text-sm text-on-surface-variant font-medium uppercase tracking-wider">Countries</span>
                </div>
              </div>
            </div>
            
            {/* Right Visual: Technical Diagram */}
            <div className="w-full md:w-[480px] h-auto aspect-square md:h-[480px] relative mx-auto mt-12 md:mt-0">
              {/* Main Container */}
              <div className="w-full h-full rounded-[24px] bg-[#f0ecfb] relative shadow-sm">
                {/* Security Badge */}
                <div className="absolute top-4 left-4 z-50 bg-white border border-[#e0e0e0] rounded-full px-3 py-1.5 flex items-center gap-2 shadow-sm">
                  <span className="material-symbols-outlined text-[#0254EC] text-base" style={{ fontVariationSettings: "'FILL' 1" }}>shield</span>
                  <div className="flex flex-col leading-none">
                    <span className="text-[10px] font-bold text-slate-900 tracking-tight">SECURITY</span>
                    <span className="text-[9px] font-medium text-slate-500">Polygon</span>
                  </div>
                </div>

                {/* SVG Connections Overlay - Anchored to node centers */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible">
                  <defs>
                    <linearGradient id="grad-farm" x1="50%" y1="15.5%" x2="50%" y2="50%">
                      <stop offset="0%" stopColor="#16A34A" />
                      <stop offset="100%" stopColor="#c3c5d8" />
                    </linearGradient>
                    <linearGradient id="grad-retailer" x1="85.5%" y1="25.5%" x2="50%" y2="50%">
                      <stop offset="0%" stopColor="#7C3AED" />
                      <stop offset="100%" stopColor="#c3c5d8" />
                    </linearGradient>
                    <linearGradient id="grad-processor" x1="17.5%" y1="49.5%" x2="50%" y2="50%">
                      <stop offset="0%" stopColor="#D97706" />
                      <stop offset="100%" stopColor="#c3c5d8" />
                    </linearGradient>
                    <linearGradient id="grad-distributor" x1="79.5%" y1="49.5%" x2="50%" y2="50%">
                      <stop offset="0%" stopColor="#EA580C" />
                      <stop offset="100%" stopColor="#c3c5d8" />
                    </linearGradient>
                    <linearGradient id="grad-consumer" x1="50%" y1="82.5%" x2="50%" y2="50%">
                      <stop offset="0%" stopColor="#0254EC" />
                      <stop offset="100%" stopColor="#c3c5d8" />
                    </linearGradient>
                  </defs>
                  
                  {/* Connection Lines (Node Center to Chain Link Center) */}
                  <line x1="50%" y1="15.5%" x2="50%" y2="50%" stroke="url(#grad-farm)" strokeWidth="1.5" strokeDasharray="6 3" />
                  <line x1="17.5%" y1="49.5%" x2="50%" y2="50%" stroke="url(#grad-processor)" strokeWidth="1.5" strokeDasharray="6 3" />
                  <line x1="79.5%" y1="49.5%" x2="50%" y2="50%" stroke="url(#grad-distributor)" strokeWidth="1.5" strokeDasharray="6 3" />
                  <line x1="85.5%" y1="25.5%" x2="50%" y2="50%" stroke="url(#grad-retailer)" strokeWidth="1.5" strokeDasharray="6 3" />
                  <line x1="50%" y1="82.5%" x2="50%" y2="50%" stroke="url(#grad-consumer)" strokeWidth="1.5" strokeDasharray="6 3" />
                </svg>

                {/* Nodes Container */}
                <div className="relative w-full h-full">
                  {/* Node: Farm */}
                  <div className="absolute top-[8%] left-[50%] -translate-x-1/2 flex flex-col items-center z-20">
                    <div className="w-[72px] h-[72px] rounded-[16px] bg-white border-2 border-[#16A34A] flex items-center justify-center shadow-lg transition-transform hover:scale-110">
                      <span className="material-symbols-outlined text-[#16A34A] text-[28px]">agriculture</span>
                    </div>
                    <span className="mt-2 text-[9px] font-extrabold uppercase tracking-[2px] text-[#16A34A]">Farm</span>
                  </div>

                  {/* Node: Retailer */}
                  <div className="absolute top-[18%] left-[78%] flex flex-col items-center z-20">
                    <div className="w-[72px] h-[72px] rounded-[16px] bg-white border-2 border-[#7C3AED] flex items-center justify-center shadow-lg transition-transform hover:scale-110">
                      <span className="material-symbols-outlined text-[#7C3AED] text-[28px]">storefront</span>
                    </div>
                    <span className="mt-2 text-[9px] font-extrabold uppercase tracking-[2px] text-[#7C3AED]">Retailer</span>
                  </div>

                  {/* Node: Processor */}
                  <div className="absolute top-[42%] left-[10%] flex flex-col items-center z-20">
                    <div className="w-[72px] h-[72px] rounded-[16px] bg-white border-2 border-[#D97706] flex items-center justify-center shadow-lg transition-transform hover:scale-110">
                      <span className="material-symbols-outlined text-[#D97706] text-[28px]">precision_manufacturing</span>
                    </div>
                    <span className="mt-2 text-[9px] font-extrabold uppercase tracking-[2px] text-[#D97706]">Processor</span>
                  </div>

                  {/* Node: Distributor */}
                  <div className="absolute top-[42%] left-[72%] flex flex-col items-center z-20">
                    <div className="w-[72px] h-[72px] rounded-[16px] bg-white border-2 border-[#EA580C] flex items-center justify-center shadow-lg transition-transform hover:scale-110">
                      <span className="material-symbols-outlined text-[#EA580C] text-[28px]">local_shipping</span>
                    </div>
                    <span className="mt-2 text-[9px] font-extrabold uppercase tracking-[2px] text-[#EA580C]">Distributor</span>
                  </div>

                  {/* Node: Consumer */}
                  <div className="absolute top-[75%] left-[50%] -translate-x-1/2 flex flex-col items-center z-20">
                    <div className="w-[72px] h-[72px] rounded-[16px] bg-white border-2 border-[#0254EC] flex items-center justify-center shadow-lg transition-transform hover:scale-110">
                      <span className="material-symbols-outlined text-[#0254EC] text-[28px]">person_check</span>
                    </div>
                    <span className="mt-2 text-[9px] font-extrabold uppercase tracking-[2px] text-[#0254EC]">Consumer</span>
                  </div>

                  {/* Center: Chain Link */}
                  <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center text-[#0254EC] border-2 border-slate-100 z-30">
                    <div className="absolute inset-0 rounded-full bg-blue-500/10 animate-ping"></div>
                    <span className="material-symbols-outlined text-[28px] relative z-40">link</span>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </section>

        {/* Section 2: How It Works Section */}
        <section className="bg-surface-container-low py-24 md:py-32" id="how-it-works">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Transparent Trust, Every Step of the Way</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed">Each product event is recorded as an immutable transaction on the Polygon blockchain</p>
            </div>
            
            {/* 5-Column Layout */}
            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute top-5 left-0 w-full h-1 hidden md:block opacity-30" style={{ background: 'repeating-linear-gradient(90deg, #c3c5d8, #c3c5d8 4px, transparent 4px, transparent 8px)' }}></div>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
                {/* Steps */}
                {[
                  { icon: 'grain', title: 'Farm Registration', desc: 'Farmer registers product batch with organic certifications on IPFS', color: 'bg-[#16A34A]' },
                  { icon: 'settings', title: 'Processing', desc: 'Processor logs transformation events with lab reports and photos', color: 'bg-[#D97706]' },
                  { icon: 'local_shipping', title: 'Distribution', desc: 'Distributor records transit with GPS locations and timestamps', color: 'bg-[#EA580C]' },
                  { icon: 'store', title: 'Retail', desc: 'Retailer confirms product receipt and shelf placement', color: 'bg-[#7C3AED]' },
                  { icon: 'smartphone', title: 'Consumer', desc: 'Consumer scans QR code to view complete verified journey', color: 'bg-[#0254EC]' }
                ].map((step, i) => (
                  <div key={i} className="flex flex-col items-center text-center group">
                    <div className={"w-10 h-10 rounded-full " + step.color + " text-white flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform"}>
                      <span className="material-symbols-outlined text-xl">{step.icon}</span>
                    </div>
                    <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow h-full w-full">
                      <h3 className="font-bold text-slate-900 mb-3">{step.title}</h3>
                      <p className="text-sm text-on-surface-variant leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Features Section */}
        <section className="bg-white py-24 md:py-40">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#1b1a25] tracking-tight">Built on Blockchain, Designed for Trust</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="group">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined text-3xl">security</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Immutable Records</h3>
                <p className="text-on-surface-variant leading-relaxed text-lg">Every supply chain event is permanently recorded on Polygon blockchain. No tampering, no fraud, just pure transparency.</p>
              </div>
              <div className="group">
                <div className="w-16 h-16 rounded-2xl bg-slate-100 text-slate-900 flex items-center justify-center mb-8 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined text-3xl">qr_code_2</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Instant Verification</h3>
                <p className="text-on-surface-variant leading-relaxed text-lg">Consumers scan QR code on packaging to access complete product history in seconds. No apps required.</p>
              </div>
              <div className="group">
                <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined text-3xl">workspace_premium</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Organic Certification NFTs</h3>
                <p className="text-on-surface-variant leading-relaxed text-lg">Farmers receive soulbound NFT certificates verifiable on-chain when they register organic products, ensuring high-value authenticity.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Consumer Trust Section */}
        <section className="bg-[#01123F] text-white py-24 md:py-40 overflow-hidden relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-20 relative z-10">
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight">Know Exactly What You're Eating</h2>
              <p className="text-xl text-slate-300 leading-relaxed mb-12">Scan the QR code on any KETJU-verified product to see the full journey — from the farm where it was grown to the store where you bought it.</p>
              <Link to="/verify" className="inline-block">
                <button className="bg-white text-primary px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-white/10 transition-all active:scale-95 cursor-pointer border-none outline-none">
                  Try the Verifier
                </button>
              </Link>
            </div>
            
            {/* Verification Card Mockup */}
            <div className="w-full lg:w-1/2">
              <div className="bg-white text-slate-900 rounded-3xl p-8 shadow-2xl overflow-hidden max-w-lg mx-auto transform hover:rotate-2 transition-transform duration-500">
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <h4 className="text-2xl font-extrabold mb-1">Organic Tomatoes</h4>
                    <p className="text-slate-500 font-mono text-xs tracking-wider uppercase">Batch #CT-2024-001</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-1 rounded-full mb-2">VERIFIED SAFE</span>
                    <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-1 rounded-full">BLOCKCHAIN PROOF</span>
                  </div>
                </div>
                
                <div className="space-y-6 mb-8 relative">
                  <div className="absolute left-3 top-3 bottom-3 w-0.5 bg-slate-100"></div>
                  <div className="flex items-center gap-4 relative">
                    <div className="w-6 h-6 rounded-full bg-emerald-500 ring-4 ring-emerald-50 z-10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-[14px] text-white" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold">Harvested</p>
                      <p className="text-xs text-slate-500">Green Valley Farm • Sept 12, 2024</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 relative opacity-60">
                    <div className="w-6 h-6 rounded-full bg-slate-200 z-10"></div>
                    <div>
                      <p className="text-sm font-bold">Processed</p>
                      <p className="text-xs text-slate-500">Central Packaging • Sept 14, 2024</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 relative opacity-40">
                    <div className="w-6 h-6 rounded-full bg-slate-100 z-10"></div>
                    <p className="text-xs font-bold text-slate-400">+ 3 More Stages Logged</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 py-6 border-t border-slate-100 mb-6">
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Farmer</p>
                    <p className="text-sm font-bold">Antonio Morales</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Method</p>
                    <p className="text-sm font-bold">100% Hydroponic</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between bg-slate-50 p-4 rounded-xl group cursor-pointer" onClick={() => navigate('/verify?batch=CT-2024-0871')}>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-blue-600">visibility</span>
                    <span className="text-sm font-bold">View Full Chain on Polygon</span>
                  </div>
                  <span className="material-symbols-outlined text-slate-400 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: About Us Teaser Section */}
        <section className="py-24 px-6 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-black mb-6 tracking-tight text-on-surface">Blockchain-grade trust for everyone.</h2>
              <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
                Learn more about KETJU's mission to reshape the global food supply chain through transparency and decentralization. Meet the team of engineers and designers behind the tech.
              </p>
              <Link to="/about#team">
                <button className="bg-blue-600 !text-white font-black px-8 py-4 rounded-full hover:bg-blue-700 hover:scale-105 hover:shadow-xl active:scale-95 transition-all flex items-center gap-2 shadow-lg shadow-blue-600/20">
                  Meet the Team <span className="material-symbols-outlined">group</span>
                </button>
              </Link>
            </div>
            <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
              <div className="aspect-square bg-emerald-50 rounded-2xl flex items-center justify-center">
                <span className="material-symbols-outlined text-emerald-600 text-5xl">diversity_3</span>
              </div>
              <div className="aspect-square bg-blue-50 rounded-2xl flex items-center justify-center">
                <span className="material-symbols-outlined text-blue-600 text-5xl">engineering</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 text-slate-900 w-full pt-24 pb-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-1">
            <div className="text-2xl font-black text-slate-900 mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-blue-600" style={{ fontVariationSettings: "'FILL' 1" }}>account_tree</span> KETJU
            </div>
            <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-xs">Building the world's most transparent and secure food tracking network, one block at a time.</p>
          </div>
          <div>
            <h5 className="text-slate-900 font-bold mb-6">Product</h5>
            <ul className="space-y-4">
              <li><Link to="/log-event" className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-bold">Traceability</Link></li>
              <li><Link to="/verify" className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-bold">Verification</Link></li>
              <li><Link to="/farmer" className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-bold">Farmers Portal</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-slate-900 font-bold mb-6">Company</h5>
            <ul className="space-y-4">
              <li><Link to="#" className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-bold">Our Mission</Link></li>
              <li><Link to="#" className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-bold">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-slate-900 font-bold mb-6">Subscribe to Updates</h5>
            <div className="flex gap-2">
              <input className="bg-white border border-slate-200 rounded-full px-4 py-2 text-sm w-full focus:ring-2 focus:ring-blue-100 outline-none" placeholder="Email address" type="email" />
              <button className="bg-blue-600 text-white p-2 rounded-full flex items-center justify-center border-none shadow-lg shadow-blue-600/20">
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-8 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-xs font-bold">© 2024 KETJU. Built on Polygon Blockchain.</p>
          <div className="flex gap-8">
            <Link to="#" className="text-slate-400 hover:text-blue-600 text-xs transition-colors font-bold">Privacy Policy</Link>
            <Link to="#" className="text-slate-400 hover:text-blue-600 text-xs transition-colors font-bold">Terms of Service</Link>
            <Link to="#" className="text-slate-400 hover:text-blue-600 text-xs transition-colors font-bold">Cookies</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
