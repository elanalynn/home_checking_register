import Reconciliation from '../reconciliation'
import RegisterError from '../_shared/RegisterError'
import Statement from '../statement'

export default class Register {
  constructor(private bank: string, private accountNumber: string, private balance: number) {
    this.bank = bank
    this.accountNumber = accountNumber
    this.balance = balance
  }

  public addEntry(type: string, amount: number, description: string): void {
    console.log('create entry') 
  } 
  
  public reconcile(reconciliation: Reconciliation, statement: Statement): RegisterError[] {
    return [new RegisterError('some kind of reconciliation error')]
  }
}
