function getMachineName(inputString: string): string {
	if (inputString.length <= 33) {
		return ''; // Return empty string if the string is too short
	}

	const stringWithoutLastChar = inputString.slice(0, inputString.length - 1);
	const newString = stringWithoutLastChar.slice(34);
	return newString;
}

export default getMachineName;
