const BacteriaCard = ({ BacteriaData }) => {
  return (
    <div className="container mt-4">
      <div className="row justify-content-center align-items-center">
        {BacteriaData.map((item, id) => {
          const { name, group, image, description } = item;
          return (
            <div key={id} className="col col-12 col-lg-10 col-xl-8">
              <div className="card" style={{ width: "18rem" }}>
                <img src={image} className="card-img-top" alt="images" />
                <div className="card-body">
                  <h5 className="card-title">{name}</h5>
                  <p className="card-text">{description}</p>
                  <h6 className="card-group">{group}</h6>
                  <a
                    href="#"
                    className="btn btn-primary bg-body-secondary border-0 text-black"
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
