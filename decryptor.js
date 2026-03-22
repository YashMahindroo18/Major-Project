const crypto = require('crypto');
const fs = require('fs');

// 1. Load the "Locked" data from your local vault
const rawData = fs.readFileSync('./vault/encrypted_record.json');
const lockedData = JSON.parse(rawData);

// 2. PASTE YOUR KEY HERE 
// (Copy the hex string that appeared in your terminal when you ran encryptor.js)
const mySecretKeyHex = '3c436f5cf5105ad0415ed76d57d2241f4b4f8d3957f53b5ddb98523c803c71a3'; 
const secretKey = Buffer.from(mySecretKeyHex, 'hex');

const decrypt = (encryptedData) => {
    const iv = Buffer.from(encryptedData.iv, 'hex');
    const tag = Buffer.from(encryptedData.tag, 'hex');
    
    const decipher = crypto.createDecipheriv('aes-256-gcm', secretKey, iv);
    decipher.setAuthTag(tag);
    
    let decrypted = decipher.update(encryptedData.content, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    
    return decrypted;
};

// 3. Try to unlock it
try {
    const originalRecord = decrypt(lockedData);
    console.log("🔓 Decryption Successful!");
    console.log("Recovered Data:", originalRecord);
} catch (error) {
    console.error("❌ Decryption Failed! Wrong key or tampered data.");
}