import { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { UseAuthContext } from "../../context/AuthUserProvider";
import { firebaseAuth } from "../../lib/firebaseConfig";
// import LoginPage from "./loginPage";

// import LoginPage from "./loginPage";

const LoginCheck = () => {
  const { authUser, loading, signOut } = UseAuthContext();
  const router = useRouter();

  // Listen for changes on loading and authUser, redirect if needed
  useEffect(() => {
    console.log("loading:", loading, "authUser:", authUser);
    console.log("logic::", !loading, !!authUser, !loading && !!authUser);
    // if (loading && !authUser) router.push("/auth/loginPage");
    // // if (loading && !authUser) router.push("/api/hello");
    // if (loading && !authUser) router.push("/auth/loginpage");

    // // if (!loading && !authUser) router.push("/");
    // // if (!loading && !authUser) router.push("/auth/loginpage");

    // if (!loading && !!authUser) router.push("/");

    if (!loading) {
      // Authentication state is still loading
      if (!!authUser) {
        // console.log("loading:::", loading, "authUser:::", authUser);
        // User is signed in
        router.push("/");
      } else {
        // console.log("loading:2::", loading, "authUser:::", authUser);
        // User is signed out
        router.push("/auth/loginPage");
      }
    }

  }, [authUser, loading]);

  return (
    //Your logged in page
    <div>
      {/* <LoginPage /> */}
      <button onClick={() => signOut()}>Sign out</button>
      <h1>No cum myere byoaah!</h1>
      <p>
        authUser: {authUser?.email}:: {authUser?.uid}{" "}
      </p>
    </div>
  );
};

export default LoginCheck;
