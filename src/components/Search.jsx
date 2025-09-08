const Search = () => {
  return (
    <>
    <form action="">
      <div className="container-sm  d-flex justify-content-center mt-5 ">
        <input
          type="text"
          className="form-control w-25 border-0 me-1"
          placeholder="Type to search..."
        />
        
        <button className="btn btn-light" type="submit">
          Search
        </button>
      </div>
</form>
      <div className="mt-4 text-center">
        <h4 className="text text-fw-bolder">Welcome to the Bioscope</h4>
        <h6 className="fw-lighter">
         
            10,000+ inspirational bacteria designs, illustrations and graphic
            elements
         
        </h6>
      </div>
    </>
  );
};

export default Search;
