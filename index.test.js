const base64 = require('.')
it(`'a' encoded to 'YQ=='`, () => {
  expect(base64.encode('a')).toBe('YQ==')
})
it(`'wjw' encoded to 'd2p3'`, () => {
  expect(base64.encode('wjw')).toBe('d2p3')
})
it(`'package name is w-base64' encoded to 'cGFja2FnZSBuYW1lIGlzIHctYmFzZTY0'`, () => {
  expect(base64.encode('package name is w-base64')).toBe('cGFja2FnZSBuYW1lIGlzIHctYmFzZTY0')
})
it(`'ZGVjb2Rl' decoded to 'decode'`, () => {
  expect(base64.decode('ZGVjb2Rl')).toBe('decode')
})
it(`'bnBtIGkgLVMgdy1iYXNlNjQ=' decoded to 'npm i -S w-base64'`, () => {
  expect(base64.decode('bnBtIGkgLVMgdy1iYXNlNjQ=')).toBe('npm i -S w-base64')
})
it(`'encode then decode' encoded then decoded to self`, () => {
  expect(base64.decode(base64.encode('encode then decode'))).toBe('encode then decode')
})