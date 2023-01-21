const CountryUpper = () => {
  return (
    <section className="flags pt-5 pb-5">
      <div className="container w-100">
        <div className="row">
          <div className="col-12 col-sm-8 col-md-6 col-lg-4 mt-3">
            <div className="lab">
              <span>
                <em className="fa fa-search search"></em>
              </span>
              <input
                type="search"
                id="in"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Search for a country..."
                autofocus
              />
            </div>
          </div>
          <div className="col-12 col-sm-2 col-md-3 col-lg-2 ms-auto mt-3">
            <select
              className="form-select w-100"
              aria-label="Default select example"
            >
              <option selected disabled>
                Filter by Region
              </option>
              <option value="Africa">Africa</option>
              <option value="America">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CountryUpper;
