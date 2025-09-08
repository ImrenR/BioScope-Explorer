const BacteriaList = ({ bacteria }) => {
  return (
    <div className="container ">
      <div className="row ">
        {bacteria?.map((item, index) => {
          const { thumbnail, key, description } = item;
          const imageUrl = thumbnail?.url || "https://via.placeholder.com/150"; // fallback image

          return (
            <div key={index} className="col-12 col-sm-6 col-md-3 mb-4 mt-4">
             <div className="card h-100">
                <img src={imageUrl} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{key}</h5>
                  <p className="card-text">{description}</p>
                </div>
              </div>
            
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BacteriaList;
