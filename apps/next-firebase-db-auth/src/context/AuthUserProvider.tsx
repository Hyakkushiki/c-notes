import { createContext, useContext, Context } from "react";
import useFirebaseAuth from "../lib/useFirebaseAuth";

import Firebase, {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  UserCredential,
} from "firebase/auth";
import { firebaseAuth } from "../lib/firebaseConfig";

type User = { uid: any; email: any };

type AuthContextType = {
  authUser: User | null;
  loading: boolean;
  SignInWithEmailAndPassword: (
    email: string,
    password: string
  ) => Promise<UserCredential>; // typeof Firebase.signInWithEmailAndPassword;

  CreateUserWithEmailAndPassword: (
    email: string,
    password: string
  ) => Promise<UserCredential>; //typeof Firebase.createUserWithEmailAndPassword;

  signOut: () => Promise<void>; // typeof Firebase.signOut;
};

// const AuthUserContext = createContext<AuthContextType>({
//   authUser: null,
//   loading: true,
//   SignInWithEmailAndPassword: Firebase.signInWithEmailAndPassword,
//   CreateUserWithEmailAndPassword: Firebase.createUserWithEmailAndPassword,
//   signOut: Firebase.signOut,
// });

const AuthUserContext = createContext<AuthContextType>({
  authUser: null,
  loading: true,
  SignInWithEmailAndPassword: async (email: string, password: string) =>
  useFirebaseAuth().SignInWithEmailAndPassword(email, password),
    // signInWithEmailAndPassword(firebaseAuth, email, password),
  CreateUserWithEmailAndPassword: async (email: string, password: string) =>
    createUserWithEmailAndPassword(firebaseAuth, email, password),
  signOut: async () => signOut(firebaseAuth),
});

export function AuthUserProvider({ children }: any) {
  const auth = useFirebaseAuth();

  return (
    <AuthUserContext.Provider value={auth}>{children}</AuthUserContext.Provider>
  );
}
// custom hook to use the authUserContext and access authUser and loading
export const UseAuthContext = () => useContext(AuthUserContext);
