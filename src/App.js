import Header from "./Components/Header";
// import Data from "./Components/data";
import Card from "./Components/Card.jsx";
import "./styles/index.css";
import { useEffect, useRef, useState } from "react";

function App() {
  // Get value
  let InputVal = useRef();
  let SelectVal = useRef();

  const [countries, setCountries] = useState({
    isLoading: false,
    data: [],
    isError: "",
  });

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setCountries({
            isLoading: false,
            data: data,
            isError: "",
          });
        }
      })
      .catch((err) => console.log(err));
  }, []);

  //* Handle submit event
  const handleSubmit = (e) => {
    e.preventDefault();
    //* Fetch countries depend on their name
    fetch("https://restcountries.com/v3.1/name/" + InputVal.current.value)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setCountries({
            isLoading: false,
            //* This data comes from restcountries and equals to data
            data: data,
            isError: "",
          });
        }
      })
      .catch((err) => console.log(err));
  };

  //* Handle select event
  const handleSelect = () => {
    //* Fetch countries depend on their name
    fetch("https://restcountries.com/v3.1/region/" + SelectVal.current.value)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setCountries({
            isLoading: false,
            //* This data comes from restcountries and equals to data
            data: data,
            isError: "",
          });
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="app">
      {/* Components */}
      <Header />
      <section className="flags pt-5 pb-5">
        <div className="container w-100">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-12 col-sm-8 col-md-6 col-lg-4 mt-3">
                <div className="lab">
                  <span>
                    <em className="fa fa-search search"></em>
                  </span>
                  <input
                    type="search"
                    ref={InputVal}
                    id="in"
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Search for a country..."
                    autoFocus={true}
                  />
                </div>
              </div>
              <div className="col-12 col-sm-2 col-md-3 col-lg-2 ms-auto mt-3">
                <select
                  onChange={handleSelect}
                  ref={SelectVal}
                  className="form-select w-100"
                  aria-label="Default select example"
                >
                  <option>Filter by Region</option>
                  <option value="Africa">Africa</option>
                  <option value="America">America</option>
                  <option value="Asia">Asia</option>
                  <option value="Europe">Europe</option>
                  <option value="Oceania">Oceania</option>
                </select>
              </div>
            </div>
          </form>
        </div>
      </section>

      {countries.isLoading ? <h1>Loading....</h1> : ""}
      {countries.isError ? <h1>{countries.isError}</h1> : ""}
      {countries.data.length ? (
        <div className="container">
          <ul className="row gy-5 list-unstyled d-flex justify-content-center">
            {countries.data.map((item) => (
              <Card obj={item} />
            ))}
          </ul>
        </div>
      ) : (
        ""
      )}
      {/* {countries.data.map((country) => )} */}
    </div>
  );
}

export default App;
