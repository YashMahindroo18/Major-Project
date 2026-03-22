# Anonymizing Healthcare Interoperability 🔐
### A Stealth-Addressing and Self-Healing Blockchain Framework for Patient-Centric EHR

## 📌 Project Overview
This project addresses the **Metadata Leakage** problem in blockchain-based Electronic Health Records (EHR). While current systems encrypt data, they often leak "relationship metadata" (who is talking to whom). [cite_start]Our solution introduces **Stealth Addressing** and **Self-Healing Key Rotation** to ensure total privacy[cite: 22, 23, 27].

## 🚀 Current Progress: Phase 1 (Local Vault)
- [x] [cite_start]Initialized Node.js environment.
- [x] [cite_start]Implemented **AES-256-GCM** Authenticated Encryption[cite: 25].
- [x] [cite_start]Created local secure storage (`/vault`) for encrypted records[cite: 25].
- [x] [cite_start]Successfully verified Decryption logic using 256-bit hex keys[cite: 27].

## 🛠️ Tech Stack
- [cite_start]**Languages:** Node.js (JavaScript), Python.
- **Security:** AES-256-GCM, ECDH (Elliptic Curve Diffie-Hellman).
- [cite_start]**Blockchain:** Ethereum Layer-2 (Hardhat for local dev).
- [cite_start]**Storage:** Local File System (Planned: IPFS Integration).

## 🎯 Key Objectives
1. [cite_start]**Stealth Authorization:** Masking participant identities using EIP-5564[cite: 24].
2. [cite_start]**Self-Healing Keys:** Automated 30-day key rotation to prevent "stale access"[cite: 24, 25].
3. [cite_start]**Interoperability:** Structuring data using FHIR standards[cite: 25].

## 📂 Project Structure
- `encryptor.js`: Logic to lock medical records.
- `decryptor.js`: Logic to unlock records using the secret hex key.
- `/vault`: Local database for encrypted medical "blobs".