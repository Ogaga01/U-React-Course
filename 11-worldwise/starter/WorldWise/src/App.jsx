import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import City from "./components/City";
import Form from "./components/Form";

import { useEffect, useState } from "react";
import CountryList from "./components/CountryList";

const App = () => {
  const [cities, setCities] = useState([]);
  const [loading, setisLoading] = useState(false);

  const BASE_URL = "http://localhost:9000";

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
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<Navigate replace to="cities" />} />
          <Route
            path="cities"
            element={<CityList cities={cities} isLoading={loading} />}
          />
          <Route path="cities/:id" element={<City />} />
          <Route
            path="countries"
            element={<CountryList cities={cities} isLoading={loading} />}
          />
          <Route path="form" element={<Form />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
