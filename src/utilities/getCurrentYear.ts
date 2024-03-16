const getCurrentYear = () => {
	const date = new Date()
	return date.getFullYear().toString()
}

export default getCurrentYear