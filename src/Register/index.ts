import Reconciliation from '../reconciliation'
import Statement from '../statement'

export default class Register {
  private bank: string
  private accountNumber: string
  private balance: number

  constructor(bank: string, accountNumber: string, balance: number) {
    this.bank = bank
    this.accountNumber = accountNumber
    this.balance = balance
  }

  public getBank(): string {
    return this.bank
  }

  public setBank(bank: string): void {
    this.bank = bank
  }

  public getAccountNumber(): string {
    return this.accountNumber
  }

  public setAccountNumber(accountNumber: string): void {
    this.accountNumber = accountNumber
  }

  public getBalance(): number {
    return this.balance
  }

  public setBalance(balance: number): void {
    this.balance = balance
  }
  
  public reconcile(reconciliation: Reconciliation, statements: Statement[]): void {
    // do something
  }
}
