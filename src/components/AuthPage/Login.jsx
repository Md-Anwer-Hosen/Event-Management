import React, { useContext, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Contexts/Authcontext";

const Login = () => {
  const { logInUser, signInUserWithGoogle, signInUserWithGithub } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState("");
  const from = location.state?.from?.pathname || "/home";

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    logInUser(email, password)
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch(() => {
        setError("Email or Password is Wrong");
      });
  };

  const handleGoogleLogin = () => {
    signInUserWithGoogle()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch();
  };

  const handleGithubLogin = () => {
    signInUserWithGithub()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch();
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-4">
      {/* Login Card */}
      <div className="w-full max-w-md border border-gray-300 rounded-md p-8 shadow-sm bg-white">
        <h2 className="text-2xl font-semibold mb-6">Login</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder=" Email"
            name="email"
            className="w-full border-b border-gray-300 py-2 mb-5 focus:outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            className="w-full border-b border-gray-300 py-2 mb-3 focus:outline-none"
          />

          {/* Remember Me + Forgot */}
          <div className="flex justify-between items-center text-sm mb-6">
            <a href="#" className="text-orange-500 hover:underline">
              Forgot Password
            </a>
          </div>
          <p className="text-red-700 font-semibold">{error}</p>

          {/* Login Button */}
          <button
            className="w-full bg-orange-400 text-white py-3 rounded-sm hover:bg-orange-500 transition "
            type="submit"
          >
            Login
          </button>
        </form>

        {/* Create Account Link */}
        <p className="text-center text-sm mt-4">
          Don’t have an account?{" "}
          <Link
            to={"/createaccount"}
            className="text-orange-500 hover:underline"
            state={{ from: location.state?.from || "/" }}
          >
            {" "}
            Create an account{" "}
          </Link>
        </p>
      </div>

      {/* Divider */}
      <div className="flex items-center w-full max-w-md my-6">
        <div className="flex-1 h-px bg-gray-300" />
        <span className="px-3 text-gray-500 text-sm">Or</span>
        <div className="flex-1 h-px bg-gray-300" />
      </div>

      {/* Google Button */}
      <button
        className="w-full max-w-md flex items-center justify-center gap-3 border  hover:bg-orange-500 hover:duration-500 border-gray-300 rounded-full py-3 bg-white"
        onClick={handleGoogleLogin}
      >
        <FcGoogle className="text-xl" />
        Continue with Google
      </button>

      {/* github Button */}
      <button
        className="w-full max-w-md flex items-center justify-center gap-3 border hover:bg-orange-500 hover:duration-500 border-gray-300 rounded-full py-3 mb-3 bg-white mt-5"
        onClick={handleGithubLogin}
      >
        <FaGithub className="text-blue-600 text-xl" />
        Continue with Github
      </button>
    </div>
  );
};

export default Login;
