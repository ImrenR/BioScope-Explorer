const BacteriaCard = ({ BacteriaData }) => {
  return (
    <div className="container mt-4">
      <div className="row justify-content-center align-items-center">
        {BacteriaData.map((item)=> {
          const {name, group, image, description} =item
          return(
 <div className="col-12 col-lg-10 col-xl-8">
          <div className="card" style={{ width: "18rem" }}>
            <img src={image} className="card-img-top" alt="images" />
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card’s content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
          )
        })}
       
      </div>
    </div>
  );
};

export default BacteriaCard;
