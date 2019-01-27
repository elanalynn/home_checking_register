import Entry from '../Entry'

export default class Deposit extends Entry {
  private depositId: number
  private depositDate: Date
  private statementId: number

  constructor(
    amount: number,
    depositDate: Date,
    depositId: number,
    description: string,
    isReconciled: boolean,
    statementId: number
  ) {
    super(amount, description, isReconciled)
    
    this.depositId = depositId
    this.depositDate = depositDate
    this.statementId = statementId
  }
}
