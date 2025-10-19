export const getRandomKantoPokemonByID = () => {
	const number = Math.floor(Math.random() * 151) + 1;
	if (number < 10) {
		return `0${number}`;
	}
	return `${number}`;
};
