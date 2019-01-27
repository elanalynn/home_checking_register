import Entry from '../Entry'

export default class Check extends Entry {
  private checkDate: Date
  private checkNumber: number
  private recipient: string

  constructor(
    amount: number,
    checkNumber: number,
    checkDate: Date,
    description: string,
    isReconciled: boolean,
    recipient: string,
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
