import Register from '../register'
import Statement from '../statement'

export default class Reconciliation {
  private register: Register
  private statements: Statement[]

  constructor(register: Register, statements: Statement[]) {
    this.register = register
    this.statements = statements
  }

  public reconcile(): void {
    // Do the reconciliation
  }
}
