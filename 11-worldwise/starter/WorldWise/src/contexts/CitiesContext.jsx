/* eslint-disable react/prop-types */
import { useState, useEffect, createContext, useContext } from "react";

const CitiesContext = createContext();

const BASE_URL = "http://localhost:9000";

const CitiesProvider = ({ children }) => {
  const [cities, setCities] = useState([]);
  const [loading, setisLoading] = useState(false);

  const fetchCities = async () => {
    try {
      setisLoading(true);
      const res = await fetch(`${BASE_URL}/cities`);
      const data = await res.json();
      data;
      setCities(data);
    } catch {
      alert("There was an error loading data");
    } finally {
      setisLoading(false);
    }
  };

  useEffect(() => {
    fetchCities();
  }, []);

  return (
    <CitiesContext.Provider
      value={{
        cities,
        loading,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
};

const useCities = () => {
  const context = useContext(CitiesContext);
  if (context === undefined) {
    throw new Error("Cities context was used outside the cities provider");
  }
  return context;
};

export { CitiesProvider, useCities };
