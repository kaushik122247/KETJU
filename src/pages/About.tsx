import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

export default function About() {
  const team = [
    { 
      name: 'Himanshu Rawat', 
      role: 'Lead Blockchain Architect', 
      bio: 'Specializing in Polygon L2 scaling and secure smart contract design.', 
      avatar: 'HR',
      github: '#',
      x: '#',
      linkedin: '#'
    },
    { 
      name: 'Aryan Sharma', 
      role: 'Full Stack Developer', 
      bio: 'Expert in high-performance React architectures and decentralized storage.', 
      avatar: 'AS',
      github: '#',
      x: '#',
      linkedin: '#'
    },
    { 
      name: 'Priya Verma', 
      role: 'UI/UX Designer', 
      bio: 'Designing intuitive interfaces for complex supply chain ecosystems.', 
      avatar: 'PV',
      github: '#',
      x: '#',
      linkedin: '#'
    },
  ];

  const partners = [
  { name: 'Polygon', logo: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/white/matic.png' },
  { name: 'Ethereum', logo: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/white/eth.png' },
  { name: 'Chainlink', logo: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/white/link.png' },
  { name: 'IPFS', logo: 'https://raw.githubusercontent.com/ipfs-inactive/logo/master/raster/ipfs-logo-wider-strokes-white.png' },
];

  return (
    <div className="min-h-screen bg-[#0a0a0b] font-sans text-white selection:bg-blue-500/30">
      <Navbar />
      
      <main className="relative overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[20%] right-[-5%] w-[30%] h-[30%] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-400 mb-6 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              Building the future of supply chains
            </div>
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 leading-[1.1]">
              We are building the backbone of global trust.
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
              A high-performance, blockchain-native tooling ecosystem designed to unify and secure the global flow of goods.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#team" className="px-8 py-3 rounded-lg bg-white text-black font-semibold hover:bg-slate-200 transition-colors">
                Meet the team
              </a>
              <Link to="/verify" className="px-8 py-3 rounded-lg bg-white/5 border border-white/10 font-semibold hover:bg-white/10 transition-colors">
                Try the Verifier
              </Link>
            </div>
          </div>
        </section>

        {/* Logo Scroll Section */}
        <section className="py-12 border-y border-white/5 bg-white/[0.02] overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 mb-8">
            <p className="text-center text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Powering secure ecosystems globally</p>
          </div>
          <div className="flex relative items-center py-20 md:py-24 min-h-[250px] overflow-visible">
            <div className="flex gap-16 md:gap-32 items-center animate-scroll whitespace-nowrap overflow-visible">
              {/* Double the logos for seamless scroll */}
              {[...partners, ...partners].map((partner, index) => (
                <div key={`${partner.name}-${index}`} className="flex flex-col items-center gap-6 transition-all duration-300 opacity-40 hover:opacity-100 cursor-default group px-6">
                  <div className="relative h-12 md:h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-125">
                    <img src={partner.logo} alt={partner.name} className={`h-full w-auto object-contain brightness-200 contrast-125 ${partner.name === 'IPFS' ? 'scale-[1.5]' : ''}`} />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 transition-colors duration-300 group-hover:text-white group-hover:scale-110">{partner.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-32 px-6 relative">
          <div className="max-w-3xl mx-auto text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
              Transparency isn't a feature. <span className="text-blue-400">It's a standard.</span>
            </h2>
            <div className="space-y-6 text-base md:text-lg text-slate-400 leading-relaxed font-light">
              <p>
                The global supply chain is broken. Records are siloed, fraud is rampant, and trust is expensive. KETJU solves this by creating a "Digital Twin" for every physical product, recorded immutably on the Polygon blockchain.
              </p>
              <p>
                Our mission is to empower consumers and businesses with instant, verifiable truth. From the farm to the table, every step is cryptographically signed and publicly auditable.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-32 px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-16 text-center">Meet the architects</h2>
            <div className="grid md:grid-cols-3 gap-10">
              {team.map(member => (
                <div key={member.name} className="group relative">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-600/20 border border-white/10 flex items-center justify-center text-4xl font-bold mb-6 transition-transform duration-500 group-hover:-translate-y-2">
                    {member.avatar}
                  </div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-blue-400 text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5 font-light">{member.bio}</p>
                  <div className="flex gap-4">
                    <a href={member.github} className="text-slate-500 hover:text-white transition-colors">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                    </a>
                    <a href={member.x} className="text-slate-500 hover:text-white transition-colors">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join the Chain Section */}
        <section className="py-32 px-6">
          <div className="max-w-5xl mx-auto rounded-3xl bg-white/[0.02] border border-white/10 p-10 relative overflow-hidden group">
            <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-5">Think you'd be a good addition?</h2>
                <div className="font-mono bg-black/50 p-6 rounded-xl border border-white/5 mb-6 text-xs text-blue-300">
                  <span className="text-slate-500">// Join the decentralized future</span>
                  <br />
                  <span className="text-blue-400">const</span> <span className="text-yellow-200">joinTeam</span> = <span className="text-blue-400">async</span> () =&gt; &#123;
                  <br />
                  &nbsp;&nbsp;<span className="text-blue-400">const</span> status = <span className="text-blue-400">await</span> ketju.apply(&#123;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;role: <span className="text-green-300">'Innovator'</span>
                  <br />
                  &nbsp;&nbsp;&#125;);
                  <br />
                  &nbsp;&nbsp;window.location = <span className="text-green-300">`mailto:$&#123;atob('aGVsbG9Aa2V0anUuaW8=')&#125;`</span>;
                  <br />
                  &#125;;
                </div>
                <button 
                  onClick={() => window.location.href = 'mailto:hello@ketju.io'}
                  className="px-6 py-2.5 rounded-lg bg-white text-black font-semibold hover:bg-slate-200 transition-colors text-sm"
                >
                  Send us an email
                </button>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {[
                  'Passionate about Polygon L2',
                  'IPFS & decentralized storage',
                  'Clean, minimalist UI/UX',
                  'Based in the future'
                ].map(item => (
                  <div key={item} className="flex items-center gap-3 text-slate-400 text-sm">
                    <span className="w-1 h-1 rounded-full bg-blue-500" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6 text-center relative overflow-hidden">
          <div className="absolute bottom-[-50%] left-1/2 -translate-x-1/2 w-full h-[150%] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 tracking-tight">Ready to secure the chain?</h2>
            <div className="flex flex-wrap justify-center gap-5">
              <Link to="/signup" className="px-10 py-4 rounded-xl bg-white text-black font-bold text-lg hover:bg-slate-200 transition-transform hover:scale-[1.02]">
                Get Started
              </Link>
              <Link to="/verify" className="px-10 py-4 rounded-xl bg-white/5 border border-white/10 font-bold text-lg hover:bg-white/10 transition-transform hover:scale-[1.02]">
                Try Verifier
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-16 px-8 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="text-2xl font-black tracking-tighter">KETJU</div>
            <p className="text-slate-500 text-sm">© 2026 Ketju Platform. All rights reserved.</p>
          </div>
          <div className="flex gap-12 text-sm font-medium text-slate-400">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
            <Link to="/verify" className="hover:text-white transition-colors">Verify</Link>
            <a href="#" className="hover:text-white transition-colors">Docs</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

