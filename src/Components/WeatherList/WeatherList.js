import { useSelector } from "react-redux";

import styles from "./WeatherList.module.scss";
import WeatherListItem from "./WeatherListItem/WeatherListItem";
import CloudLoading from "../UI/CloudLoading/CloudLoading";

const WeatherList = () => {
  //// hooks
  const weatherData = useSelector((state) => state.weatherSlice.data);
  const isLoading = useSelector((state) => state.weatherSlice.isDataFetching);

  /// return
  return (
    <div className={styles.listContainer}>
      {isLoading ? (
        <CloudLoading />
      ) : (
        weatherData.map((data) => (
          <WeatherListItem data={data} key={data.locationName} />
        ))
      )}
    </div>
  );
};

export default WeatherList;
