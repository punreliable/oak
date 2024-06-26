export default function SelectOnChange() {
  const selectForm = useRef(null);
  const handleSubmit = () => {
    selectForm.current.submit();
  };
  return (
    <form ref={selectForm} method="get" onChange={handleSubmit}>
      <label className="formLabel" for="default_select">
        Select a Type
      </label>
      <div className="nes-select">
        <select required id="default_select">
          <option value="" disabled selected hidden>
            Select a Type...
          </option>
          <option value="1">Normal</option>
          <option value="2">Fighting</option>
          <option value="3">Flying</option>
          <option value="4">Poison</option>
          <option value="5">Ground</option>
          <option value="6">Rock</option>
          <option value="7">Bug</option>
          <option value="8">Ghost</option>
          <option value="9">Steel</option>
          <option value="10">Fire</option>
          <option value="11">Water</option>
          <option value="12">Grass</option>
          <option value="13">Electric</option>
          <option value="14">Psychic</option>
          <option value="15">Ice</option>
          <option value="16">Dragon</option>
          <option value="17">Dark</option>
          <option value="18">Fairy</option>
          <option value="19">Unknown</option>
          <option value="20">Shadow</option>
        </select>
      </div>
    </form>
  );
}
