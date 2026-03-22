const crypto = require('crypto');
const fs = require('fs');

// 1. Setup: Use a 32-byte key (256-bit)
const secretKey = crypto.randomBytes(32); 
const iv = crypto.randomBytes(12); // Initialization Vector

const encrypt = (text) => {
    const cipher = crypto.createCipheriv('aes-256-gcm', secretKey, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    const authTag = cipher.getAuthTag().toString('hex');
    
    return {
        content: encrypted,
        iv: iv.toString('hex'),
        tag: authTag
    };
};

// 2. Execution: Let's lock a "Medical Record"
const myMedicalRecord = "Patient John Doe: Diagnosis - Hypertension. Medication - Lisinopril.";
const lockedData = encrypt(myMedicalRecord);

// 3. Save to your local "Vault"
fs.writeFileSync('./vault/encrypted_record.json', JSON.stringify(lockedData, null, 2));
console.log("Record Secured in Local Vault!");
console.log("Your Key (DO NOT LOSE):", secretKey.toString('hex'));