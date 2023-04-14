import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import useStore from "@/store/useStore";

const LoginCheck = () => {
  const _currentUser = useStore((state) => state.currentUser);
  const _loading = useStore((state) => state.loading);
  const _status = useStore((state) => state.status);
  const signOut = useStore((state) => state.signOut);
  const router = useRouter();

  // const [currentUser, setCurrentUser] = useState<typeof _currentUser>(null);
  // const [loading, setLoading] = useState(true);
  // const [status, setStatus] = useState('');

  // Listen for changes on loading and authUser, redirect if needed
  useEffect(() => {
    console.log("loading:", _loading, "authUser:", _currentUser);
    console.log(
      "logic::",
      !_loading,
      !!_currentUser,
      !_loading && !!_currentUser
    );

    // setCurrentUser(_currentUser)
    // setLoading(_loading)
    // setStatus(_status)
    console.log(
      "val: -------------------------------------------------------------------------",
      JSON.stringify(_currentUser)
    );
    if (!_loading) {
      if (!!_currentUser) {
        // User is signed in
        router.push("/");
      } else {
        // User is signed out
        router.push("/auth/loginPage");
      }
    } else {
      router.push("/auth/loginPage");
    }
  }, [_currentUser, _loading, _status]);

  return <></>;
};

export default LoginCheck;
