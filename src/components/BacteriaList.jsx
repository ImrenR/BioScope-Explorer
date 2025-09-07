const BacteriaList = () => {
  return (
    <div className="container d-flex justify-content-center mt-5">
  <div className="input-group">
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
