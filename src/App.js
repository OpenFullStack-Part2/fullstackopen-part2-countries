import { useState, useEffect} from "react";
import axios from "axios";
import CountriesSearch from "./components/CountriesSearch";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");
 
  

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);


  const handleSearchChange = (event) => {
    setFilter(event.target.value);
  };

 

  return (
    <div>
      <CountriesSearch
        filter={filter}
        handleSearchChange={handleSearchChange}
        countries={countries}
       
      />
    </div>
  );
};

export default App;
