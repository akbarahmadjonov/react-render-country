import Header from "./Components/Header";
import CountryUpper from "./Components/Country-upper";
import Country from "./Components/Country";
import "./styles/index.css";
import Data from './Components/data'

function App() {
  return (
    <div className="app">
      <Header />
      <CountryUpper />
      <div className="container d-flex flex-wrap justify-content-center">

        <ul style={{'display': 'flex', 'flexWrap': 'wrap'}}>
          {
            Data.map((item) => <Country
            name={item.name}
            img={item.img}
            region={item.region}
            capital={item.capital}
            population={item.population}
            />)
        }
        </ul>

      </div>
    </div>
  );
}

export default App;
