export const getURLtoPath = (url: string): string => {
	const trimmedURL = url.substring(26, url.length - 1);
	return trimmedURL;
};
