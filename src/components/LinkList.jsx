import { IoFilter } from "react-icons/io5";

const LinkList = () => {
  return (

<div className="d-flex justify-content-between align-items-center w-100 p-3 mt-5 fs-6 ">
        <div className="dropdown ">
          <button
            className="btn dropdown-toggle text-muted btn-outline-secondary"
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
            <button
            className="btn text-muted border border-light bg-light"
            type="button"
         
          >
            Discover
          </button>
          <li className="nav-item">
            <a className="nav-link text-muted text-decoration-none text-dark" href="#">
             Tag-1
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-muted text-decoration-none text-dark" href="#">
             Tag-2
            </a>
          </li>
            <li className="nav-item">
            <a className="nav-link text-muted text-decoration-none text-dark" href="#">
              Tag-3
            </a>
          </li>
            <li className="nav-item">
            <a className="nav-link text-muted text-decoration-none text-dark" href="#">
             Tag-4
            </a>
          </li>
            <li className="nav-item">
            <a className="nav-link text-muted text-decoration-none text-dark" href="#">
              Tag-5
            </a>
          </li>
        </ul>
        <button className="btn d-flex justify-content-between gap-2 p-2 border border-light bg-light ">
          <IoFilter/>
          <h6 className="fs-6">Filters</h6>
        </button>
      </div>
 
  )
}

export default LinkList