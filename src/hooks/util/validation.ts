export function validateStringNotEmpty(value: string) {
  if (value.trim().length === 0) {
    throw new Error('Invalid input - must not be empty.');
  }
}

export function validateNumber(number: number) {
  if (isNaN(number)) {
    throw new Error('Invalid number input.');
  }
}
