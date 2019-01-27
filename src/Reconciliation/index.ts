import Register from '../register'
import Statement from '../statement'

export default class Reconciliation {
  private register: Register
  private statements: Statement[]

  constructor(register: Register, statements: Statement[]) {
    this.register = register
    this.statements = statements
  }

  // public compare(): void {
  //   this.checkRegisterEntries(this.register, this.statements)
  //   this.checkStatementEntries(this.statements, this.register)
  // }

  // private checkRegisterEntries(register: Register, statement: Statement) {
  //   this.register.map(registerItem => {
  //     console.log('hello')
  //   })
  // }

  // private checkStatementEntries(statement: Statement, register: Register) {
  //   this.statements.map(statement => statement.map(statementItem => {
  //     register.forEach(registerItem => {
  //       console.log('goodbye')
  //     })
  //   })
  // })
}
