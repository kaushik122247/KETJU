import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useApp, Stage } from '../context/AppContext';
import { useAuth } from '../context/AuthContext';

type Step = 1 | 2 | 3 | 4;

interface EventForm {
  batchId: string;
  location: string;
  dateTime: string;
  notes: string;
  metadata: string;
}

function generateTxHash() {
  return '0x' + Array.from({ length: 40 }, () => Math.floor(Math.random() * 16).toString(16)).join('');
}

export default function LogEvent() {
  const { user } = useAuth();
  const { getProductById, addEvent } = useApp();
  const navigate = useNavigate();

  const [step, setStep] = useState<Step>(1);
  const [form, setForm] = useState<EventForm>({
    batchId: '',
    location: user?.name ?? '',
    dateTime: new Date().toISOString().slice(0, 16),
    notes: '',
    metadata: '',
  });
  const [foundProduct, setFoundProduct] = useState<ReturnType<typeof getProductById>>(undefined);
  const [lookupError, setLookupError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const set = <K extends keyof EventForm>(k: K, v: EventForm[K]) =>
    setForm(prev => ({ ...prev, [k]: v }));

  const lookup = () => {
    const batchId = form.batchId.replace('#', '').trim();
    const p = getProductById(batchId);
    if (!p) {
      setLookupError('Product not found. Try CT-2024-0871');
      setFoundProduct(undefined);
      return;
    }
    setLookupError('');
    setFoundProduct(p);
    setStep(2);
  };

  const stageForRole = (): Stage => {
    switch (user?.role) {
      case 'processor': return 'processing';
      case 'distributor': return 'distribution';
      case 'retailer': return 'retail';
      default: return 'farm';
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    const txHash = generateTxHash();
    addEvent({
      id: String(Date.now()),
      batchId: foundProduct!.batchId,
      stage: stageForRole(),
      actorName: user?.name ?? 'Unknown',
      actorWallet: user?.walletAddress ?? '0x...',
      location: form.location,
      timestamp: new Date().toISOString(),
      notes: form.notes,
      txHash,
    });
    setSuccess(txHash);
    setLoading(false);
  };

  const inputCls = "w-full bg-surface-container-low border-0 rounded-lg p-4 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary-container/40 transition-all";

  const roleColor = user?.role === 'processor' ? 'bg-amber-100 text-amber-700 border-amber-200'
    : user?.role === 'distributor' ? 'bg-orange-100 text-orange-700 border-orange-200'
    : user?.role === 'retailer' ? 'bg-purple-100 text-purple-700 border-purple-200'
    : 'bg-green-100 text-green-700 border-green-200';

  if (success) {
    return (
      <div className="w-full min-h-screen bg-surface font-sans">
        <Navbar />
        <div className="h-[72px]" />
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-surface-container-highest/60 backdrop-blur-sm">
          <div className="bg-surface-container-lowest p-12 rounded-2xl max-w-md w-full text-center shadow-2xl">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            </div>
            <h3 className="text-3xl font-extrabold mb-2">Event Logged!</h3>
            <p className="text-on-surface-variant mb-8 leading-relaxed">
              The event for batch #{foundProduct?.batchId} has been immutably written to the blockchain.
            </p>
            <div className="bg-surface-container-low rounded-lg p-4 mb-8">
              <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">Transaction Hash</p>
              <p className="font-mono text-xs break-all text-primary-container">{success}</p>
            </div>
            <div className="flex gap-3">
              <button onClick={() => navigate(`/verify?batch=${foundProduct?.batchId}`)} className="flex-1 py-3 bg-primary-container text-on-primary rounded-full font-bold">View on Chain</button>
              <button onClick={() => { setSuccess(null); setStep(1); setFoundProduct(undefined); setForm({ batchId: '', location: '', dateTime: new Date().toISOString().slice(0, 16), notes: '', metadata: '' }); }} className="flex-1 py-3 border-2 border-primary text-primary rounded-full font-bold">Log Another</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-surface font-sans text-on-surface">
      <Navbar />
      <div className="h-[72px]" />
      <main className="max-w-[1280px] mx-auto px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <nav className="flex items-center gap-2 text-on-surface-variant text-sm mb-4">
            <button onClick={() => navigate(-1)} className="hover:text-primary transition-colors">Dashboard</button>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="text-primary-container font-medium">Log Supply Chain Event</span>
          </nav>
          <h1 className="text-5xl font-extrabold tracking-tight mb-4 text-on-surface">Log a Supply Chain Event</h1>
          <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            Record your stage in the product's blockchain journey. This creates an immutable on-chain event log.
          </p>
        </div>

        {/* Info banner */}
        <div className={`border-l-4 p-6 rounded-r-lg mb-12 flex items-start gap-4 ${roleColor} bg-opacity-10`}
          style={{ backgroundColor: 'rgba(251,191,36,0.05)', borderColor: user?.role === 'processor' ? '#D97706' : '#7C3AED' }}>
          <span className="material-symbols-outlined">info</span>
          <div>
            <p className="font-semibold mb-0.5">Role Verification Required</p>
            <p className="text-sm">You are logged in as <span className="font-bold uppercase">{user?.role ?? 'Unknown'}</span>. You can only log {stageForRole().toUpperCase()} stage events.</p>
          </div>
        </div>

        <div className="max-w-[860px] mx-auto space-y-8">

          {/* Step 1: Find Product */}
          <section className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 1 ? 'bg-primary-container text-white' : 'bg-surface-container text-on-surface-variant'}`}>1</div>
              <h2 className="text-2xl font-bold text-on-surface">Find Product</h2>
            </div>
            <div className="space-y-4">
              <label className="block text-sm font-bold text-on-surface uppercase tracking-wider mb-2">Product Batch ID *</label>
              <div className="flex gap-3">
                <input
                  value={form.batchId}
                  onChange={e => set('batchId', e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && lookup()}
                  className="flex-1 bg-surface-container-low border-0 rounded-lg p-4 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary-container/40"
                  placeholder="Scan QR or enter e.g. CT-2024-0871"
                />
                <button onClick={lookup} className="bg-primary-container text-on-primary px-8 py-3 rounded-full text-sm font-bold hover:bg-primary transition-all">
                  Look Up Product
                </button>
              </div>
              {lookupError && <p className="text-red-600 text-sm font-medium">{lookupError}</p>}
              {foundProduct && (
                <div className="bg-surface-container-low rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold">{foundProduct.name}</h3>
                      <p className="text-sm text-on-surface-variant">{foundProduct.farmerName} · {foundProduct.city}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Harvested</p>
                      <p className="font-mono text-sm">{foundProduct.harvestDate}</p>
                    </div>
                  </div>
                  <div className="bg-green-50 text-green-700 text-xs font-bold py-2 px-3 rounded flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">check_circle</span>
                    Product found and active in supply chain
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Step 2: Stage Details */}
          {step >= 2 && (
            <section className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary-container text-white flex items-center justify-center font-bold">2</div>
                <h2 className="text-2xl font-bold text-on-surface">Your Stage Details</h2>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-on-surface-variant uppercase tracking-wider mb-2">Your Name / Facility</label>
                  <input value={user?.name ?? ''} readOnly className={`${inputCls} cursor-not-allowed opacity-70`} />
                </div>
                <div>
                  <label className="block text-sm font-bold text-on-surface uppercase tracking-wider mb-2">Location</label>
                  <input value={form.location} onChange={e => set('location', e.target.value)} className={inputCls} placeholder="City, State" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-on-surface uppercase tracking-wider mb-2">Date / Time</label>
                  <input type="datetime-local" value={form.dateTime} onChange={e => set('dateTime', e.target.value)} className={inputCls} />
                </div>
                <div>
                  <label className="block text-sm font-bold text-on-surface-variant uppercase tracking-wider mb-2">Current Role</label>
                  <div className={`px-4 py-3 rounded-lg text-sm font-bold flex items-center gap-2 border ${roleColor}`}>
                    <span className="material-symbols-outlined text-sm">precision_manufacturing</span>
                    {stageForRole().toUpperCase()}
                  </div>
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-bold text-on-surface uppercase tracking-wider mb-2">Stage Notes</label>
                  <textarea value={form.notes} onChange={e => set('notes', e.target.value)} rows={3} className={inputCls} placeholder="Describe what happened at this stage…" />
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <button onClick={() => setStep(3)} className="bg-primary-container text-on-primary px-8 py-3 rounded-full text-sm font-bold hover:bg-primary transition-all">
                  Continue to Evidence →
                </button>
              </div>
            </section>
          )}

          {/* Step 3: Evidence */}
          {step >= 3 && (
            <section className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary-container text-white flex items-center justify-center font-bold">3</div>
                <h2 className="text-2xl font-bold text-on-surface">Attach Evidence</h2>
              </div>
              <div className="border-2 border-dashed border-outline-variant rounded-xl p-8 flex flex-col items-center justify-center text-center hover:border-primary-container/50 transition-colors bg-surface-container-low/30 mb-6">
                <span className="material-symbols-outlined text-5xl text-on-surface-variant mb-4">cloud_upload</span>
                <p className="text-lg font-medium mb-1">Drag & drop files or click to browse</p>
                <p className="text-sm text-on-surface-variant">PDF, JPG, PNG — stored permanently on IPFS</p>
              </div>
              <div>
                <label className="block text-sm font-bold text-on-surface uppercase tracking-wider mb-2">Additional Metadata (Optional)</label>
                <input value={form.metadata} onChange={e => set('metadata', e.target.value)} className={inputCls} placeholder='{"batch_temp": "4°C", "humidity": "65%"}' />
              </div>
              <div className="mt-6 flex justify-end">
                <button onClick={() => setStep(4)} className="bg-primary-container text-on-primary px-8 py-3 rounded-full text-sm font-bold hover:bg-primary transition-all">
                  Review & Submit →
                </button>
              </div>
            </section>
          )}

          {/* Step 4: Review */}
          {step >= 4 && foundProduct && (
            <section className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary-container text-white flex items-center justify-center font-bold">4</div>
                <h2 className="text-2xl font-bold text-on-surface">Review & Submit</h2>
              </div>
              <div className="bg-blue-50 rounded-xl p-6 mb-8 grid grid-cols-2 gap-y-4">
                {[
                  { label: 'Product Batch', value: `#${foundProduct.batchId}` },
                  { label: 'Stage Action', value: stageForRole().toUpperCase() },
                  { label: 'Authorized Actor', value: user?.name ?? '' },
                  { label: 'Location', value: form.location },
                ].map(r => (
                  <div key={r.label}>
                    <p className="text-[10px] font-bold text-primary/60 uppercase tracking-widest mb-1">{r.label}</p>
                    <p className="font-bold text-primary">{r.value}</p>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-error font-bold text-sm">
                  <span className="material-symbols-outlined text-lg">warning</span>
                  MetaMask signature required
                </div>
                <div className="flex gap-4">
                  <button onClick={() => setStep(3)} className="px-8 py-3 rounded-full text-sm font-bold border-2 border-primary-container text-primary-container hover:bg-primary-container/5 transition-all">Back</button>
                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="bg-primary-container text-on-primary px-10 py-3 rounded-full text-sm font-bold shadow-lg hover:bg-primary active:scale-95 transition-all flex items-center gap-2 disabled:opacity-60"
                  >
                    {loading ? <><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> Submitting…</> : <>Submit to Blockchain <span className="material-symbols-outlined text-lg">link</span></>}
                  </button>
                </div>
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}
