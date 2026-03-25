# 🚀 KETJU – Decentralized Supply Chain Tracking System

## 📌 Project Overview

**KETJU** is a decentralized supply chain tracking system designed to ensure **end-to-end transparency** from farmer to consumer using blockchain technology.

Each product batch is assigned a **unique on-chain ID**, allowing all stakeholders—**farmer, processor, distributor, and retailer**—to log lifecycle events securely. By leveraging blockchain immutability, KETJU guarantees that supply chain data is **tamper-proof, verifiable, and trustworthy**.

Consumers can simply scan a QR code to access the complete history of a product—**no crypto wallet required**.

---

## 🎯 Key Features

- 🔗 **Blockchain-Based Tracking**  
  Immutable recording of every supply chain event

- 🆔 **Unique Product Identity**  
  Each batch is assigned a unique on-chain ID

- 👥 **Role-Based Smart Contracts**  
  Different stakeholders log events securely

- 📦 **End-to-End Transparency**  
  Track products from origin to final delivery

- 🌐 **IPFS Integration**  
  Store certificates and product images in a decentralized manner

- 📱 **QR Code Verification**  
  Consumers can scan and verify product authenticity instantly

- ⚡ **Gasless Transactions**  
  Backend relays transactions so users don’t need crypto

- 🔐 **Authentication & Security**  
  Secure login and access control via backend

---

## 🏗️ System Architecture

KETJU follows a hybrid architecture combining blockchain and traditional backend services:

### 🔹 Frontend
- Built using **React**
- Role-specific dashboards:
  - Farmer
  - Processor
  - Distributor
  - Retailer
- Public product verification page (QR-based access)

### 🔹 Backend
- **Node.js + Express**
- **MongoDB** for user data and caching
- Handles:
  - Authentication
  - API requests
  - Gasless transaction relay

### 🔹 Blockchain Layer
- Smart contracts for:
  - Product registration
  - Event logging
  - Role-based access control

### 🔹 Storage
- **IPFS** for:
  - Certificates
  - Product images

---

## 🔄 Workflow

1. 🧑‍🌾 **Farmer**
   - Creates product batch
   - Uploads initial data (origin, quality, etc.)

2. 🏭 **Processor**
   - Adds processing details

3. 🚚 **Distributor**
   - Logs shipment and logistics data

4. 🏪 **Retailer**
   - Finalizes product availability

5. 👤 **Consumer**
   - Scans QR code
   - Views:
     - Full supply chain history
     - Certifications
     - Images (via IPFS)
     - Blockchain proof

---

## 🧩 Tech Stack

| Layer        | Technology            |
|--------------|----------------------|
| Frontend     | React.js             |
| Backend      | Node.js, Express     |
| Database     | MongoDB              |
| Blockchain   | Smart Contracts      |
| Storage      | IPFS                 |
| Auth & APIs  | JWT, REST APIs       |

---

## 🔐 Security Features

- Role-based access control (RBAC)
- Immutable blockchain records
- Secure authentication (JWT)
- Decentralized file storage (IPFS)
- Tamper-proof event logs

---

## 📊 Use Cases

- Organic food traceability 🌱  
- Pharmaceutical supply chains 💊  
- Luxury goods authentication 💎  
- Agricultural transparency 🚜  

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/ketju.git
cd ketju