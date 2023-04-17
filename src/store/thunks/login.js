import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
const login = createAsyncThunk("users/login", async (data) => {
  const { email, password } = data;
  const response = await signInWithEmailAndPassword(auth, email, password);
  return response;
});

export { login };
