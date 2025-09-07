const Search = () => {
  return (
    <div>
      <div>
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
        <div className="m-4 text-center">
          <h4>Welcome to the Bioscope Web</h4>
          <h6>
            <i>
              10,000+ inspirational bacteria designs, illustrations and graphic
              elements
            </i>
          </h6>
        </div>
      </div>

      
    </div>
  );
};

export default Search;
