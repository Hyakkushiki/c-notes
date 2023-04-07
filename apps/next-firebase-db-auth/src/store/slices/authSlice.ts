import { StateCreator } from "zustand";

import { ITask, ITasks } from "../types/ITask";

import { createContext, useContext, Context } from "react";
// import useFirebaseAuth from "../../lib/useFirebaseAuth";
import { firebaseAuth } from "../../lib/firebaseConfig";

import Firebase, {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  UserCredential,
} from "firebase/auth";
import { computed } from "zustand-middleware-computed-state";

type User = { uid: string; email: string };

export type FirebaseAuthType = {
  currentUser: User | null;
  loading: boolean;
  status: "unknown" | "anonymous" | "authenticated";

  // loginUser: (email: string, password: string) => Promise<UserCredential>; // typeof Firebase.signInWithEmailAndPassword;
  loginUser: (email: string, password: string) => void // Promise<UserCredential>; // typeof Firebase.signInWithEmailAndPassword;

  createUser: (email: string, password: string) => Promise<UserCredential>; //typeof Firebase.createUserWithEmailAndPassword;

  signOut: () => Promise<void>; // typeof Firebase.signOut;


  clearAuthState: () => void;

  // getSessionToken: () => firebaseUser.getIdToken(),
};

// export const useStore = StateCreator<ITasks>(
//   computed(
//     (set, get) => ({
//       currentUser: undefined,
//       getSessionToken: () => firebaseUser.getIdToken(),
//       login: (email, password) =>
//         auth.signInWithEmailAndPassword(email, password),
//       logout: () => auth.signOut(),
//     }),
//     (state) => {
//       let status =
//         state.currentUser === undefined
//           ? "unknown"
//           : state.currentUser === null
//           ? "anonymous"
//           : "authenticated";

//       return {
//         status,
//       };
//     }
//   )
// );



// const authStateChanged = async (authState: any) => { // UserCredential
//   // alert('inside authStateChanged, in useFirebaseAuth '+ ' authState: ' + authState)
//   // console.log('inside authStateChanged, in useFirebaseAuth', 'authState:',authState.email,authState.uid, !authState, !!authState)
//   // console.log(authState)
//   if (!authState) {
//     setAuthUser(null);
//     setLoading(false);
//     return;
//   }

//   setLoading(true);
//   const formattedUser = formatAuthUser({email:authState.email, uid:authState.uid});
//   setAuthUser(formattedUser);
//   setLoading(false);
// };





export const createAuthSlice: StateCreator<FirebaseAuthType> = (set, get) => ({
  currentUser: null,
  loading: true,
  status: "unknown",

  // const uc = await loginUser(email, password)

  // const useStore = create((set) => ({
  //   fishies: {},
  //   fetch: async (pond) => {
  //     const response = await fetch(pond)
  //     set({ fishies: await response.json() })
  //   },
  // }))

  loginUser: async (email, password) => {
    // return signInWithEmailAndPassword(firebaseAuth, email, password);
    const userCredential = await signInWithEmailAndPassword(firebaseAuth, email, password);
    const uid = userCredential.user.uid;
    const emailString =
      userCredential.user.email == null ? "" : userCredential.user.email;
    set({ currentUser: await { uid: uid, email: emailString } });
    set((state) => ({loading: false}))

    // return useFirebaseAuth().SignInWithEmailAndPassword(email, password);
    // const userCredential: UserCredential =
    //   await useFirebaseAuth().SignInWithEmailAndPassword(email, password);

    //   console.log('userCredential: ',userCredential)

    // const uid = userCredential.user.uid;
    // const emailString =
    //   userCredential.user.email == null ? "" : userCredential.user.email;

    // set({ currentUser: await { uid: uid, email: emailString } });

    // return userCredential

    // set((state) => ({currentUser: {uid: userCredential.user.uid, email: userCredential.user.email}}))
  },

  // loginUser: async (email, password) =>
  //   useFirebaseAuth()
  //     .SignInWithEmailAndPassword(email, password)
  //     .then((userCredential: UserCredential) => {
  //       console.log(
  //         "the returned user obj::",
  //         userCredential.user.email,
  //         userCredential.user.uid,
  //         userCredential.user.photoURL
  //       );

  //       set((state) => ({currentUser: {uid: userCredential.user.uid, email: userCredential.user.email}}))

  //       return userCredential;
  //     })
  //     .catch((error: any) => {
  //       console.log(
  //         error.code,
  //         "|",
  //         error.message,
  //         "|",
  //         email,
  //         "|",
  //         password
  //         // "authUser",
  //         // authUser,
  //         // "loading",
  //         // loading
  //       );
  //       // setError(error.message);

  //       return error;
  //     }),
  createUser: async (email, password) =>
    createUserWithEmailAndPassword(firebaseAuth, email, password),

  signOut: async () => firebaseAuth.signOut().then(),

  clearAuthState: () => {
    set((state) => ({currentUser: null}))
    set((state) => ({loading: true}))
  },
});

// export const createAuthSlice: StateCreator<FirebaseAuthType> = (set, get) => (
//   computed({
//   currentUser: null,
//   loading: true,
//   status: 'unknown',

//   // loginUser: async ()

//   // addTask(task: ITask) {
//   //   set((state) => ({ tasks: [...state.tasks, task] }));
//   // },

//   // getTask(id: string) {
//   //   const tasks = get().tasks;
//   //   const foundTask = tasks.find((task) => task.id == id);
//   //   return foundTask !== undefined ? foundTask : ({} as ITask);
//   // },

//   // editTask(editedTask: ITask) {
//   //   set((state) => ({
//   //     tasks: state.tasks.map((task) =>
//   //       task.id === editedTask.id ? editedTask : task
//   //     ),
//   //   }));
//   // },

//   // deleteTask(id: string) {
//   //   set((state) => ({
//   //     tasks: state.tasks.filter((task) => task.id !== id),
//   //   }));
//   // },

//   // UpdateTaskState(id) {
//   //   set((state) => ({
//   //     tasks: state.tasks.map((task) =>
//   //       task.id === id
//   //         ? ({ ...task, completed: !task.completed } as ITask)
//   //         : task
//   //     ),
//   //   }));
//   // },

//   // currentTask: {} as ITask,

//   // setCurrentTask(task) {
//   //   set((state) => ({ currentTask: task }));
//   // },
// }));
