import Header from "./Components/Header";
// import Data from "./Components/data";
import Card from "./Components/Card.jsx";
import "./styles/index.css";
import { RenderCountry } from "./Components/pages/Rendered/Single";
import { useEffect, useRef, useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  // Get value
  let InputVal = useRef();
  let SelectVal = useRef();

  const [countries, setCountries] = useState({
    isLoading: true,
    data: [],
    isError: false,
  });

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setCountries({
            isLoading: false,
            data: data,
            isError: false,
          });
        }
      })
      .catch((err) => {
        if (err) {
          setCountries({
            isError: true,
          });
        }
      });
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
            isError: false,
          });
        }
      })
      .catch((err) => {
        if (err) {
          setCountries({
            isError: true,
          });
        }
      });
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
            isError: false,
          });
        }
      })
      .catch((err) => {
        setCountries({
          isError: true,
        });
      });
  };

  return (
    <div className="app">
      {/* Components */}
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div>
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
              {countries.isLoading ? (
                <div id="loading-bar-spinner" class="spinner">
                  <div class="spinner-icon"></div>
                </div>
              ) : (
                ""
              )}
              {countries.isError ? <h1>Nothing found </h1> : ""}
              {countries.data ? (
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
            </div>
          }
        />
        {/* Routes */}
        <Route path="/single/:name" element={<RenderCountry />} />
      </Routes>
    </div>
  );
}

export default App;
