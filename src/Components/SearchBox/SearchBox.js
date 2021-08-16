import { useRef, useEffect, useState } from "react";
import places from "places.js";
import { useDispatch, useSelector } from "react-redux";

import styles from "./SearchBox.module.scss";
import { getWeatherData } from "../../store/weatherSlice";
import { setLocationNotFound } from "../../store/UISlice";
import SearchWeatherButton from "../UI/SearchWeatherButton/SearchWeatherButton";
import LocationNotFoundModal from "../LocationNotFoundModal/LocationNotFoundModal";

const SearchBox = (props) => {
  /// props
  const { className } = props;
  /// hooks
  const inputRef = useRef();
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [location, setLocation] = useState(null);
  const locationNotFound = useSelector(
    (state) => state.UISlice.modal.locationNotFound
  );
  console.log(111111, locationNotFound);
  useEffect(() => {
    const autocomplete = places({
      container: inputRef.current,
    });

    autocomplete.on("change", (event) => {
      console.log("zzzzzzzz", event.suggestion);
      setValue(event.suggestion.value);
      setLocation(event.suggestion);
    });
  }, []);

  //// helpers
  const onChange = (event) => {
    setValue(event.target.value);
  };

  const searchHandler = (event) => {
    event.preventDefault();
    if (location) {
      dispatch(getWeatherData(location));
    } else {
      dispatch(setLocationNotFound(true));
    }
    setValue("");
    setLocation(null);
  };

  //// return
  return (
    <>
      {locationNotFound && <LocationNotFoundModal />}
      <form
        className={`${styles.searchBoxContainer} ${className}`}
        onSubmit={searchHandler}
      >
        <input
          onBlur={() => (inputRef.current.value = "")}
          value={value}
          onChange={onChange}
          className={styles.search}
          ref={inputRef}
          id="address-input"
          placeholder="Where are we going?"
        />
        <SearchWeatherButton />
      </form>
    </>
  );
};

export default SearchBox;
