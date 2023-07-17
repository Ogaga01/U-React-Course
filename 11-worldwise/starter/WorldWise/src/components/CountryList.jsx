/* eslint-disable react/prop-types */
import Message from "./Message";
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import { useCities } from "../contexts/CitiesContext";

const CountryList = () => {
  const { isLoading, cities } = useCities();
  if (isLoading) {
    return <Spinner />;
  }
  if (!cities.length) {
    return (
      <Message message={"Add your first city by clicking on city on the map"} />
    );
  }
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country)) {
      return [...arr, { country: city.country, emoji: city.emoji }];
    } else return arr;
  }, []);
  return (
    <ul className={styles.countryList}>
      {countries.map((country) => {
        return <CountryItem country={country} key={country.country} />;
      })}
    </ul>
  );
};

export default CountryList;
