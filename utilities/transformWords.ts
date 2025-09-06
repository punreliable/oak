const transformWords = (str: string): string => {
	const words = str.replace(/-/g, ' ').split(' ');
	const transformedWords = words.map((word) => {
		if (word.length === 0) {
			return '';
		}
		return word.charAt(0).toUpperCase() + word.slice(1);
	});
	return transformedWords.join(' ');
};

export default transformWords;
