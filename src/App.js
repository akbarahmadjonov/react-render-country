import Header from "./Components/Header";
import CountryUpper from "./Components/Country-upper";
import Country from "./Components/Country";

function App() {
  return (
    <div className="app">
      <Header />
      <CountryUpper />
      <div className="container d-flex flex-wrap justify-content-center">
        <Country />
        <Country />
        <Country />
        <Country />
        <Country />
        <Country />
        <Country />
        <Country />
      </div>
    </div>
  );
}

export default App;
