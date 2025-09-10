const BacteriaCard = ({ bacterium }) => {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card h-100 shadow-sm">
        <div className="card-body">
          <h5 className="card-title text-primary">{bacterium.name}</h5>
          <div className="mb-2">
            <span className="badge bg-secondary me-2">{bacterium.type}</span>
            <span className="badge bg-info">{bacterium.shape}</span>
          </div>
          <p className="card-text">
            <strong>Habitat:</strong> {bacterium.habitat}
          </p>
          <p className="card-text">{bacterium.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BacteriaCard;
