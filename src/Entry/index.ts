export default class Entry {
  private amount: number
  private date: Date
  private description: string
  private isReconciled: boolean

  constructor(amount: number, description: string, isReconciled: boolean) {
    this.amount = amount
    this.date = new Date()
    this.description = description
    this.isReconciled = isReconciled
  }

  public getAmount(): number {
    return this.amount
  }

  public setAmount(amount: number): void {
    this.amount = amount
  }
  
  public getDate(): Date {
    return this.date
  }

  public setDate(date: Date): void {
    this.date = date
  }

  public getDescription(): string {
    return this.description
  }

  public setDescription(description: string): void {
    this.description = description
  }

  public getIsReconciled(): boolean {
    return this.isReconciled
  }

  public setIsReconciled(isReconciled: boolean): void {
    this.isReconciled = isReconciled
  }
}
