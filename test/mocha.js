const { should, expect, assert } = require('chai')
const { add, mul, cover } = require('../src/math')

describe('#math', () => {
  describe('add', () => {
    it('shold return 5 by add(2, 3)', () => {
      assert.equal(add(2, 3), 5)
    })
  });

  describe('mul', () => {
    it('shold return 6 by mul(2, 3)', () => {
      assert.equal(mul(2, 3), 6)
    })
  })

  describe('cover', () => {
    it('shold return a > b', () => {
      expect(cover(3, 2)).to.equal(-1)
    })
  })

  describe('cover', () => {
    it('sholud return a + b', () => {
      expect(cover(3,3)).to.equal(6)
    })
  })

  describe('cover', () => {
    it('sholud return a < b', () => {
      expect(cover(3,9)).to.equal(-18)
    })
  })
})