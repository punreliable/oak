export function extractNumbers(formData: FormData): [string, string] {
  const num1Input = formData.get('num1');
  const num2Input = formData.get('num2');

  return [num1Input as string || '', num2Input as string || ''];
}
