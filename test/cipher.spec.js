const cipher = require('../src/cipher');

it('returns encoded string', () => expect(cipher('attack at dawn', 25)).toEqual('zsszbj zs czvm'));
