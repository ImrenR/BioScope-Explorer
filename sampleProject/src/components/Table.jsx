const Table = ({Users}) => {
  return (
    <div className="container-fluid mt-4">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10 col-xl-8">
          <div className="table-responsive">
            <table className="table table-striped table-hover table-bordered">
              <thead className="table-dark">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Surname</th>
                  <th scope="col">Email</th>
                </tr>
              </thead>
              <tbody>
                {Users.map((item) => {
                  const { id, first_name, last_name, email} = item;
                  return (
                    <tr key={id}>
                      <td>{first_name}</td>
                      <td>{last_name}</td>
                      <td>{email}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
