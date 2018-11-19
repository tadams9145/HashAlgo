const crypto = require('crypto');

function sha256Hash(string) {
  const hash = crypto.createHash('sha256');
  hash.update(string);
  return hash.digest('hex');
}
// function sha128Hash(string) {
//   const hash = crypto.createHash('sha128');
//   hash.update(string);
//   return hash.digest('hex');
// }
function sha512Hash(string) {
  const hash = crypto.createHash('sha512');
  hash.update(string);
  return hash.digest('hex');
}
function md5Hash(string) {
  const hash = crypto.createHash('md5');
  hash.update(string);
  return hash.digest('hex');
}

console.log('test', md5Hash('test'));
console.log('test', sha256Hash('test'));
console.log('test', sha512Hash('test'));

console.log('test', sha128Hash('test'));
console.log('test1', sha128Hash('test1'));

console.log('test', md5Hash('test'));
console.log('test', sha128Hash('test'));
