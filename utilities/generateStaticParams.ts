// Add this function to generate static params
export async function generateStaticParams() {
	// In a real application, you would fetch a list of valid IDs here
	// For example, from an API or database
  
	const pokemonIds = ['1', '2', '8']; // Example IDs
  
	return pokemonIds.map((id) => ({
	  id: id,
	}));
  }