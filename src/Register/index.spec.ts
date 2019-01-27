import Register from './index'
import { expect } from 'chai'
import 'mocha'

describe('Register', () => {
  describe('constructor', () => {
    it('constructs a Register object', () => {
      const register: Register = new Register('Wells Fargo', '1234ABC', 25.00)
      expect(register).to.equal(true)
    })
  })
})
