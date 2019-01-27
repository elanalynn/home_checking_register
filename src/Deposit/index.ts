import Entry from '../Entry'

export default class Deposit extends Entry {
  private depositId: number
  private statementId: number

  constructor(
    amount: number,
    depositId: number,
    description: string,
    isReconciled: boolean,
    statementId: number
  ) {
    super(amount, description, isReconciled)
    
    this.depositId = depositId
    this.statementId = statementId
  }
}
