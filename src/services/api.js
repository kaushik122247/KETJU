// Mock API Service for KETJU
// Simulating blockchain transactions and backend API calls

// Helper to simulate network delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Generate a random ID to simulate blockchain hash or DB UUID
const generateId = () => {
  return '0x' + Math.random().toString(16).substr(2, 40).padEnd(40, '0');
};

// In-memory mock database
const db = {
  batches: [],
  events: []
};

// Seed with some initial data
db.batches.push({
  id: '0x1A2B3C4D5E6F7G8H9I0J',
  productName: 'Organic Arabica Coffee',
  farmerId: '0x4f2c...8b1d',
  quantity: '500 kg',
  location: 'Kerala, India',
  timestamp: Date.now() - 86400000 * 5, // 5 days ago
  status: 'Registered',
  certifications: ['Fair Trade', 'USDA Organic']
});

db.events.push({
  id: generateId(),
  batchId: '0x1A2B3C4D5E6F7G8H9I0J',
  eventType: 'Processing',
  actorId: '0x3F2...8b4C',
  role: 'processor',
  location: 'Bangalore Roastery',
  details: 'Washed and roasted at medium-dark level.',
  timestamp: Date.now() - 86400000 * 2 // 2 days ago
});

export const api = {
  /**
   * Register a new product batch (Farmer)
   */
  async registerBatch(batchData) {
    await delay(1500); // Simulate network/blockchain wait
    
    // Simulate basic validation
    if (!batchData.productName || !batchData.quantity) {
      throw new Error("Missing required batch fields");
    }

    const newBatch = {
      id: generateId(),
      ...batchData,
      timestamp: Date.now(),
      status: 'Registered'
    };
    
    db.batches.push(newBatch);
    return newBatch;
  },

  /**
   * Log a new event for a batch (Processor, Distributor, Retailer)
   */
  async logEvent(eventData) {
    await delay(1200);

    if (!eventData.batchId || !eventData.eventType) {
      throw new Error("Missing required event data");
    }

    const batchExists = db.batches.find(b => b.id === eventData.batchId);
    if (!batchExists) {
      throw new Error("Batch ID not found in the network");
    }

    const newEvent = {
      id: generateId(),
      ...eventData,
      timestamp: Date.now()
    };
    
    db.events.push(newEvent);
    
    // Update batch status based on event
    batchExists.status = eventData.eventType;
    
    return newEvent;
  },

  /**
   * Get complete history and details for a given batch ID
   */
  async getProductHistory(batchId) {
    await delay(800);
    
    const batch = db.batches.find(b => b.id === batchId);
    if (!batch) {
      return null;
    }

    const events = db.events
      .filter(e => e.batchId === batchId)
      .sort((a, b) => b.timestamp - a.timestamp); // Newest first

    return {
      batch,
      events
    };
  },
  
  /**
   * Get all active batches associated with a specific user (mocked by returning all for now)
   */
  async getUserBatches(userId) {
    await delay(1000);
    return db.batches; 
  }
};
