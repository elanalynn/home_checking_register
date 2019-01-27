import Register from './index'
import { expect } from 'chai'
import 'mocha'

describe('Register', () => {
  describe('constructor', () => {
    it('constructs a Register object', () => {
      const register: Register = new Register()
      expect(register).to.equal(true)
    })
  })
})
