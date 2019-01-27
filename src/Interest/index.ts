import Entry from '../Entry'

export default class Interest extends Entry {
  private interestId: number
  private statementId: number

  constructor(
    amount: number,
    description: string,
    interestId: number,
    isReconciled: boolean = true,
    statementId: number,
  ) {
    super(amount, description, isReconciled)

    this.interestId = interestId
    this.statementId = statementId
  }
}
