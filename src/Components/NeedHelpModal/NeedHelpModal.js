import { useDispatch } from "react-redux";

import styles from "./NeedHelpModal.module.scss";
import Modal from "../UI/Modal/Modal";
import TransparentButton from "../UI/TransparentButton/TransparentButton";
import { setNeedMore } from "../../store/UISlice";

const NeedHelpMpdal = () => {
  //// hooks
  const dispatch = useDispatch();

  /// helpers
  const handleCloseButton = () => {
    dispatch(setNeedMore(false));
  };
  /// return
  return (
    <Modal>
      <div className={styles.modalContainer}>
        <p className={styles.text}>
          If you'd like to add any features to this application please contact:
        </p>
        <p className={styles.email}>blabla@gmail.com</p>
        <TransparentButton className={styles.closeButton} onClick={handleCloseButton}>Close</TransparentButton>
      </div>
    </Modal>
  );
};

export default NeedHelpMpdal;
