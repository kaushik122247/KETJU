import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useApp, Product } from '../context/AppContext';
import { useAuth } from '../context/AuthContext';

type FormData = {
  name: string;
  category: string;
  harvestDate: string;
  isOrganic: boolean;
  isCertified: boolean;
  description: string;
  farmName: string;
  city: string;
  state: string;
  gpsCoordinates: string;
  fssaiLicense: string;
  certBody: string;
  certValidUntil: string;
};

const INITIAL: FormData = {
  name: '', category: 'Vegetables', harvestDate: '', isOrganic: true, isCertified: true,
  description: '', farmName: '', city: '', state: 'Maharashtra', gpsCoordinates: '',
  fssaiLicense: '', certBody: '', certValidUntil: '',
};

function generateBatchId() {
  return `CT-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 9000) + 1000)}`;
}
function generateTxHash() {
  return '0x' + Array.from({ length: 64 }, () => Math.floor(Math.random() * 16).toString(16)).join('');
}

export default function RegisterProduct() {
  const { user } = useAuth();
  const { addProduct } = useApp();
  const navigate = useNavigate();
  const [form, setForm] = useState<FormData>(INITIAL);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<{ batchId: string; txHash: string } | null>(null);

  const set = <K extends keyof FormData>(k: K, v: FormData[K]) =>
    setForm(prev => ({ ...prev, [k]: v }));

  const validate = (): boolean => {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!form.name.trim())       e.name = 'Product name is required';
    if (!form.harvestDate)       e.harvestDate = 'Harvest date is required';
    if (!form.farmName.trim())   e.farmName = 'Farm name is required';
    if (!form.city.trim())       e.city = 'City is required';
    setErrors(e as Partial<FormData>);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500)); // simulate blockchain tx
    const batchId = generateBatchId();
    const txHash = generateTxHash();
    const product: Product = {
      id: String(Date.now()),
      batchId,
      name: form.name,
      category: form.category,
      harvestDate: form.harvestDate,
      isOrganic: form.isOrganic,
      isCertified: form.isCertified,
      description: form.description,
      farmName: form.farmName,
      city: form.city,
      state: form.state,
      gpsCoordinates: form.gpsCoordinates,
      farmerName: user?.name ?? 'Unknown Farmer',
      farmerWallet: user?.walletAddress ?? '0x...',
      currentStage: 'farm',
      registeredAt: new Date().toISOString(),
      fssaiLicense: form.fssaiLicense,
      certBody: form.certBody,
      certValidUntil: form.certValidUntil,
    };
    addProduct(product);
    setSuccess({ batchId, txHash });
    setLoading(false);
  };

  if (success) {
    return (
      <div className="w-full min-h-screen bg-surface font-sans text-on-surface">
        <Navbar role="farmer" />
        <div className="h-[72px]" />
        <div className="max-w-lg mx-auto px-6 py-24 text-center">
          <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <span className="material-symbols-outlined text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
          </div>
          <h2 className="text-3xl font-extrabold mb-3 text-on-surface">Product Registered!</h2>
          <p className="text-on-surface-variant mb-8 leading-relaxed">
            Your product batch has been immutably recorded on the Polygon blockchain.
          </p>
          <div className="bg-surface-container-low rounded-2xl p-6 text-left mb-8 space-y-4">
            <div>
              <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Batch ID</p>
              <p className="font-mono font-bold text-primary text-lg">#{success.batchId}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Transaction Hash</p>
              <p className="font-mono text-xs break-all text-on-surface-variant">{success.txHash}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => navigate(`/verify?batch=${success.batchId}`)}
              className="flex-1 py-3 bg-primary-container text-on-primary rounded-full font-bold hover:bg-primary transition-all"
            >
              View on Chain
            </button>
            <button
              onClick={() => { setSuccess(null); setForm(INITIAL); }}
              className="flex-1 py-3 border-2 border-primary text-primary rounded-full font-bold hover:bg-primary/5 transition-all"
            >
              Register Another
            </button>
          </div>
        </div>
      </div>
    );
  }

  const inputCls = "w-full bg-surface-container-low border-none rounded-lg p-4 text-on-surface placeholder:text-outline/60 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all";
  const errorCls = "text-red-600 text-xs mt-1 font-medium";

  return (
    <div className="w-full min-h-screen bg-surface font-sans text-on-surface">
      <Navbar role="farmer" />
      <div className="h-[72px]" />

      {/* Page header */}
      <header className="pt-16 pb-12 bg-white border-none">
        <div className="max-w-[800px] mx-auto px-6">
          <nav className="mb-6 flex items-center gap-2 text-sm text-on-surface-variant">
            <button onClick={() => navigate('/farmer')} className="hover:text-primary cursor-pointer transition-colors">Dashboard</button>
            <span className="material-symbols-outlined text-sm">chevron_right</span>
            <span className="font-medium text-on-surface">Register New Product</span>
          </nav>
          <h1 className="text-5xl font-extrabold tracking-tight text-on-surface mb-4 leading-tight">Register a New Product Batch</h1>
          <p className="text-lg text-on-surface-variant leading-relaxed mb-8 max-w-2xl">
            Fill in the details below. An immutable blockchain record will be created.
          </p>
          <div className="flex items-start gap-4 p-5 bg-primary/5 border-l-4 border-primary rounded-r-xl">
            <span className="material-symbols-outlined text-primary">info</span>
            <p className="text-sm text-on-surface-variant font-medium">
              Your wallet will be prompted to sign a transaction after submission. A small gas fee on Polygon will apply.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-[800px] mx-auto px-6 pb-36">
        <form onSubmit={handleSubmit} className="bg-surface-container-lowest rounded-2xl shadow-sm p-10 space-y-12">

          {/* Section A: Product Info */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">inventory_2</span>
              <h2 className="text-2xl font-bold text-on-surface">Product Information</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="col-span-2">
                <label className="block text-sm font-bold text-on-surface-variant mb-2 uppercase tracking-wide">Product Name *</label>
                <input type="text" value={form.name} onChange={e => set('name', e.target.value)} placeholder="e.g. Organic Cherry Tomatoes" className={inputCls} />
                {errors.name && <p className={errorCls}>{errors.name}</p>}
              </div>
              <div>
                <label className="block text-sm font-bold text-on-surface-variant mb-2 uppercase tracking-wide">Category *</label>
                <select value={form.category} onChange={e => set('category', e.target.value)} className={inputCls}>
                  {['Vegetables', 'Fruits', 'Grains', 'Dairy', 'Herbs'].map(c => <option key={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-on-surface-variant mb-2 uppercase tracking-wide">Harvest Date *</label>
                <input type="date" value={form.harvestDate} onChange={e => set('harvestDate', e.target.value)} className={inputCls} />
                {errors.harvestDate && <p className={errorCls}>{errors.harvestDate}</p>}
              </div>

              {/* Toggles */}
              <div className="col-span-2 bg-surface-container p-6 rounded-lg space-y-4">
                {([
                  { key: 'isOrganic' as const,   label: 'Is this product Organic?',    sub: 'Verified by organic farming standards' },
                  { key: 'isCertified' as const,  label: 'Is this product Certified?',  sub: 'Requires valid certificate upload below' },
                ] as const).map(t => (
                  <div key={t.key} className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-on-surface">{t.label}</p>
                      <p className="text-xs text-on-surface-variant">{t.sub}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => set(t.key, !form[t.key])}
                      className={`w-12 h-6 rounded-full relative transition-colors ${form[t.key] ? 'bg-primary' : 'bg-outline-variant'}`}
                    >
                      <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${form[t.key] ? 'right-1' : 'left-1'}`} />
                    </button>
                  </div>
                ))}
              </div>

              <div className="col-span-2">
                <label className="block text-sm font-bold text-on-surface-variant mb-2 uppercase tracking-wide">Description</label>
                <textarea value={form.description} onChange={e => set('description', e.target.value)} rows={3} placeholder="Describe growing conditions, farming methods…" className={inputCls} />
              </div>
            </div>
          </section>

          <div className="h-px bg-surface-container-high" />

          {/* Section B: Location */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">location_on</span>
              <h2 className="text-2xl font-bold text-on-surface">Location Details</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="col-span-2">
                <label className="block text-sm font-bold text-on-surface-variant mb-2 uppercase tracking-wide">Farm Name *</label>
                <input type="text" value={form.farmName} onChange={e => set('farmName', e.target.value)} placeholder="e.g. Sunrise Organic Farm" className={inputCls} />
                {errors.farmName && <p className={errorCls}>{errors.farmName}</p>}
              </div>
              <div>
                <label className="block text-sm font-bold text-on-surface-variant mb-2 uppercase tracking-wide">City/District *</label>
                <input type="text" value={form.city} onChange={e => set('city', e.target.value)} placeholder="e.g. Nashik" className={inputCls} />
                {errors.city && <p className={errorCls}>{errors.city}</p>}
              </div>
              <div>
                <label className="block text-sm font-bold text-on-surface-variant mb-2 uppercase tracking-wide">State</label>
                <select value={form.state} onChange={e => set('state', e.target.value)} className={inputCls}>
                  {['Maharashtra', 'Punjab', 'Haryana', 'Karnataka', 'Tamil Nadu', 'Gujarat', 'Rajasthan'].map(s => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-bold text-on-surface-variant mb-2 uppercase tracking-wide">GPS Coordinates</label>
                <input type="text" value={form.gpsCoordinates} onChange={e => set('gpsCoordinates', e.target.value)} placeholder="19.9975° N, 73.7898° E — or leave blank" className={inputCls} />
              </div>
            </div>
          </section>

          <div className="h-px bg-surface-container-high" />

          {/* Section C: Certification */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">verified</span>
              <h2 className="text-2xl font-bold text-on-surface">Certification</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-on-surface-variant mb-2 uppercase tracking-wide">FSSAI License Number</label>
                <input type="text" value={form.fssaiLicense} onChange={e => set('fssaiLicense', e.target.value)} placeholder="12-digit FSSAI number" className={inputCls} />
              </div>
              <div>
                <label className="block text-sm font-bold text-on-surface-variant mb-2 uppercase tracking-wide">Certifying Body</label>
                <input type="text" value={form.certBody} onChange={e => set('certBody', e.target.value)} placeholder="e.g. India Organic, USDA" className={inputCls} />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-bold text-on-surface-variant mb-2 uppercase tracking-wide">Certificate Valid Until</label>
                <input type="date" value={form.certValidUntil} onChange={e => set('certValidUntil', e.target.value)} className={inputCls} />
              </div>
            </div>
          </section>
        </form>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 w-full z-50 bg-white border-t border-slate-100 shadow-[0_-8px_30px_rgb(0,0,0,0.04)]">
        <div className="flex justify-between items-center px-10 py-5 w-full max-w-[1440px] mx-auto">
          <button onClick={() => navigate('/farmer')} className="text-slate-500 flex items-center gap-2 px-6 font-bold uppercase tracking-wider text-sm hover:opacity-90 transition-opacity">
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            disabled={loading}
            className="bg-blue-600 text-white rounded-full px-8 py-3 flex items-center gap-2 font-bold uppercase tracking-wider text-sm hover:opacity-90 transition-all active:scale-95 disabled:opacity-60"
          >
            {loading ? (
              <><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> Registering on Blockchain…</>
            ) : (
              <><span className="material-symbols-outlined text-lg">verified_user</span> Register on Blockchain</>
            )}
          </button>
        </div>
      </footer>
    </div>
  );
}
