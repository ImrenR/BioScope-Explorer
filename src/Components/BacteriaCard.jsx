const BacteriaCard = ({ filteredUsers, loading }) => {
  return (
    <div className="container mt-4">
      <div className="row g-4">
        {loading ? (
          <div>Loading...</div>
        ) : filteredUsers.length === 0 ? (
          <div className="container bg-body-secondary p-3 rounded">
            No users found..
          </div>
        ) : (
          filteredUsers.map((item) => {
            const { id, name, group, image, description } = item;
            return (
              <div key={id || name} className="col-12 col-md-6 col-lg-4">
                <div className="card h-100">
                  <img src={image} className="card-img-top" alt={name} />
                  <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text lh-sm">{description}</p>
                    <div className="d-flex flex-column align-items-center">
                      <h6 className="text-muted">{group}</h6>
                      <button className="btn btn-primary mt-2">
                        Click to see more..
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default BacteriaCard;