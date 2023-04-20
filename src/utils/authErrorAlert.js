import alertSlice from "../store/slice/alert";
import store from "../store/store";

export const authErrorAlert = (error) => {
  store.dispatch(
    alertSlice.actions.alertInfo({
      isOpen: true,
      message: error.code.split("/")[1],
    })
  );
  // closing alert after 6 sec
  setTimeout(() => {
    store.dispatch(
      alertSlice.actions.alertInfo({
        isOpen: false,
        message: null,
      })
    );
  }, 6000);
};
