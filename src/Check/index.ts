import Entry from '../Entry'

export default class Check extends Entry {
  private checkNumber: number
  private checkDate: Date
  private recipient: string

  constructor(
    checkNumber: number,
    checkDate: Date,
    recipient: string,
    description: string,
    amount: number,
    isReconciled: boolean
  ) {
    super(amount, description, isReconciled)

    this.checkNumber = checkNumber
    this.checkDate = checkDate
    this.recipient = recipient
  }

  public getCheckNumber(): number {
    return this.checkNumber
  }

  public setCheckNumber(checkNumber: number): void {
    this.checkNumber = checkNumber
  }

  public getCheckDate(): Date {
    return this.checkDate
  }

  public setCheckDate(checkDate: Date): void {
    this.checkDate = checkDate
  }

  public getRecipient(): string {
    return this.recipient
  }

  public setRecipient(recipient: string): void {
    this.recipient = recipient
  }
}
