import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useApp, Product, SupplyEvent, Stage } from '../context/AppContext';

const STAGE_COLORS: Record<Stage, { border: string; badge: string; badgeText: string; dot: string }> = {
  farm:         { border: 'border-l-4 border-emerald-500', badge: 'bg-emerald-50 text-emerald-600', badgeText: 'FARM',         dot: 'bg-emerald-500' },
  processing:   { border: 'border-r-4 border-amber-500',   badge: 'bg-amber-50 text-amber-600',     badgeText: 'PROCESSING',   dot: 'bg-amber-500' },
  distribution: { border: 'border-l-4 border-orange-500',  badge: 'bg-orange-50 text-orange-600',   badgeText: 'DISTRIBUTION', dot: 'bg-orange-500' },
  retail:       { border: 'border-r-4 border-purple-500',  badge: 'bg-purple-50 text-purple-600',  badgeText: 'RETAIL',       dot: 'bg-purple-500' },
  consumer:     { border: 'border-l-4 border-blue-500',    badge: 'bg-blue-100 text-blue',          badgeText: 'VERIFIED',     dot: 'bg-blue-500' },
};

export default function VerifyProduct() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { getProductById, getEventsForBatch } = useApp();

  const batchId = searchParams.get('batch') ?? '';
  const [inputBatch, setInputBatch] = useState(batchId);
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [events, setEvents] = useState<SupplyEvent[]>([]);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!batchId) return;
    const p = getProductById(batchId);
    if (p) {
      setProduct(p);
      setEvents(getEventsForBatch(batchId));
      setNotFound(false);
    } else {
      setNotFound(true);
    }
  }, [batchId, getProductById, getEventsForBatch]);

  const handleSearch = () => {
    const cleaned = inputBatch.replace('#', '').trim();
    navigate(`/verify?batch=${cleaned}`);
  };

  return (
    <div className="w-full min-h-screen bg-surface font-sans text-on-surface">
      <Navbar />
      <div className="h-[72px]" />

      <main className="pt-12 pb-32">

        {/* Search Bar */}
        <section className="max-w-2xl mx-auto px-6 mb-16">
          <div className="flex gap-3">
            <input
              value={inputBatch}
              onChange={e => setInputBatch(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSearch()}
              placeholder="Enter Batch ID e.g. CT-2024-0871"
              className="flex-1 bg-surface-container-low border-none rounded-xl p-4 font-mono text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
            />
            <button onClick={handleSearch} className="bg-primary-container text-on-primary px-8 py-3 rounded-xl font-bold hover:bg-primary transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">search</span>
              Verify
            </button>
          </div>
        </section>

        {/* Not Found */}
        {notFound && (
          <div className="max-w-lg mx-auto px-6 text-center py-16">
            <span className="material-symbols-outlined text-6xl text-on-surface-variant mb-4 block">search_off</span>
            <h2 className="text-2xl font-bold mb-2">Product Not Found</h2>
            <p className="text-on-surface-variant mb-6">No batch with ID <code className="font-mono bg-surface-container px-1 rounded">#{batchId}</code> exists on the chain.</p>
            <button onClick={() => navigate('/scanner')} className="bg-primary-container text-on-primary px-8 py-3 rounded-full font-bold hover:bg-primary transition-all">
              Try Scanning QR
            </button>
          </div>
        )}

        {/* Landing prompt */}
        {!batchId && !notFound && (
          <div className="max-w-lg mx-auto px-6 text-center py-16">
            <span className="material-symbols-outlined text-6xl text-primary mb-4 block">qr_code_scanner</span>
            <h2 className="text-2xl font-bold mb-2">Verify Any Product</h2>
            <p className="text-on-surface-variant mb-6">Enter a batch ID above or scan a QR code to trace the complete supply chain journey.</p>
            <button onClick={() => navigate('/scanner')} className="bg-primary-container text-on-primary px-8 py-3 rounded-full font-bold hover:bg-primary transition-all">
              Open QR Scanner
            </button>
          </div>
        )}

        {/* Product Found */}
        {product && (
          <>
            {/* Hero */}
            <section className="max-w-screen-xl mx-auto px-6 mb-16">
              <div className="grid lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-8">
                  <nav className="flex items-center gap-2 text-on-surface-variant text-sm font-medium mb-6">
                    <button onClick={() => navigate('/')} className="hover:text-primary transition-colors">Home</button>
                    <span className="material-symbols-outlined text-xs">chevron_right</span>
                    <span>Verify Product</span>
                    <span className="material-symbols-outlined text-xs">chevron_right</span>
                    <span className="text-primary font-bold">{product.batchId}</span>
                  </nav>
                  <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-on-surface mb-4">{product.name}</h1>
                  <p className="text-xl text-on-surface-variant mb-8">Batch #{product.batchId} · Registered {new Date(product.registeredAt).toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' })}</p>
                  <div className="flex flex-wrap gap-3 mb-12">
                    {product.isOrganic && <span className="px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-sm font-bold">Organic Certified</span>}
                    <span className="px-4 py-1.5 rounded-full bg-on-secondary-fixed text-white text-sm font-bold">Blockchain Verified</span>
                    {product.isCertified && <span className="px-4 py-1.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant text-sm font-bold flex items-center gap-1"><span className="material-symbols-outlined text-sm">lab_research</span> Lab Tested</span>}
                  </div>
                  {/* Farmer Card */}
                  <div className="bg-surface-container p-8 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-surface-container-high transition-all">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-primary-container flex items-center justify-center text-white text-xl font-bold border-4 border-white shadow-sm">
                        {product.farmerName.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-on-surface">{product.farmerName}</h3>
                        <p className="text-on-surface-variant flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm">location_on</span>
                          {product.farmName}, {product.state}
                        </p>
                        <p className="text-xs font-bold text-primary mt-1 uppercase tracking-wider">Harvest Date: {product.harvestDate}</p>
                      </div>
                    </div>
                    <button className="bg-surface-container-lowest text-primary px-6 py-2.5 rounded-full text-sm font-bold shadow-sm flex items-center gap-2 hover:bg-primary hover:text-white transition-all">
                      View IPFS Certificate
                      <span className="material-symbols-outlined text-sm">north_east</span>
                    </button>
                  </div>
                </div>
                {/* QR */}
                <div className="lg:col-span-4">
                  <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-lg flex flex-col items-center text-center">
                    <div className="bg-surface-container-low p-6 rounded-2xl mb-6 flex items-center justify-center">
                      <div className="w-48 h-48 bg-on-surface rounded-lg flex flex-col items-center justify-center gap-2">
                        <span className="material-symbols-outlined text-5xl text-surface">qr_code_2</span>
                        <p className="text-surface/70 text-xs font-mono">#{product.batchId}</p>
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-on-surface mb-2">Scan to share journey</h4>
                    <div className="bg-surface-container-low px-4 py-2 rounded-lg font-mono text-sm text-on-surface-variant flex items-center gap-2">
                      {product.farmerWallet}
                      <span className="material-symbols-outlined text-xs cursor-pointer hover:text-primary transition-colors" onClick={() => navigator.clipboard.writeText(product.farmerWallet)}>content_copy</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Supply Chain Timeline */}
            <section className="max-w-screen-xl mx-auto px-6 mb-24">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-on-surface mb-4">Complete Journey from Farm to Consumer</h2>
                <div className="w-24 h-1.5 bg-primary-container mx-auto rounded-full" />
              </div>
              <div className="relative max-w-4xl mx-auto pl-12 md:pl-0">
                <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-surface-container-highest -translate-x-1/2" />
                {events.length === 0 ? (
                  <p className="text-center text-on-surface-variant py-8">No supply chain events recorded yet.</p>
                ) : (
                  events.map((ev, i) => {
                    const sc = STAGE_COLORS[ev.stage];
                    const isRight = i % 2 === 1;
                    return (
                      <div key={ev.id} className={`relative mb-16 md:flex items-center justify-between w-full ${isRight ? 'flex-row-reverse' : ''}`}>
                        <div className="md:w-[45%] mb-4 md:mb-0">
                          <div className={`bg-surface-container-lowest p-6 rounded-2xl shadow-sm hover:shadow-md transition-all ${sc.border} ${isRight ? 'text-right' : ''}`}>
                            <div className={`flex justify-between items-start mb-4 ${isRight ? 'flex-row-reverse' : ''}`}>
                              <h4 className="font-bold text-lg text-on-surface">{ev.actorName}</h4>
                              <span className={`text-xs font-bold px-2 py-1 rounded ${sc.badge}`}>{sc.badgeText}</span>
                            </div>
                            <div className="space-y-2 text-sm text-on-surface-variant">
                              <p className={`flex items-center gap-2 ${isRight ? 'justify-end' : ''}`}>
                                <span className="material-symbols-outlined text-sm">location_on</span>{ev.location}
                              </p>
                              <p className={`flex items-center gap-2 ${isRight ? 'justify-end' : ''}`}>
                                <span className="material-symbols-outlined text-sm">schedule</span>
                                {new Date(ev.timestamp).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
                              </p>
                              {ev.notes && <p className="text-xs bg-surface-container p-2 rounded mt-2">{ev.notes}</p>}
                            </div>
                            <div className={`mt-4 pt-4 border-t border-outline-variant/20 flex gap-3 ${isRight ? 'justify-end' : ''}`}>
                              <span onClick={() => navigator.clipboard.writeText(ev.txHash)} className="text-[10px] font-bold uppercase tracking-widest text-primary cursor-pointer hover:underline">Polygon Tx</span>
                            </div>
                          </div>
                        </div>
                        <div className={`absolute left-6 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full ${sc.dot} border-4 border-white shadow-sm flex items-center justify-center z-10`} />
                        <div className="hidden md:block md:w-[45%]" />
                      </div>
                    );
                  })
                )}
              </div>
            </section>

            {/* Blockchain Proof */}
            <section className="bg-on-primary-fixed py-24 px-6">
              <div className="max-w-screen-xl mx-auto">
                <div className="max-w-2xl mb-16">
                  <h2 className="text-4xl font-extrabold tracking-tight text-white mb-4">Blockchain Transparency Record</h2>
                  <p className="text-white/70 text-lg">Every step of the supply chain is immutable, timestamped, and verifiable by anyone.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    { label: 'Network Events', value: events.length, sub: 'Verified Ledger Entries' },
                    { label: 'Transit Time', value: '21', sub: 'Days Farm to Shelf' },
                    { label: 'Blockchain', value: 'POL', sub: 'Polygon Mumbai Testnet' },
                  ].map(s => (
                    <div key={s.label} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl">
                      <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-2">{s.label}</p>
                      <h3 className="text-5xl font-bold text-white mb-1">{s.value}</h3>
                      <p className="text-blue-300 text-sm font-medium">{s.sub}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
}
