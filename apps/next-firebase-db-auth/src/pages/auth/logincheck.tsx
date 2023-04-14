import { useEffect, useContext, useState } from "react";
import { useRouter } from "next/router";
import { UseAuthContext } from "../../context/AuthUserProvider";
import { firebaseAuth } from "../../lib/firebaseConfig";

import useStore from "@/store/useStore";

// import LoginPage from "./loginPage";

// import LoginPage from "./loginPage";

const LoginCheck = () => {
  // const { authUser, loading, signOut } = UseAuthContext();
  const _currentUser = useStore((state) => state.currentUser);
  const _loading = useStore((state) => state.loading);
  const _status = useStore((state) => state.status);
  const signOut = useStore((state) => state.signOut);
  const router = useRouter();

  const [currentUser, setCurrentUser] = useState<typeof _currentUser>(null);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState('');

  // Listen for changes on loading and authUser, redirect if needed

  useEffect(() => {
    console.log("loading:", _loading, "authUser:", _currentUser);
    console.log("logic::", !_loading, !!_currentUser, !_loading && !!_currentUser);

    setCurrentUser(_currentUser)
    setLoading(_loading)
    setStatus(_status)

    // if (loading && !authUser) router.push("/auth/loginPage");
    // // if (loading && !authUser) router.push("/api/hello");
    // if (loading && !authUser) router.push("/auth/loginpage");

    // // if (!loading && !authUser) router.push("/");
    // // if (!loading && !authUser) router.push("/auth/loginpage");

    // if (!loading && !!authUser) router.push("/");

    if (!_loading) {
      // Authentication state is still loading
      if (!!_currentUser) {
        // console.log("loading:::", loading, "authUser:::", authUser);
        // User is signed in
        router.push("/");
      } else {
        // console.log("loading:2::", loading, "authUser:::", authUser);
        // User is signed out
        router.push("/auth/loginPage");
      }
    } else {
      router.push("/auth/loginPage");
    }

  }, [_currentUser, _loading]);

  return (
    //Your logged in page
    <div>
      {/* <LoginPage /> */}
      <button onClick={() => signOut()}>Sign out</button>
      <h1>No cum myere byoaah!</h1>
      <p>loading: {loading.toString()}</p>
      <p>status: {status}</p>
      <p>
        authUser: {currentUser?.email}:: {currentUser?.uid}{" "}
      </p>
    </div>
  );
};

export default LoginCheck;
