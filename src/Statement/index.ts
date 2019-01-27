export default class Statement {
  private bankStatementId: string
  private dateIssued: Date
  private reconciliationId: number

  constructor(bankStatementId: string, dateIssued: Date, reconciliationId: number) {
    this.bankStatementId = bankStatementId
    this.dateIssued = dateIssued
    this.reconciliationId = reconciliationId
  }

  public getbankStatementId(): string {
    return this.bankStatementId
  }

  public setbankStatementId(bankStatementId: string): void {
    this.bankStatementId = bankStatementId
  }

  public getDateIssued(): string {
    return this.bankStatementId
  }

  public setDateIssued(bankStatementId: string): void {
    this.bankStatementId = bankStatementId
  }

  public getReconciliationId(): number {
    return this.reconciliationId
  }

  public setReconciliationId(reconciliationId: number): void {
    this.reconciliationId = reconciliationId
  }
}
