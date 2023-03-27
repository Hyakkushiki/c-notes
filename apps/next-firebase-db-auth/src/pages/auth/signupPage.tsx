import { FormEvent, useState, SetStateAction } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { UseAuthContext } from "../../context/AuthUserProvider";
import { firebaseAuth } from "../../lib/firebaseConfig";
import useFirebaseAuth from "@/lib/useFirebaseAuth";

import { UserCredential } from "firebase/auth";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const router = useRouter();
  const [error, setError] = useState(null);

  const { CreateUserWithEmailAndPassword } = useFirebaseAuth();
  // (value: UserCredential) => void | PromiseLike<void>
  const onSubmit = () => { // event: { preventDefault: () => void }
    setError(null);
    //check if passwords match. If they do, create user in Firebase
    // and redirect to your logged in page.
    if (passwordOne === passwordTwo)
      CreateUserWithEmailAndPassword(email, passwordOne)
        .then((authUser: UserCredential) => {
          console.log(
            "Success. The user is created in Firebase",
            "user::",
            authUser
          );
          router.push("/auth/logincheck");
        })
        .catch((error: { message: SetStateAction<null> }) => {
          // An error occurred. Set error message to be displayed to user
          setError(error.message);
        });
    else
      setError(() => {
        console.log("Password do not match");
        return null;
      });
    // event.preventDefault();
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-8 h-8 mr-2" src="https://img.freepik.com/free-vector/vintage-scrapbook-paper-collection_23-2148706134.jpg?w=996&t=st=1679899374~exp=1679899974~hmac=9b2b14cf2d925d82c936707cf53483943eddc2bcbae1545032c48a5121a5d637" alt="logo" />
          Notes
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Signup
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <input
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  type="email"
                  name="email" id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Email@Email.com" />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input value={passwordOne}
                  onChange={(event) => setPasswordOne(event.target.value)}
                  type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                <input value={passwordTwo}
                  onChange={(event) => setPasswordTwo(event.target.value)}
                  type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              </div>

              <button onClick={() => onSubmit()} type="submit" className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Signup</button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}



