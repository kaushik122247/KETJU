import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

export default function About() {
  const team = [
    { name: 'Himanshu Rawat', role: 'Lead Blockchain Architect', bio: 'Specializing in Polygon L2 scaling and secure smart contract design.', avatar: 'HR' },
    { name: 'Aryan Sharma', role: 'Full Stack Developer', bio: 'Expert in high-performance React architectures and decentralized storage.', avatar: 'AS' },
    { name: 'Priya Verma', role: 'UI/UX Designer', bio: 'Designing intuitive interfaces for complex supply chain ecosystems.', avatar: 'PV' },
  ];

  return (
    <div className="min-h-screen bg-surface font-sans text-on-surface">
      <Navbar />
      <div className="h-[72px]" />

      <main>
        {/* Hero Section */}
        <section className="bg-[#01123F] text-white py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }}></div>
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">Our Mission is <span className="text-primary-container">Transparency.</span></h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              KETJU was born out of a simple question: "Where does my food actually come from?" 
              We leverage the power of blockchain to provide an immutable record of truth for global supply chains.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-extrabold mb-6 tracking-tight text-on-surface">Why KETJU?</h2>
              <p className="text-lg text-on-surface-variant leading-relaxed mb-6">
                Traditional supply chains are opaque. Records are often siloed, prone to manual errors, and vulnerable to fraud. This lack of transparency undermines consumer trust and makes it difficult to verify organic or fair-trade claims.
              </p>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                By utilizing the **Polygon Blockchain** and **IPFS**, KETJU creates a "Digital Twin" for every physical product batch. From the moment of harvest to the final retail shelf, every hand-off is cryptographically signed and stored forever.
              </p>
            </div>
            <div className="bg-surface-container p-12 rounded-[3rem] border border-outline-variant/20 shadow-inner">
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-white rounded-2xl shadow-sm">
                  <span className="material-symbols-outlined text-primary text-3xl mb-2">verified</span>
                  <p className="font-bold text-sm">Trust</p>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm">
                  <span className="material-symbols-outlined text-emerald-600 text-3xl mb-2">eco</span>
                  <p className="font-bold text-sm">Organic</p>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm">
                  <span className="material-symbols-outlined text-amber-600 text-3xl mb-2">account_balance_wallet</span>
                  <p className="font-bold text-sm">Blockchain</p>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm">
                  <span className="material-symbols-outlined text-purple-600 text-3xl mb-2">security</span>
                  <p className="font-bold text-sm">Immutability</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-surface-container-low py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-4 tracking-tight">Meet the Architects</h2>
              <p className="text-on-surface-variant text-lg">The team building the future of decentralized trust.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map(member => (
                <div key={member.name} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all group">
                  <div className="w-16 h-16 rounded-2xl bg-primary-container text-on-primary flex items-center justify-center text-xl font-black mb-6 group-hover:scale-110 transition-transform">
                    {member.avatar}
                  </div>
                  <h3 className="text-xl font-black mb-1 text-on-surface">{member.name}</h3>
                  <p className="text-primary font-bold text-sm mb-4 uppercase tracking-wider">{member.role}</p>
                  <p className="text-on-surface-variant leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 px-6 text-center">
          <h2 className="text-3xl font-black mb-8">Ready to join the chain?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/signup">
              <button className="bg-primary-container text-on-primary px-10 py-4 rounded-full font-black text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all">
                Create Account
              </button>
            </Link>
            <Link to="/verify">
              <button className="border-2 border-primary-container text-primary-container px-10 py-4 rounded-full font-black text-lg hover:bg-primary/5 transition-all">
                Try the Verifier
              </button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 text-white py-12 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs font-light">© 2024 KETJU. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="/" className="text-slate-400 hover:text-white text-xs transition-colors">Home</Link>
            <Link to="/verify" className="text-slate-400 hover:text-white text-xs transition-colors">Verify</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
