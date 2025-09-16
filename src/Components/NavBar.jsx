const NavBar = ({resetAll}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"
        onClick={(e)=>resetAll(e)
        }>
          Bioscope
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
      
        >
          <span className="navbar-toggler-icon" />
        </button>
       
      </div>
    </nav>
  );
};

export default NavBar;