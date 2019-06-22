export default function timeout(action: string, ms: number = 1000): Promise<void> {
  return new Promise((resolve, reject) => {
    const error = new Error(`Timeout: Could not ${action} after ${ms}ms`);
    setTimeout(() => reject(error), ms);
  });
}
