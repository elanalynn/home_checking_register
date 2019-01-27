import Entry from '../Entry'

export default class Correction extends Entry {
  private errorId: number

  constructor(
    amount: number,
    description: string,
    errorId: number,
    isReconciled: boolean = true
  ) {
    super(amount, description, isReconciled)

    this.errorId = errorId
  }

  getErrorId(): number {
    return this.errorId
  }

  setErrorId(errorId: number): void {
    this.errorId = errorId
  }
}
