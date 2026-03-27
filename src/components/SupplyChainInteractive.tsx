import React, { useRef, useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import {
  Sprout,
  Store,
  Truck,
  UserCheck,
  Factory,
  Link as LinkIcon,
  ShieldCheck
} from 'lucide-react';

interface NodePosition {
  id: string;
  name: string;
  label: string;
  icon: React.ElementType;
  color: string;
  anchorX: number; // Percentage
  anchorY: number; // Percentage
}

const nodes: NodePosition[] = [
  { id: 'farm', name: 'FARM', label: 'Farm', icon: Sprout, color: '#22C55E', anchorX: 50, anchorY: 15 },
  { id: 'retailer', name: 'RETAILER', label: 'Retailer', icon: Store, color: '#7C3AED', anchorX: 83.3, anchorY: 39.2 },
  { id: 'distributor', name: 'DISTRIBUTOR', label: 'Distributor', icon: Truck, color: '#F97316', anchorX: 70.6, anchorY: 78.3 },
  { id: 'consumer', name: 'CONSUMER', label: 'Consumer', icon: UserCheck, color: '#0254EC', anchorX: 29.4, anchorY: 78.3 },
  { id: 'processor', name: 'PROCESSOR', label: 'Processor', icon: Factory, color: '#D97706', anchorX: 16.7, anchorY: 39.2 },
];

const CARD_SIZE = 84;
const PADDING = 20;

const SupplyChainInteractive: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState({ width: 500, height: 500 });
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 }); // Start far away

  // Spring-based positions for each node
  const nodeSprings = nodes.map(() => ({
    x: useSpring(0, { stiffness: 120, damping: 20, mass: 0.5 }),
    y: useSpring(0, { stiffness: 120, damping: 20, mass: 0.5 }),
  }));

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setContainerSize({ width: rect.width, height: rect.height });
      }
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    const repulsionRadius = 180;
    const repulsionStrength = 70;

    nodes.forEach((node, i) => {
      const ax = (node.anchorX / 100) * containerSize.width;
      const ay = (node.anchorY / 100) * containerSize.height;

      const dx = ax - mousePos.x;
      const dy = ay - mousePos.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      let targetX = ax;
      let targetY = ay;

      if (dist < repulsionRadius) {
        const force = (1 - dist / repulsionRadius) * repulsionStrength;
        targetX += (dx / dist) * force;
        targetY += (dy / dist) * force;
      }

      // Boundary constraints
      targetX = Math.max(CARD_SIZE / 2 + PADDING, Math.min(containerSize.width - CARD_SIZE / 2 - PADDING, targetX));
      targetY = Math.max(CARD_SIZE / 2 + PADDING, Math.min(containerSize.height - CARD_SIZE / 2 - PADDING, targetY));

      nodeSprings[i].x.set(targetX);
      nodeSprings[i].y.set(targetY);
    });
  }, [mousePos, containerSize]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: -1000, y: -1000 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-full aspect-square md:w-[500px] md:h-[500px] relative mx-auto bg-[#f5f3ff] rounded-[48px] border border-white/80 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] overflow-hidden group/container transition-all duration-700 hover:shadow-[0_48px_80px_-16px_rgba(124,58,237,0.1)]"
    >
      {/* Visual Glow Layer */}
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none"
        style={{ left: containerSize.width / 2, top: containerSize.height / 2 }}
      />

      {/* Security Badge */}
      <div className="absolute top-6 left-6 z-40">
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-slate-100 shadow-sm">
          <ShieldCheck className="w-3.5 h-3.5 text-indigo-500" />
          <span className="text-[10px] font-black uppercase tracking-wider text-slate-600">Security Polygon</span>
        </div>
      </div>

      {/* SVG Connections */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible">
        {nodes.map((node, i) => (
          <motion.line
            key={node.id}
            x1="50%"
            y1="50%"
            x2={nodeSprings[i].x}
            y2={nodeSprings[i].y}
            stroke={node.color}
            strokeWidth="1.5"
            strokeDasharray="8,5"
            className="opacity-20"
          />
        ))}
      </svg>

      {/* Nodes (HTML Cards) */}
      <div className="absolute inset-0 pointer-events-none">
        {nodes.map((node, i) => (
          <motion.div
            key={node.id}
            style={{
              x: nodeSprings[i].x,
              y: nodeSprings[i].y,
              translateX: '-50%',
              translateY: '-50%',
            }}
            className="absolute z-20 flex flex-col items-center"
          >
            <div
              className="w-[84px] h-[84px] rounded-[24px] bg-white border flex items-center justify-center transition-all duration-300 shadow-sm ring-4 ring-transparent hover:scale-105"
              style={{
                borderColor: `${node.color}33`,
                boxShadow: `0 12px 24px -8px ${node.color}20`,
              }}
            >
              <node.icon className="w-10 h-10" style={{ color: node.color }} />
            </div>
            <span
              className="mt-3 text-[10px] font-black uppercase tracking-[2.5px] antialiased"
              style={{ color: node.color, opacity: 0.7 }}
            >
              {node.label}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Center Hub */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white shadow-[0_0_40px_rgba(124,58,237,0.15)] flex items-center justify-center text-indigo-600 border-2 border-slate-50 z-30 transition-all duration-500 hover:scale-110"
      >
        <div className="absolute inset-0 rounded-full bg-indigo-500/10 animate-ping opacity-40"></div>
        <LinkIcon className="w-8 h-8 relative z-40" />
      </div>
    </div>
  );
};

export default SupplyChainInteractive;
