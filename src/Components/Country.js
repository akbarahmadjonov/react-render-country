import img from "../assets/images/belgium.svg";

const Header = () => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-0">
      <div className="card p-0 mb-5 ms-2 me-2">
        <img className="card-img-top" src={img} alt="Image" />
        <div className="card-body shadow-sm">
          <h5 className="card-title weight-bold">Belgium</h5>
          <p className="card-text-population">11555997</p>
          <p className="card-text-region">Europe</p>
          <p className="card-text-capital">Brussels</p>
          <a className="btn btn-outline-info mt-3" href="#">
            More info
          </a>
        </div>
      </div>
    </div>
  );
};
export default Header;
