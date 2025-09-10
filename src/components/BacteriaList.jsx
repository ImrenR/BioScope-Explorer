import BacteriaCard from "./BacteriaCard";

const BacteriaList = ({ 
  filtered, 
  searchTerm, 
  setSearchTerm, 
  
}) => {
  return (
    <div>
     
      <div className="row mb-4">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Search & Filter</h5>
              <div className="mb-3">
                <label htmlFor="searchInput" className="form-label">
                  Search Bacteria
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="searchInput"
                  placeholder="Search by name, description, or habitat..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
             

              {/* Results Count */}
              <div className="text-muted">
                Showing {filtered.length} bacteria
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bacteria Grid */}
      <div className="row">
        {filtered.length > 0 ? (
          filtered.map((bacterium) => (
            <BacteriaCard key={bacterium.id} bacterium={bacterium} />
          ))
        ) : (
          <div className="col-12">
            <div className="text-center py-5">
              <h4 className="text-muted">No bacteria found</h4>
              <p className="text-muted">
                Try adjusting your search term or filters
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BacteriaList;