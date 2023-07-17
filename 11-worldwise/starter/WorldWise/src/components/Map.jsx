import { useNavigate, useSearchParams } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import styles from "./Map.module.css";
// import { useState } from "react";
import { useCities } from "../contexts/CitiesContext";

const Map = () => {
  // const [mapPosition] = useState([40, 0]);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { cities } = useCities();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  const flagemojiToPNG = (flag) => {
    var countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt())
      .map((char) => String.fromCharCode(char - 127397).toLowerCase())
      .join("");
    return (
      <img src={`https://flagcdn.com/24x18/${countryCode}.png`} alt="flag" />
    );
  };

  const handleNavigation = () => {
    navigate("form");
  };
  return (
    <div className={styles.mapContainer} onClick={handleNavigation}>
      <MapContainer
        center={[lat, lng]}
        zoom={8}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => {
          return (
            <Marker
              key={city.id}
              position={[city.position.lat, city.position.lng]}
            >
              <Popup>
                <span>{flagemojiToPNG(city.emoji)}</span>{" "}
                <span>{city.cityName}</span>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default Map;
