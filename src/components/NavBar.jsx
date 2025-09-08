import { CiSearch } from "react-icons/ci";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light-subtle ms-auto ">
        
        <div className="container-sm">
          <a className="navbar-brand" href="#">
            BIOSCOPE
          </a>

          <button
            className="navbar-toggler btn-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
         <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>

            <form className="position-relative " role="search">
              
              <input
                className="form-control pe-5"
                type="search"
                placeholder="Search for more.."
                
              />
              <button className="btn position-absolute end-0 top-50 translate-middle-y me-2 bg-transparent border-0" type="submit">
              <CiSearch sixe={20}/> 
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
