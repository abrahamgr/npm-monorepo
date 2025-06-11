/**
 * Returns a random number between min and max (inclusive).
 * @param min number
 * @param max number
 * @returns number
 */
export function useRandomNumber(min: number, max: number): number {
  if (min >= max) {
    throw new Error('Min must be less than Max')
  }
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * Returns a random number within a specified range.
 * @returns
 */
export function useRandomNumberInRange(range: [number, number]): number {
  const [min, max] = range
  if (min >= max) {
    throw new Error('Min must be less than Max')
  }
  return Math.floor(Math.random() * (max - min + 1)) + min
}
