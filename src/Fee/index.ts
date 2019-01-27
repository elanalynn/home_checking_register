import Entry from '../Entry'

export default class Fee extends Entry {
  private feeId: number
  private statementId: number

  constructor(
    amount: number,
    feeId: number,
    description: string,
    isReconciled: boolean = true,
    statementId: number
  ) {
    super(amount, description, isReconciled)

    this.feeId = feeId
    this.statementId = statementId
  }
}
