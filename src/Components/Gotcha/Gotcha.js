import { useDispatch } from "react-redux";

import styles from "./Gotcha.module.scss";
import Modal from "../UI/Modal/Modal";
import TransparentButton from "../UI/TransparentButton/TransparentButton";
import { setGotcha } from "../../store/UISlice";

const Gotcha = () => {
  //// hooks
  const dispatch = useDispatch();

  /// helpers
  const handleCloseButton = () => {
    dispatch(setGotcha(false));
  };
  /// return
  return (
    <Modal>
      <div className={styles.modalContainer}>
        <p className={styles.text}>
         YEAP!! THIS APP IS RESPONSIVE! 😅
        </p>
        <TransparentButton
          color='black'
          onClick={handleCloseButton}
          className={styles.closeButton}
        >
          Close
        </TransparentButton>
      </div>
    </Modal>
  );
};

export default Gotcha;
