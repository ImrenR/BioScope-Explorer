const BacteriaCard = ({ BacteriaData }) => {
  return (
    <div className="container mt-4">
      <div className="row g-4">
        {BacteriaData.map((item, id) => {
          const { name, group, image, description } = item;
          return (
            <div key={id} className="col-12 col-md-6 col-lg-4">
              <div className="card" >
                <img src={image} className="card-img-top" alt={name} />
                <div className="card-body d-block">
                  <h5 className="card-title">{name}</h5>
                  <p className="card-text lh-sm">{description}</p>
                  <div className="group d-flex flex-column align-items-center">
                  <h6 className="card-group">{group}</h6>
                  <a
                    href="#"
                    className="btn btn-primary"
                  >
                    Click to see more..
                  </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BacteriaCard;
