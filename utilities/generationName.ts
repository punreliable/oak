function generationName(inputString: string): string {
	const hyphenIndex = inputString.indexOf('-');

	if (hyphenIndex === -1) {
		return inputString; // Return original string if no hyphen is found
	}

	const firstWord = inputString.substring(0, hyphenIndex);
	const secondWord = inputString.substring(hyphenIndex + 1);

	const capitalizedFirstWord = firstWord.charAt(0).toUpperCase() + firstWord.slice(1);
	const capitalizedSecondWord = secondWord.toUpperCase();

	return `${capitalizedFirstWord} ${capitalizedSecondWord}`;
}

export default generationName;
