/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";
import { useCities } from "../contexts/CitiesContext";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

const flagemojiToPNG = (flag) => {
  var countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt())
    .map((char) => String.fromCharCode(char - 127397).toLowerCase())
    .join("");
  return (
    <img src={`https://flagcdn.com/24x18/${countryCode}.png`} alt="flag" />
  );
};

const CityItem = ({ city }) => {
  const { currentCity } = useCities();
  const { cityName, emoji, date, id, position } = city;
  return (
    <li>
      <Link
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
        className={`${styles.cityItem} ${
          id === currentCity.id ? styles["cityItem--active"] : ""
        }`}
      >
        <span className={styles.emoji}>{flagemojiToPNG(emoji)}</span>
        <h2 className={styles.name}>{cityName}</h2>
        <time className={styles.date}>({formatDate(date)})</time>
        <button type="button" className={styles.deleteBtn}>
          &times;
        </button>
      </Link>
    </li>
  );
};

export default CityItem;
