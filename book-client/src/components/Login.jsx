import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider"
import Swal from "sweetalert2";
import googleLogo from '../assets/google-logo.svg';

const Login = () => {

    const { login, loginWithGoogle } = useContext(AuthContext);
    const [ error, setError ] = useState("");
  
    const location = useLocation();
    const navigate = useNavigate()
  
    const from = location.state?.from?.pathName || "/"
  
    const handleLogin = (event) => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      login(email,password)
      .then((userCredential) => {
        const user = userCredential.user;

        if(userCredential.operationType === "signIn") {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Login successfully",
                showConfirmButton: false,
                timer: 2500
              });       
        }

       console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage)
      });
    };
  
    // signin using google
    const signInWithGoogle = () => {
      loginWithGoogle()
      .then((result) => {
    //   console.log(result);
        const user = result.user;
        if(user.emailVerified === true) {
          Swal.fire({
              position: "center",
              icon: "success",
              title: "Login successfully",
              showConfirmButton: false,
              timer: 4000
            });       
      }
        navigate(from, { replace: true });    
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage)
      });
    }


  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Login Form </h1>
            </div>
            <div className="divide-y divide-gray-200">
              <form
                onSubmit={handleLogin}
                className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
              >
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Email address"
                  />
                </div>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Password"
                  />
                </div>
                
                    {
                        error ? <p className="text-rose-700">Check your email or password</p>: ""
                    }
                    
                <p>
                  Dont have any account? prease{" "}
                  <Link className="text-blue-500 underline" to="/sign-up">
                    sign-up
                  </Link>{" "}
                </p>
                <div className="relative">
                  <button className="bg-blue-500 text-white rounded-md px-6 py-2 w-full hover:bg-blue-800 transition-all ease-in duration-300">
                    Login
                  </button>
                </div>
              </form>
            </div>

            <hr className="border-blue-500" />

            <div className="mt-2 flex w-full items-center flex-col gap-3">
              <button onClick={signInWithGoogle} className="block"> <img src={googleLogo} alt="" className="w-12 h-12 inline-block" /> Login With Google</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login