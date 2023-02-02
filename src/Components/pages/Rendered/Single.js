import "../RenderedCountry.css";
import "../../../styles/index.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const RenderCountry = () => {
  // Button back
  let navigate = useNavigate();

  const { name } = useParams();
  const [country, setCountry] = useState({
    data: [],
    isLoading: true,
  });

  const getCountry = () => {
    fetch("https://restcountries.com/v2/name/" + name)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setCountry({
            data: data,
            isLoading: false,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCountry();
  }, []);

  return (
    <>
      <div>
        {country.isLoading ? (
          <div id="loading-bar-spinner" class="spinner">
            <div class="spinner-icon"></div>
          </div>
        ) : (
          ""
        )}
        {country.data.map((baseCountry, index) => (
          <div key={index} className="container">
            <div className="d-flex align-items-center">
              <button onClick={() => navigate(-1)} className="back-btn">
                <span className="fas fa-arrow-left"></span> Back
              </button>
              <img
                style={{ width: 400 }}
                className="d-block m-auto mt-3 rounded"
                src={baseCountry.flags.svg}
                alt=""
              />
            </div>
            <div className="d-flex mt-5">
              <div>
                <p className="fs-5">
                  Native Name:{" "}
                  <span className="text-secondary">{baseCountry.name}</span>
                </p>
                <p className="fs-5">
                  Capital:{" "}
                  <span className="text-secondary">{baseCountry.capital}</span>{" "}
                </p>
                <p className="fs-5">
                  Region:{" "}
                  <span className="text-secondary">{baseCountry.region}</span>{" "}
                </p>
                <p className="fs-5">
                  Population:{" "}
                  <span className="text-secondary">
                    {baseCountry.population}
                  </span>{" "}
                </p>
                <p className="fs-5">
                  Timezone:{" "}
                  <span className="text-secondary">
                    {baseCountry.timezones}
                  </span>{" "}
                </p>
              </div>
              <div className="ms-5">
                <p className="fs-5">
                  Sub Region:{" "}
                  <span className="text-secondary">
                    {baseCountry.subregion}
                  </span>{" "}
                </p>
                <p className="fs-5">
                  Top Level Domain:{" "}
                  <span className="text-secondary">
                    {baseCountry.topLevelDomain}
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
