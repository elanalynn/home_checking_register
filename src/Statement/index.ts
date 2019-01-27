export default class Statement {
  private bankStatementId: string
  private dateIssued: Date
  private reconciliationId: number

  constructor(bankStatementId: string, dateIssued: Date, reconciliationId: number) {
    this.bankStatementId = bankStatementId
    this.dateIssued = dateIssued
    this.reconciliationId = reconciliationId
  }
}
