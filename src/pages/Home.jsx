import SearchForm from "../components/SearchForm";

const HomePage = (props) => {
  const submitEntryDataHandler = (enteredData) => {
    const entryData = {
      ...enteredData,
      id: Math.random().toString(),
    };

    props.onAddEntry(entryData);
    console.log(entryData);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <SearchForm onSubmitEntryData={submitEntryDataHandler} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
