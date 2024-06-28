export function generateRandomBase36(): string {
  return Math.random().toString(36).substring(2);
}
