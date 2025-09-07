const BacteriaList = () => {
  return (
    <div className="container mt-5 d-flex justify-content-center">
  <div className="input-group w-100">
    <input
      type="text"
      className="form-control"
      list="datalistOptions"
      placeholder="Type to search..."
    />
    <button className="btn btn-outline-primary" type="submit">
      Search
    </button>
    <datalist id="datalistOptions">
      <option value="..." />
    
    </datalist>
  </div>
</div>

  );
};

export default BacteriaList;
