import Reconciliation from './index'
import Register from '../Register'
import { expect } from 'chai'
import 'mocha'

describe('Reconciliation', () => {
  describe('constructor', () => {
    it('constructs a Reconciliation object', () => {
      const register: Register = new Register('Wells Fargo', '1234ABC', 25.00)
      const statements = []
      const reconciliation: Reconciliation = new Reconciliation(register, statements)
      expect(reconciliation).to.equal(true)
    })
  })
})
