const crypto = require('crypto');

// Create hashed string using PBKDF2 (Password based key derivative function 2)
function hashString(string) {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.pbkdf2Sync(string, salt, 2048, 32, 'sha512').toString('hex');
  return `${salt}\$${hash}`;
}

// Checking the password hash
function verifyHash(password, original) {
  const [salt, originalHash] = original.split('$');
  const hash = crypto.pbkdf2Sync(password, salt, 2048, 32, 'sha512').toString('hex');
  return hash === originalHash;
}

let hash = hashString('test');
console.log('HASH = '+hash);
console.log(verifyHash('test',hash));  // will return true
console.log(verifyHash('test1',hash)); // will return false
