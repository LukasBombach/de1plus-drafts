/* public static async connect2(peripheral: Peripheral, timeout: number): Promise<void> {
  return new Promise((resolve, reject) => {
    const error = new Error(`Timeout: Could not connect after ${timeout}ms`);
    peripheral.connect(error => (error ? reject(error) : resolve(peripheral)));
    setTimeout(() => reject(error), timeout);
  });
}

public static async disconnect2(peripheral: Peripheral, timeout: number): Promise<void> {
  return new Promise((resolve, reject) => {
    const error = new Error(`Timeout: Could not disconnect after ${timeout}ms`);
    peripheral.disconnect(error => (error ? reject(error) : resolve()));
    setTimeout(() => reject(error), timeout);
  }); */
