import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

interface QRModalProps {
  batchId: string;
  productName: string;
  onClose: () => void;
}

export default function QRModal({ batchId, productName, onClose }: QRModalProps) {
  const verifyUrl = `${window.location.origin}/verify?batch=${batchId}`;

  const handleDownload = () => {
    const svg = document.getElementById('qr-svg-el');
    if (!svg) return;
    const svgData = new XMLSerializer().serializeToString(svg);
    const blob = new Blob([svgData], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = `${batchId}-qr.svg`; a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/50 backdrop-blur-sm"
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl text-center">
        <div className="flex items-start justify-between mb-6">
          <div className="text-left">
            <h3 className="text-xl font-bold text-slate-900">{productName}</h3>
            <p className="text-slate-500 font-mono text-xs mt-1">Batch #{batchId}</p>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-700 transition-colors">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="bg-slate-50 p-6 rounded-2xl flex items-center justify-center mb-6">
          <QRCodeSVG id="qr-svg-el" value={verifyUrl} size={192} level="H" />
        </div>

        <p className="text-xs text-slate-500 mb-6 break-all font-mono">{verifyUrl}</p>

        <div className="flex gap-3">
          <button
            onClick={() => navigator.clipboard.writeText(verifyUrl)}
            className="flex-1 py-2.5 border-2 border-primary text-primary rounded-full text-sm font-bold hover:bg-primary/5 transition-all flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">content_copy</span>
            Copy Link
          </button>
          <button
            onClick={handleDownload}
            className="flex-1 py-2.5 bg-primary-container text-on-primary rounded-full text-sm font-bold hover:bg-primary transition-all flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">download</span>
            Download
          </button>
        </div>
      </div>
    </div>
  );
}
