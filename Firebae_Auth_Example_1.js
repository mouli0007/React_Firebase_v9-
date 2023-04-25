import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth, googleProvider } from "../config/firebase-config";
import { ChangeEvent, useState } from "react";

export const Auth = (): any => {
  //

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    
  console.log(auth?.currentUser?.email);

  const emailChange = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const passwordchange = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  // Email Password Sign in !
  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setEmail("");
      setPassword("");
    } catch (err: any) {
      console.log(err);
      throw new Error(err);
    }
  };

  // SignIn with Google !

  const signInwithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err: any) {
      throw new Error(err);
    }
  };

  // Logout Functionality

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err: any) {
      console.log(err);
      throw new Error(err);
    }
  };

  return (
    <div>
      <input placeholder="Email...." onChange={emailChange} />
      <input type="password" placeholder="Password" onChange={passwordchange} />
      <button onClick={signIn}>Sign In</button>

      <button onClick={signInwithGoogle}>Sign in with Google </button>
      <br />
      <br />
      <button onClick={logout}>Logout</button>
    </div>
  );
};
