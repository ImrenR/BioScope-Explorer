const BacteriaList = ({ bacteria, getData }) => {
  return (
    <div className="container row ">
      {bacteria?.map((item, index) => {
        const { thumbnail, key, description } = item;
        return (
          <div key={index} className= "col-12 col-sm-6 col-md-3 mb-4 mt-4">
            {thumbnail?.url && <img src={thumbnail} alt={key} />}
            <p>{key}</p>
            <p>{description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default BacteriaList;
