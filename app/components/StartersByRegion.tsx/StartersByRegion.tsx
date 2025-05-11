 
const StartersByRegion = () => {

	const arrayOfStarters = [
		{ name: 'Bulbasaur', region: 'Kanto' },
	];

	const starters = () => { 
		let output: string = ''; 
		for (let i = 0; i < 9; i++) {
		output = output + `<p className="mt-4 text-lg">Starter Number: ${i}</p>`;
	}
	return output;
}

	  return (
	<div className="flex flex-col items-center justify-center w-full h-full">
	  <h1 className="text-2xl font-bold">Starters by Region</h1>
	  {starters()}
	</div>
  );
}