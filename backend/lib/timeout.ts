export default class Timeout {
  private timeout: NodeJS.Timeout;

  constructor(action: string, ms: number, reject: (error: Error) => void) {
    const error = new Error(`Timeout: Could not ${action} after ${ms}ms`);
    this.timeout = setTimeout(() => reject(error), ms);
  }

  public stop() {
    clearTimeout(this.timeout);
  }
}
