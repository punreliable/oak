import reactLogo from "../assets/react.svg";

const SearchForm = () => {
  const onformSubmissionHandler = () => {};
return(
	  <div className="App">
	  	<div>
	  		<a href="https://reactjs.org" target="_blank">
				<img src={reactLogo} className="logo react" alt="React logo" />
	  		</a>
		</div>
		<h1>Search the Pokedex</h1>
		<div className="card">
			<form onSubmit={onformSubmissionHandler}>
				<div class="form-group">
					<fieldset>
						<label htmlFor="entryNumber">Number</label>
						<input
						className="form-control"
						name="entryNumber"
						type="number"
						min="1"
						max="151"
						step="1"
						inputmode="numeric"
						pattern="\d*"
						placeholder="25"
						/>
					</fieldset>
				</div>
			</form>
			<button
			type="submit"
			className="btn btn-primary mt-2"
			onClick=""
			>
				Ask the Professor
			</button>
		</div>
	</div>
);


};

export default SearchForm;
