const BacteriaCard = ({ BacteriaData }) => {
  return (
    <div className="container mt-4">
      <div className="row">
        {BacteriaData.map((item, id) => {
          const { name, group, image, description } = item;
          return (
            <div key={id} className="col-12 col-sm-6 col-md-4 col-l-3 mb-4">
              <div className="card d-flex flex-column align-items-center" style={{ width: "18rem" }}>
                <img src={image} className="card-img-top w-75" alt={name} />
                <div className="card-body ">
                  <h5 className="card-title">{name}</h5>
                  <p className="card-text">{description}</p>
                  <h6 className="card-group">{group}</h6>
                  <a
                    href="#"
                    className="btn btn-primary mt-auto"
                  >
                    Click to see more..
                  </a>
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
