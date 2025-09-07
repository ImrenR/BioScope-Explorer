const Filter = () => {
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

      <div className="d-flex justify-content-center mt-5">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Gram negative
          </button>
          <ul className="dropdown-menu">
            <li>
              <button className="dropdown-item" type="button">
                Gram positive
              </button>
            </li>
          </ul>
        </div>

        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Discover
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
             Tag-1
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
             Tag-2
            </a>
          </li>
            <li className="nav-item">
            <a className="nav-link" href="#">
              Tag-3
            </a>
          </li>
            <li className="nav-item">
            <a className="nav-link" href="#">
             Tag-4
            </a>
          </li>
            <li className="nav-item">
            <a className="nav-link" href="#">
              Tag-5
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Filter;
