import { IoFilterOutline } from "react-icons/io5";


const GramPN = () => {
  return (
<div className="group d-flex justify-content-between mx-4">
  <div className="dropdown">
  <button
    className="btn dropdown-toggle border-4"
    type="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
   
  >
    Gram Negative
  </button>
  <ul className="dropdown-menu">
    <li>
      <a className="dropdown-item" href="#">
        Gram Positive
      </a>
    </li>
    
  </ul>
</div>
<div className="icon">
  <button className="iconFilters d-flex justify-content-center align-content-center p-2 border-1">
  <h5 className="me-2">Filters</h5>
<IoFilterOutline size={28}
/>
</button>
</div>
</div>
)
}

export default GramPN