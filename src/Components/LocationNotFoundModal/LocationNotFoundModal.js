import { useDispatch } from "react-redux";

import styles from "./LocationNotFoundModal.module.scss";
import Modal from "../UI/Modal/Modal";
import TransparentButton from "../UI/TransparentButton/TransparentButton";
import { getWeatherData_error } from "../../store/weatherSlice";

const LocationNotFound = () => {
  //// hooks
  const dispatch = useDispatch();

  /// helpers
  const handleCloseButton = () => {
    dispatch(getWeatherData_error(null));
  };
  /// return
  return (
    <Modal>
      <div className={styles.modalContainer}>
        <p className={styles.text}>
          Ooops!! Sorry but we couldn't find the location, please try to use the
          auto-complete 🧐
        </p>
        <TransparentButton
          color="black"
          onClick={handleCloseButton}
          className={styles.closeButton}
        >
          Close
        </TransparentButton>
      </div>
    </Modal>
  );
};

export default LocationNotFound;
