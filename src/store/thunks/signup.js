import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
const signup = createAsyncThunk("users/signup", async (data) => {
  const { email, password } = data;
  const response = await createUserWithEmailAndPassword(auth, email, password);
  return response;
});

export { signup };
