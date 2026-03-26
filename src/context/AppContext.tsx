import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Stage = 'farm' | 'processing' | 'distribution' | 'retail' | 'consumer';

export interface Product {
  id: string;
  batchId: string;
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
  farmerName: string;
  farmerWallet: string;
  currentStage: Stage;
  registeredAt: string;
  fssaiLicense?: string;
  certBody?: string;
  certValidUntil?: string;
}

export interface SupplyEvent {
  id: string;
  batchId: string;
  stage: Stage;
  actorName: string;
  actorWallet: string;
  location: string;
  timestamp: string;
  notes: string;
  txHash: string;
  ipfsCid?: string;
}

interface AppContextType {
  products: Product[];
  events: SupplyEvent[];
  addProduct: (p: Product) => void;
  addEvent: (e: SupplyEvent) => void;
  getProductById: (batchId: string) => Product | undefined;
  getEventsForBatch: (batchId: string) => SupplyEvent[];
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const INITIAL_PRODUCTS: Product[] = [
  {
    id: '1', batchId: 'CT-2024-0871', name: 'Organic Cherry Tomatoes', category: 'Vegetables',
    harvestDate: '2024-03-10', isOrganic: true, isCertified: true,
    description: 'Grown using hydroponic methods with minimal water usage.',
    farmName: 'Green Valley Farm', city: 'Nashik', state: 'Maharashtra', gpsCoordinates: '19.9975° N, 73.7898° E',
    farmerName: 'John Doe', farmerWallet: '0x4f2c...8b1d', currentStage: 'distribution',
    registeredAt: '2024-03-12T09:14:00Z', fssaiLicense: '10013022002779', certBody: 'India Organic', certValidUntil: '2025-03-12',
  },
  {
    id: '2', batchId: 'CT-2024-0654', name: 'Green Spinach Batch A', category: 'Vegetables',
    harvestDate: '2024-02-28', isOrganic: true, isCertified: true,
    description: 'Freshly harvested spinach from certified organic fields.',
    farmName: 'Sunrise Organic Farm', city: 'Pune', state: 'Maharashtra', gpsCoordinates: '18.5204° N, 73.8567° E',
    farmerName: 'John Doe', farmerWallet: '0x4f2c...8b1d', currentStage: 'retail',
    registeredAt: '2024-03-01T10:00:00Z',
  },
  {
    id: '3', batchId: 'CT-2024-0432', name: 'Cucumber Batch Spring', category: 'Vegetables',
    harvestDate: '2024-02-15', isOrganic: true, isCertified: true,
    description: 'Spring season cucumbers with natural pest control.',
    farmName: 'Green Valley Farm', city: 'Nashik', state: 'Maharashtra', gpsCoordinates: '19.9975° N, 73.7898° E',
    farmerName: 'John Doe', farmerWallet: '0x4f2c...8b1d', currentStage: 'consumer',
    registeredAt: '2024-02-17T08:30:00Z',
  },
  {
    id: '4', batchId: 'CT-2024-0321', name: 'Bell Peppers Red', category: 'Vegetables',
    harvestDate: '2024-01-30', isOrganic: false, isCertified: false,
    description: 'Red bell peppers grown in poly-house conditions.',
    farmName: 'Green Valley Farm', city: 'Nashik', state: 'Maharashtra', gpsCoordinates: '19.9975° N, 73.7898° E',
    farmerName: 'John Doe', farmerWallet: '0x4f2c...8b1d', currentStage: 'processing',
    registeredAt: '2024-02-01T11:00:00Z',
  },
  {
    id: '5', batchId: 'CT-2024-0198', name: 'Organic Broccoli', category: 'Vegetables',
    harvestDate: '2024-01-12', isOrganic: true, isCertified: true,
    description: 'Premium organic broccoli with high nutritional value.',
    farmName: 'Sunrise Organic Farm', city: 'Pune', state: 'Maharashtra', gpsCoordinates: '18.5204° N, 73.8567° E',
    farmerName: 'John Doe', farmerWallet: '0x4f2c...8b1d', currentStage: 'consumer',
    registeredAt: '2024-01-14T09:00:00Z',
  },
];

const INITIAL_EVENTS: SupplyEvent[] = [
  { id: 'e1', batchId: 'CT-2024-0871', stage: 'farm', actorName: 'John Doe', actorWallet: '0x4f2c...8b1d', location: 'Nashik, Maharashtra', timestamp: '2024-03-12T09:14:00Z', notes: 'Product registered, organic certified.', txHash: '0xabc...001', ipfsCid: 'QmA1...001' },
  { id: 'e2', batchId: 'CT-2024-0871', stage: 'processing', actorName: 'FreshPack Foods', actorWallet: '0x7a3b...2f90', location: 'Pune, Maharashtra', timestamp: '2024-03-15T14:30:00Z', notes: 'Quality Grade A+, Pesticide residue 0.0%', txHash: '0xabc...002' },
  { id: 'e3', batchId: 'CT-2024-0871', stage: 'distribution', actorName: 'QuickMesh Logistics', actorWallet: '0x9b4c...3e12', location: 'Mumbai, Maharashtra', timestamp: '2024-03-17T06:00:00Z', notes: 'Cold chain maintained at 4°C throughout transit.', txHash: '0xabc...003' },
];

export function AppProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const [events, setEvents] = useState<SupplyEvent[]>(INITIAL_EVENTS);

  const addProduct = (p: Product) => setProducts(prev => [p, ...prev]);
  const addEvent = (e: SupplyEvent) => {
    setEvents(prev => [...prev, e]);
    setProducts(prev => prev.map(p => p.batchId === e.batchId ? { ...p, currentStage: e.stage } : p));
  };
  const getProductById = (batchId: string) => products.find(p => p.batchId === batchId);
  const getEventsForBatch = (batchId: string) => events.filter(e => e.batchId === batchId);

  return (
    <AppContext.Provider value={{ products, events, addProduct, addEvent, getProductById, getEventsForBatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp(): AppContextType {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
