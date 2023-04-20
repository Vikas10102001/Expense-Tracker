import alertSlice from "../store/slice/alert";
import store from "../store/store";

export const authErrorAlert = (error) => {
  let message;
  if (error) {
    message = error.code.split("/")[1];
  } else {
    message = "Something went wrong";
  }
  store.dispatch(
    alertSlice.actions.alertInfo({
      isOpen: true,
      message: message,
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
