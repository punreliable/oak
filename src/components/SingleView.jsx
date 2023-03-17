const SingleView = () => {
  return (
    <div className="container card">
      <div className="row">
        <div className="offset-md-6 col-md-3 col-sm-6">
          <h2>HP</h2>
        </div>
        <div className="col-md-3 col-sm-6">
          <h2>Type</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <h1>Name</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <p>Image</p>
          <img src="" height="250" width="250" className="" alt="" title="" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <h3>Description</h3>
        </div>
        <div className="col-md-3 col-sm-12">
          <h3>Length</h3>
        </div>
        <div className="col-md-3 col-sm-6">
          <h3>Weight</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <h4>Move 1 Name</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <h4>Move 2 Name</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <h4>Move 3 Name</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <h4>Move 4 Name</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-6">
          <h5>Weakness</h5>
        </div>
        <div className="col-md-6 col-sm-6">
          <h5>Resistance</h5>
        </div>
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <h6>Expanded Description</h6>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="offset-md-9 col-md-3">
          <h6>Entry #</h6>
        </div>
      </div>
    </div>
  );
};

export default SingleView;
