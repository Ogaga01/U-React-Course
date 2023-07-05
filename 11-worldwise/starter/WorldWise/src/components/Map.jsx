import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

const Map = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  const handleNavigation = () => {
    navigate("form");
  };
  return (
    <div className={styles.mapContainer} onClick={handleNavigation}>
      <h1>Map</h1>
      <h1>{lat}</h1>
      <h1>{lng}</h1>
    </div>
  );
};

export default Map;
