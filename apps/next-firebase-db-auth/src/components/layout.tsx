import Navbar from "./topNavbar";
import { UseAuthContext } from "@/context/AuthUserProvider";
import { useRouter } from "next/router";
import { useEffect } from "react";
import LoginCheck from "@/pages/auth/loginCheck";

type Props = {
  children: string | JSX.Element | JSX.Element[] | "() => JSX.Element";
};

export default function Layout({ children }: Props) {
  const { authUser, loading, signOut } = UseAuthContext();
  const router = useRouter();

  // Listen for changes on loading and authUser, redirect if needed
  useEffect(() => {
    console.log("layout ::", "loading:", loading, "authUser:", authUser);

    // if (!loading && !!authUser) router.push("/");
    // if (!!authUser) return;

    if (!loading) {
      // Authentication state is still loading
      if (!!authUser) {
        router.push("/notesPage");
      } else {
        // router.push("/auth/loginPage");
      }
    } 
    // else {
    //   router.push("/auth/loginPage");
    // }
  }, [authUser, loading]);

  return (
    <>
      <Navbar />
      <main>{children}</main>
      {/* <LoginCheck /> */}
    </>
  );
}

{
  /* <div className='flex flex-col h-screen w-screen'>
        <NavBar />
        <main className='flex flex-row justify-between p-4 w-full h-[calc(100vh_-_4rem)]'>
          <div className='w-80'>
            <LoggedIn />
            <NoteOperations getSingleNote={getSingleNote} />
          </div>
          <div className=''>
            <NoteDetails ID={ID} />
          </div>


        </main>
      </div> */
}

// useEffect(() => {
//     console.log("layout ::", "loading:", loading, "authUser:", authUser);
//     // console.log("logic::", !loading, !!authUser, !loading && !!authUser);
//     // if (loading && !authUser) router.push("/auth/loginpage");

//     // if (!loading && !!authUser) router.push("/");

//     if (!loading) {
//       // Authentication state is still loading
//       if (!!authUser) {
//         console.log("loading:::", loading, "authUser:::", authUser);
//         // User is signed in
//         router.push("/");
//       } else {
//         // console.log("loading:2::", loading, "authUser:::", authUser);
//         // User is signed out
//         router.push("/auth/loginPage");
//       }
//     }
//   }, [authUser, loading]);
