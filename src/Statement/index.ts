export default class Statement {
  constructor(private bankStatementId: string, private dateIssued: Date, private reconciliationId: number) {
    this.bankStatementId: string = bankStatementId
    this.dateIssued: Date = dateIssued
    this.reconciliationId: number = reconciliationId
  }
}
