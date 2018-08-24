const { should, expect, assert } = require('chai')
const { add, mul } = require('../src/math')

should()

add(2, 3).should.equal(5)
expect(add(2, 3)).to.be(5)
assert.equal(add(2, 3), 5)
//assert.equal(add(2, 3), 5)

// if(add(2,3) === 5) {
//   console.log('equal');
// } else{
//   console.log('no');
  
// }