import React, { useState, useMemo , useDeferredValue } from "react";
import LanguageList from "./LanguageList";
import Button from "./Button";
import Weather from "./Weather";

const CountriesSearch = ({ filter, handleSearchChange, countries }) => {
  const deferredFilter = useDeferredValue(filter, { timeoutMs: 500 });
  const [show, setShow] = useState(false);
  const [showCountry, setShowCountry] = useState({});
  

  const result = useMemo(() => {
    return countries.filter(
      (countrie) =>
        countrie.name.common
          .toLowerCase()
          .includes(deferredFilter.toLowerCase()) && deferredFilter !== ""
    );
  }, [countries, deferredFilter]);

  

 

  const handleShowClick = (countrie) => {
    setShow(!show);
    setShowCountry(countrie);
  };

  return (
    <div>
      find countries: <input value={filter} onChange={handleSearchChange} />
      {result.length === 1 ? (
        <div>
          <h1>{result[0].name.common}</h1>

          <p>Capital {result[0].capital}</p>
          <p>Area {result[0].area}</p>
          <h2> Languages </h2>
          <LanguageList languages={result[0].languages} />
          <img
            src={result[0].flags.png}
            alt="flag"
            width="160"
            height="160"
          ></img>
          <Weather capital={result[0].capital} />
         
        </div>
      ) : result.length < 10 ? (
        result.map((countrie, index) => (
          <div key={index}>
          <p>
            {countrie.name.common}
            <Button
              show={show && showCountry === countrie}
              handleShowClick={() => handleShowClick(countrie)}
            />
            </p>
            {show && showCountry === countrie && (
              <div>
          <h1>{countrie.name.common}</h1>

          <p>Capital {countrie.capital}</p>
          <p>Area {countrie.area}</p>
          <h2> Languages </h2>
          <LanguageList languages={countrie.languages} />
          <img
            src={countrie.flags.png}
            alt="flag"
            width="160"
            height="160"
          ></img>
        </div>
            )}
          </div>
          
        ))
      ) : (
        <p>Too many matches, specify another filter</p>
      )}
    </div>
  );
};

export default CountriesSearch;
